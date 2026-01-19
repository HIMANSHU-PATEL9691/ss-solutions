import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      subValue: "+91 98765 43211",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@sssolutions.com",
      subValue: "support@sssolutions.com",
      href: "mailto:contact@sssolutions.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Mumbai, Maharashtra",
      subValue: "India - 400001",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon – Fri: 9:00 AM – 6:00 PM",
      subValue: "Sat: 10:00 AM – 4:00 PM",
      href: "#",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to deliver a project?",
      answer:
        "Project timelines depend on complexity. Websites usually take 2–6 weeks, while custom software timelines vary based on requirements.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide ongoing support and knowledgable maintenance packages for all our solutions.",
    },
    {
      question: "Can your software be customized?",
      answer:
        "Absolutely. All our solutions are flexible and can be customized to fit your business needs.",
    },
    {
      question: "Which industries do you work with?",
      answer:
        "We work with manufacturing, retail, healthcare, education, hospitality, real estate, and more.",
    },
  ];

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-primary font-medium mb-4 block">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let’s Connect &{" "}
              <span className="gold-gradient-text">Collaborate</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Reach out to us via phone, email, or visit our office to discuss
              how we can help grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-12 -mt-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-card p-6 rounded-xl gold-border hover-lift text-center block"
              >
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-5 h-5 text-foreground" />
                </div>
                <h4 className="font-display font-semibold mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-foreground">{item.value}</p>
                <p className="text-sm text-muted-foreground">{item.subValue}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + WHY US */}
      <section className="section-padding" ref={ref}>
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-bold">
                Frequently Asked Questions
              </h2>

              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-card p-5 rounded-xl gold-border"
                >
                  <h4 className="font-semibold mb-2 text-sm">
                    {faq.question}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* WHY CHOOSE US */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl gold-border"
            >
              <h3 className="text-2xl font-display font-bold mb-6">
                Why Choose SS Solutions?
              </h3>
              <div className="space-y-3">
                {[
                  "80+ ready-to-deploy software products",
                  "10+ years of industry experience",
                  "500+ satisfied clients worldwide",
                  "24/7 technical support",
                  "Flexible & scalable solutions",
                  "Competitive pricing",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm text-foreground/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Visit Our <span className="gold-gradient-text">Office</span>
            </h2>
            <p className="text-muted-foreground">
              Schedule a visit or get directions to our office.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden gold-border h-80 md:h-96 bg-card flex items-center justify-center"
          >
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl mb-2">
                SS Solutions
              </h3>
              <p className="text-muted-foreground">
                Business Center, Lower Parel<br />
                Mumbai, Maharashtra 400013<br />
                India
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="goldOutline" size="lg">
                  Get Directions
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

