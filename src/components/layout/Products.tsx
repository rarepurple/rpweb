import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";
import { Laptop, Shield, Zap } from "lucide-react";

const products = [
  {
    title: "Enterprise Solutions",
    description: "Scalable solutions for growing businesses",
    icon: Laptop,
  },
  {
    title: "Security First",
    description: "Advanced security measures to protect your data",
    icon: Shield,
  },
  {
    title: "Lightning Fast",
    description: "Optimized performance for seamless operations",
    icon: Zap,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our range of innovative solutions designed to help your business thrive
            in the digital age.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Feature one</li>
                    <li>• Feature two</li>
                    <li>• Feature three</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
