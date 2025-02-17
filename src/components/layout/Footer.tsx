import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { name: "Products", href: "#products" },
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const resources = [
  { name: "Documentation", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Support", href: "#" },
  { name: "Terms of Service", href: "#" },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const contactInfo = [
  {
    icon: MapPin,
    text: "123 Business Avenue, Tech District, 12345",
  },
  {
    icon: Phone,
    text: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    text: "contact@company.com",
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Brand</h3>
            <p className="text-muted-foreground">
              Transforming businesses with innovative solutions and cutting-edge
              technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-muted-foreground mt-1" />
                  <span className="text-muted-foreground">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
