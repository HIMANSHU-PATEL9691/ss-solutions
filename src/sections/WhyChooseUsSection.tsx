import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, BarChart } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "80+ Ready Products",
      desc: "Proven ERP, CRM & software solutions ready to deploy",
    },
    {
      icon: Zap,
      title: "High Efficiency",
      desc: "Automate workflows and reduce manual work by up to 60%",
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      desc: "Dedicated technical support whenever you need help",
    },
    {
      icon: BarChart,
      title: "Smart Reports",
      desc: "Real-time insights to make better business decisions",
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
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Built for <span className="gold-gradient-text">Performance</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don’t just build software — we create scalable solutions that
            help businesses grow faster and smarter.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-card p-8 rounded-2xl gold-border hover-lift"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>

              <h4 className="font-display font-semibold text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
