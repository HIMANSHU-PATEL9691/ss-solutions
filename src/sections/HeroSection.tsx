import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const highlights = [
    "80+ Software Products",
    "ERP & CRM Solutions",
    "Animated Websites",
    "24/7 Support",
  ];

  const services = [
    {
      title: "ERP Software",
      description: "Complete enterprise resource planning solutions",
      count: "25+",
    },
    {
      title: "CRM Solutions",
      description: "Customer relationship management systems",
      count: "20+",
    },
    {
      title: "Website Development",
      description: "Custom responsive website design",
      count: "200+",
    },
    {
      title: "Animated Websites",
      description: "Interactive motion-rich web experiences",
      count: "50+",
    },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Software Solutions Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="container-custom relative z-12">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Elevate Your Business with{" "}
              <span className="gold-gradient-text">Elegant Digital</span>{" "}
              Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              We deliver powerful ERP, CRM, websites, and animated digital
              experiences that scale your business.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 bg-card/50 rounded-full backdrop-blur-sm"
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/services">
                <Button variant="gold" size="xl" className="group">
                  Explore Our Services
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="goldOutline" size="xl">
                  Get Free Consultation
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border/50"
            >
              {[
                { value: "80+", label: "Software Products" },
                { value: "500+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-4xl font-display font-bold gold-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES OVERVIEW ================= */}
      
    </>
  );
};

export default Index;
