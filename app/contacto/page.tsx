"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../components/language-provider";
import { trackMetaCustomEvent, trackMetaEvent } from "../lib/meta-pixel";
import styles from "./page.module.css";

export default function Contacto() {
  const { copy } = useLanguage();

  return (
    <div className={`pageShell ${styles.page}`}>
      <section className={styles.hero}>
        <span className="sectionEyebrow">{copy.contact.eyebrow}</span>
        <h1 className="sectionTitle">{copy.contact.title}</h1>
        <p className="sectionLead">{copy.contact.lead}</p>
      </section>

      <section className={styles.grid}>
        {copy.contact.items.map((dato, index) => {
          return (
            <motion.a
              key={dato.platform}
              href={dato.href}
              target={dato.isEmail ? undefined : "_blank"}
              rel={dato.isEmail ? undefined : "noreferrer"}
              onClick={() => {
                trackMetaEvent("Contact", { channel: dato.platform });
                trackMetaCustomEvent("ContactClick", {
                  channel: dato.platform,
                  destination: dato.href,
                });
              }}
              className={`${styles.card} glassPanel`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className={styles.iconWrap}>
                <Image src={dato.image} alt={dato.platform} width={60} height={60} />
              </div>
              <span className={styles.label}>{dato.platform}</span>
              <strong>{dato.visible}</strong>
              <p>{dato.isEmail ? copy.contact.directEmail : copy.contact.openChannel}</p>
            </motion.a>
          );
        })}
      </section>
    </div>
  );
}
