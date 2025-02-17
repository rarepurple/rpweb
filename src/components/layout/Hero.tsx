import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, floatingAnimation } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Transform Your Business with Our Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Elevate your business with cutting-edge technology and innovative solutions 
              that drive growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              animate={floatingAnimation}
              className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-3/4 h-3/4 text-primary/40"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M45,-78.1C58.3,-71.2,69.1,-58.4,77.8,-43.7C86.5,-29,93.2,-12.4,89.8,2.5C86.4,17.4,73,30.5,61.4,42.6C49.8,54.7,40,65.8,27.1,71.5C14.2,77.2,-1.9,77.5,-17.9,74.3C-33.9,71.1,-49.8,64.4,-63.1,53.2C-76.4,42,-87.2,26.4,-89.9,9.1C-92.6,-8.2,-87.3,-27.2,-77.4,-42.8C-67.5,-58.4,-53,-70.7,-37.8,-76.4C-22.6,-82.1,-6.8,-81.3,7.3,-93.8C21.4,-106.3,31.7,-85,45,-78.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
