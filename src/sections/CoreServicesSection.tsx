import { motion } from "framer-motion";
import { Briefcase, Rocket, Layout, CheckCircle } from "lucide-react";

const CoreServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "ERP Solutions",
      subtitle: "Enterprise Management",
      items: [
        "Manufacturing ERP",
        "Retail ERP",
        "Education ERP",
        "Healthcare ERP",
      ],
    },
    {
      icon: Rocket,
      title: "CRM Solutions",
      subtitle: "Sales & Customer Growth",
      items: [
        "Sales CRM",
        "Marketing CRM",
        "Support CRM",
        "Real Estate CRM",
      ],
    },
    {
      icon: Layout,
      title: "Web Solutions",
      subtitle: "Digital Experience",
      items: [
        "Business Websites",
        "E-commerce Platforms",
        "Animated Websites",
        "Custom Web Apps",
      ],
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium mb-3 block">
            Core Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Solutions That <span className="gold-gradient-text">Power Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            End-to-end digital solutions designed to streamline operations,
            boost productivity, and scale your business.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-card p-8 rounded-3xl gold-border hover-lift relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gold-gradient flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                {service.subtitle}
              </p>

              {/* List */}
              <ul className="space-y-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Decorative Gradient */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
