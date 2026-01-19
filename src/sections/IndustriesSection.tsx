import { motion } from "framer-motion";
import {
  Building2,
  ShoppingCart,
  Stethoscope,
  GraduationCap,
  Factory,
  Home,
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: Factory,
      name: "Manufacturing",
      desc: "ERP & automation solutions for factories and plants",
    },
    {
      icon: ShoppingCart,
      name: "Retail & E-Commerce",
      desc: "POS, inventory & CRM for retail growth",
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
      desc: "Hospital, clinic & patient management systems",
    },
    {
      icon: GraduationCap,
      name: "Education",
      desc: "School, college & institute management software",
    },
    {
      icon: Building2,
      name: "Real Estate",
      desc: "CRM & property management platforms",
    },
    {
      icon: Home,
      name: "Hospitality",
      desc: "Hotel, resort & service industry solutions",
    },
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium mb-3 block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Solutions for Every{" "}
            <span className="gold-gradient-text">Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our ERP, CRM, and digital solutions are trusted across multiple
            industries to streamline operations and boost growth.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card gold-border rounded-2xl p-6 text-center hover-lift"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-display font-semibold mb-2">
                {item.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
