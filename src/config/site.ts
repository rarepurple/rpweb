export const siteConfig = {
  name: "rarePurple",
  description: "Your Seasonal Needs",
  logo: {
    path: "/assets/Company_logo.png",
    alt: "rarePurple Logo"
  },
  theme: {
    primary: "hsl(270 95% 50%)",
    radius: 1.5
  },
  navigation: {
    items: [
      { name: "Products", href: "#products" },
      { name: "Benefits", href: "#benefits" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    cta: {
      text: "Shop Now",
      href: "#"
    }
  },
  hero: {
    title: "Your Seasonal Needs, Delivered",
    description: "Discover curated seasonal essentials tailored to your lifestyle. From summer essentials to winter must-haves, we've got you covered.",
    primaryButton: {
      text: "Shop Now",
      href: "#"
    },
    secondaryButton: {
      text: "Learn More",
      href: "#"
    }
  },
  products: {
    title: "Our Products",
    description: "Discover our range of innovative solutions designed to help your business thrive in the digital age.",
    items: [
      {
        title: "Enterprise Solutions",
        description: "Scalable solutions for growing businesses",
        features: [
          "Feature one",
          "Feature two",
          "Feature three"
        ]
      },
      // Add more products as needed
    ]
  },
  benefits: {
    title: "Why Choose Our Solutions?",
    description: "We provide comprehensive solutions that help businesses grow and succeed in today's competitive market.",
    items: [
      "Increase productivity by 50%",
      "Reduce operational costs",
      "Enhance customer satisfaction",
      "Scale your business efficiently",
      "24/7 dedicated support",
      "Regular updates and improvements"
    ]
  },
  contact: {
    title: "Get in Touch",
    description: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    formspreeId: "YOUR_FORM_ID" // Replace with your Formspree form ID
  },
  footer: {
    quickLinks: [
      { name: "Products", href: "#products" },
      { name: "Benefits", href: "#benefits" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Support", href: "#" },
      { name: "Terms of Service", href: "#" }
    ],
    social: [
      { platform: "GitHub", href: "#", label: "GitHub" },
      { platform: "Twitter", href: "#", label: "Twitter" },
      { platform: "LinkedIn", href: "#", label: "LinkedIn" },
      { platform: "Instagram", href: "#", label: "Instagram" }
    ],
    contact: {
      address: "123 Business Avenue, Tech District, 12345",
      phone: "+1 (555) 123-4567",
      email: "contact@company.com"
    }
  }
} as const;

export type SiteConfig = typeof siteConfig;
