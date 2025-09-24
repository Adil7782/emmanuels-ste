import { Button } from "@/components/ui/button"
import { Check, ShoppingCart } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      name: "Customizable Solution",
      price: "$+",
      period: "project",
      features: ["Custom Design", "Apparel, Plant & Machinery", "Custom Development", "Bangladesh", "Off the Shelf"],
      popular: false,
    },
    {
      name: "ELIOT",
      price: "$270",
      period: "one",
      features: [
        "Basic Version",
        "Factory Floor Digitization solution",
        "Bangladesh, Jordan, Vietnam, Sri Lanka",
        "370 USD per Unit",
      ],
      popular: true,
    },
    {
      name: "Software Portal",
      price: "$12000",
      period: "one",
      features: ["Software Portal", "Sewing Floor", "Yearly License", "All countries", "12000 USD per year"],
      popular: false,
    },
  ]

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Products</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            This is our marketplace where you can purchase our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative bg-card rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                product.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{product.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{product.price}</span>
                  <span className="text-muted-foreground ml-2">/ {product.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  product.popular
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Buy Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
