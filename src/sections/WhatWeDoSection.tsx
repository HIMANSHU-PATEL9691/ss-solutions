import { motion } from "framer-motion";
import { Layers, Smartphone, Code, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: Layers,
      title: "ERP Systems",
      description: "Enterprise process automation and business management",
    },
    {
      icon: Smartphone,
      title: "CRM Tools",
      description: "Customer relationship management to boost sales",
    },
    {
      icon: Code,
      title: "Custom Software",
      description: "Tailor-made software built for your workflow",
    },
    {
      icon: Globe,
      title: "Web Solutions",
      description: "High-end websites & animated web applications",
    },
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium mb-4 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Our Core <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From enterprise software to stunning animated websites, we deliver
            complete digital solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
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
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gold-gradient flex items-center justify-center">
                <service.icon className="w-7 h-7 text-foreground" />
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

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="gold" size="lg" className="group">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
