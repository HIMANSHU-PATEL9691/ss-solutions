import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden gold-gradient rounded-[2.5rem] p-10 md:p-16 text-center text-foreground"
        >
          {/* Decorative blur */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-black/20 rounded-full blur-3xl" />

          {/* Content */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-6"
          >
            Let’s Build Your{" "}
            <span className="underline underline-offset-8">
              Next-Gen Software
            </span>
          </motion.h2>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
            Whether you need an ERP system, CRM software, custom application, or
            a high-impact website — our experts are ready to turn your idea into
            a scalable digital product.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
            {[
              "Free Consultation",
              "Custom Pricing",
              "Industry Experts",
              "24/7 Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-foreground" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="xl"
              className="bg-foreground text-background hover:bg-foreground/90 group"
              asChild
            >
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background"
              asChild
            >
              <a href="tel:+910000000000">
                <Phone className="mr-2 w-5 h-5" />
                Talk to Expert
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
