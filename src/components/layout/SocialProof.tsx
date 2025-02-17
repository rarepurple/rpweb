import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerChildren } from "@/lib/animations";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content: "The solutions provided have transformed our business operations completely.",
    avatar: "SJ",
  },
  {
    name: "Mark Williams",
    role: "CTO at InnovateCo",
    content: "Exceptional service and outstanding results. Highly recommended!",
    avatar: "MW",
  },
  {
    name: "Emily Chen",
    role: "Founder at StartupX",
    content: "Their innovative approach has helped us scale rapidly and efficiently.",
    avatar: "EC",
  },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say
            about our solutions.
          </p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar>
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
