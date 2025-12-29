// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Type definition for the request body
interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    // 1. Security: Check for API Key existence
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const body: ContactFormData = await request.json()
    const { name, email, subject, message } = body

    // 2. Validation: Strict input validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      )
    }

    // 3. Execution: Send email
    // We destructure data and error to handle API-specific failures gracefully
    const { data, error } = await resend.emails.send({
      from: 'ELIoT Global <notifications@eliot.global>', // Ensure this domain is verified in Resend
      to: ['jsudeera@gmail.com'],
      replyTo: email,
      subject: `[New Inquiry] ${subject}`, // Prefix helps you filter in your inbox
      text: generatePlainText(name, email, subject, message), // Fallback for accessibility/spam filters
      html: generateHtmlTemplate(name, email, subject, message),
    })

    // 4. Error Handling: specific Resend API errors
    if (error) {
      console.error('Resend API Error:', error)
      return NextResponse.json(
        { error: 'Failed to send email via provider', details: error.message },
        { status: 500 }
      )
    }

    // 5. Success Response
    return NextResponse.json(
      { success: true, message: 'Inquiry sent successfully', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    // Catch unexpected server errors (e.g., JSON parsing failure)
    console.error('Unexpected Server Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// --- Helper Functions ---

/**
 * Generates a plain text version for accessibility and anti-spam scoring.
 */
function generatePlainText(name: string, email: string, subject: string, message: string) {
  return `
New Contact Form Submission
---------------------------
Name: ${name}
Email: ${email}
Subject: ${subject}
Received: ${new Date().toLocaleString()}

Message:
${message}
  `.trim()
}

/**
 * Generates the HTML template. 
 * Kept separate to ensure the API logic remains readable.
 */
function generateHtmlTemplate(name: string, email: string, subject: string, message: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7fa; -webkit-font-smoothing: antialiased;">
        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f7fa;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
                
                <tr>
                  <td style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                      📬 New Inquiry Received
                    </h1>
                    <p style="margin: 10px 0 0; color: #e0e7ff; font-size: 14px;">
                      Emmanuel's Lanka - IoT Solutions
                    </p>
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <div style="margin-bottom: 30px;">
                      <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Contact Details
                      </h2>
                      <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 100px;">Name</td>
                          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">
                            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Subject</td>
                          <td style="padding: 8px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px;">${subject}</td>
                        </tr>
                         <tr>
                          <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Time</td>
                          <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">
                            ${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
                          </td>
                        </tr>
                      </table>
                    </div>
                    
                    <div>
                      <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                        Message
                      </h2>
                      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                        <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </div>

                    <div style="margin-top: 30px; text-align: center;">
                       <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject)}" 
                          style="display: inline-block; padding: 12px 24px; background-color: #2563eb; color: #ffffff; text-decoration: none; border-radius: 6px; font-size: 14px; font-weight: 600;">
                         Reply to ${name.split(' ')[0]}
                       </a>
                    </div>
                    
                  </td>
                </tr>
                
                <tr>
                  <td style="padding: 20px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                      Sent via ELIoT Global Contact Form
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `
}