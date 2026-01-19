import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
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
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Software Solutions Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-border bg-card/50 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                80+ Premium Software Solutions
              </span>
            </motion.div>

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
              We deliver 80+ powerful software solutions including ERP, CRM, 
              stunning websites, and captivating animated web experiences.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {highlights.map((item, index) => (
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
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
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
                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium mb-4 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Our Core <span className="gold-gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From enterprise software to stunning animated websites, we deliver 
              comprehensive digital solutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-xl gold-border hover-lift text-center"
              >
                <div className="text-3xl font-display font-bold gold-gradient-text mb-2">
                  {service.count}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button variant="gold" size="lg" className="group">
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl gold-gradient p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-foreground/80 text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how our 80+ software solutions can help you achieve 
              your business goals. Get a free consultation today.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl" className="bg-foreground text-background hover:bg-foreground/90">
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
