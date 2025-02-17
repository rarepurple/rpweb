import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft } from "@/lib/animations";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Increase productivity by 50%",
  "Reduce operational costs",
  "Enhance customer satisfaction",
  "Scale your business efficiently",
  "24/7 dedicated support",
  "Regular updates and improvements",
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent" />
          </motion.div>

          <motion.div
            variants={slideInFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Our Solutions?
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide comprehensive solutions that help businesses grow and succeed
              in today's competitive market.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
