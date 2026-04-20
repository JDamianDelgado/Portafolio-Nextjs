"use client";

import { motion } from "framer-motion";
import { CardProyectos } from "../components/cardProyectos";
import { useLanguage } from "../components/language-provider";
import styles from "./Proyecto.module.css";

export default function Proyectos() {
  const { copy } = useLanguage();

  return (
    <div className={`pageShell ${styles.container}`}>
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="sectionEyebrow">{copy.projectsPage.eyebrow}</span>
        <h1 className="sectionTitle">{copy.projectsPage.title}</h1>
        <p className="sectionLead">{copy.projectsPage.lead}</p>
      </motion.section>

      <section className={styles.cardsContainer}>
        {copy.projects.map((proyecto) => (
          <CardProyectos key={proyecto.slug} proyecto={proyecto} />
        ))}
      </section>
    </div>
  );
}
