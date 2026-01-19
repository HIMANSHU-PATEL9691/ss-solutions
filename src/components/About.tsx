import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technologies and creative solutions",
    },
    {
      icon: Heart,
      title: "Dedication",
      description: "Committed to delivering results that exceed expectations",
    },
  ];

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-medium mb-4 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Crafting Digital <span className="gold-gradient-text">Excellence</span>{" "}
              Since 2014
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              At SS Solutions, we believe that exceptional software is the cornerstone
              of business success. Our team of skilled developers and designers work
              tirelessly to create solutions that not only meet your needs but exceed
              your expectations.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              From elegant websites to comprehensive CRM systems, we bring a wealth
              of experience and a passion for innovation to every project. Our
              commitment to quality and client satisfaction has made us a trusted
              partner for businesses across industries.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Years" },
                { value: "150+", label: "Clients" },
                { value: "700+", label: "Projects" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold gold-gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card p-6 rounded-xl gold-border hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-foreground" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
