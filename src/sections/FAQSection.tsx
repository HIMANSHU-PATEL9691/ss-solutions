import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does your company provide?",
    a: "We provide ERP software, CRM solutions, custom software development, business websites, e-commerce platforms, and animated websites tailored to your business needs.",
  },
  {
    q: "Do you offer customized ERP or CRM solutions?",
    a: "Yes. All our ERP and CRM solutions are fully customizable based on your industry, workflows, and business requirements.",
  },
  {
    q: "How long does it take to develop a website?",
    a: "A basic business website usually takes 2–4 weeks. Complex systems like ERP, CRM, or animated websites may take 6–12 weeks depending on features.",
  },
  {
    q: "Is technical support available after project delivery?",
    a: "Absolutely. We provide 24/7 support, maintenance, bug fixes, and upgrade assistance after delivery.",
  },
  {
    q: "Can your software scale as my business grows?",
    a: "Yes. Our software is built using scalable architecture, allowing you to add new users, modules, and features anytime.",
  },
  {
    q: "Do you provide demo before purchase?",
    a: "Yes, we provide live demos for ERP, CRM, and other software products so you can evaluate before finalizing.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked{" "}
            <span className="gold-gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our software solutions.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl gold-border p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-border/50"
              >
                <AccordionTrigger className="text-left font-medium text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
