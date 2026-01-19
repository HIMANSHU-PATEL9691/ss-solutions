import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, BarChart3, Palette, Zap, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import websiteImg from "@/assets/website-service.jpg";
import crmImg from "@/assets/crm-service.jpg";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainServices = [
    {
      title: "Stylish Website Design",
      description:
        "We create visually stunning, responsive websites that captivate your audience and drive conversions. Every pixel is crafted to perfection.",
      image: websiteImg,
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
      icon: Globe,
    },
    {
      title: "CRM Software Solutions",
      description:
        "Streamline your customer relationships with our powerful, intuitive CRM software. Manage leads, track sales, and grow your business.",
      image: crmImg,
      features: ["Lead Management", "Sales Tracking", "Analytics Dashboard", "Team Collaboration"],
      icon: BarChart3,
    },
  ];

  const additionalServices = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centric interfaces that enhance engagement",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications that keep users engaged",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Enterprise-grade security for your digital assets",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            What We <span className="gold-gradient-text">Provide</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transform your business with our premium digital solutions. We specialize
            in creating experiences that leave lasting impressions.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="space-y-20 mb-20">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl gold-border">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gold-gradient rounded-2xl -z-10 opacity-50" />
              </motion.div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl gold-gradient mb-6">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {service.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-foreground/80"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="gold" size="lg" className="group">
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
            Additional <span className="gold-gradient-text">Expertise</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card p-6 rounded-xl gold-border hover-lift text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
