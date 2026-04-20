"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../components/language-provider";
import styles from "./page.module.css";

export default function AboutPage() {
  const { copy } = useLanguage();

  return (
    <div className={`pageShell ${styles.page}`}>
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="sectionEyebrow">{copy.about.eyebrow}</span>
          <h1 className="sectionTitle">{copy.about.title}</h1>
          <p className="sectionLead">{copy.about.lead}</p>
        </motion.div>

        <motion.aside
          className={`${styles.summary} glassPanel`}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <span className={styles.summaryLabel}>{copy.about.summaryLabel}</span>
          <strong>{copy.about.summaryTitle}</strong>
          <p>{copy.about.summaryText}</p>
        </motion.aside>
      </section>

      <section className={styles.sectionGrid}>
        <div className={`${styles.panel} glassPanel`}>
          <span className="sectionEyebrow">{copy.about.strengthsEyebrow}</span>
          <div className={styles.strengths}>
            {copy.about.strengths.map((item) => (
              <div key={item} className={styles.strengthItem}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.panel} glassPanel`}>
          <span className="sectionEyebrow">{copy.about.workEyebrow}</span>
          <p className={styles.copy}>{copy.about.workText}</p>
        </div>
      </section>

      <section className={styles.timeline}>
        <div>
          <span className="sectionEyebrow">{copy.about.journeyEyebrow}</span>
          <h2 className="sectionTitle">{copy.about.journeyTitle}</h2>
        </div>

        <div className={styles.timelineGrid}>
          {copy.about.journey.map((item, index) => (
            <motion.article
              key={item.title}
              className={`${styles.timelineCard} glassPanel`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
