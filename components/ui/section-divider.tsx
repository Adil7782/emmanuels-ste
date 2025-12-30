import React from "react"

interface SectionDividerProps {
    position?: "top" | "bottom"
    className?: string
    fill?: string
}

export function SectionDivider({
    position = "bottom",
    className = "",
    fill = "bg-background"
}: SectionDividerProps) {
    return (
        <div
            className={`absolute left-0 w-full overflow-hidden pointer-events-none z-20 ${position === "bottom"
                    ? "bottom-0 translate-y-px"
                    : "top-0 -translate-y-px rotate-180"
                } ${className}`}
        >
            <svg
                className={`relative block w-full h-[80px] md:h-[100px] ${fill.includes("bg-") ? "fill-current text-background" : ""
                    }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveFade" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopOpacity="1" />
                        <stop offset="70%" stopOpacity="0.85" />
                        <stop offset="100%" stopOpacity="0" />
                    </linearGradient>
                </defs>

                <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    fill={fill.startsWith("#") ? fill : "url(#waveFade)"}
                    className={fill.startsWith("#") ? "" : fill}
                />
            </svg>
        </div>
    )
}


export function GradientDivider({ position = "bottom", className = "" }: { position?: "top" | "bottom"; className?: string }) {
    return (
        <div
            className={`absolute left-0 right-0 h-48 md:h-64 lg:h-24 pointer-events-none z-10 ${position === "bottom"
                ? "bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent"
                : "top-0 bg-gradient-to-b from-background via-background/80 to-transparent"
                } ${className}`}
        />
    )
}
