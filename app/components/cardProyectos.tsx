"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import styles from "./cardProyectos.module.css";

type Proyecto = {
  slug: string;
  title: string;
  description: string;
  images: string;
  technologies: string[];
  url: string;
};

export function CardProyectos({ proyecto }: { proyecto: Proyecto }) {
  const { copy } = useLanguage();

  return (
    <motion.article
      className={`${styles.cardProyecto} glassPanel`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
    >
      <div className={styles.imageContenedor}>
        <Image
          src={proyecto.images}
          alt={proyecto.title}
          fill
          sizes="(max-width: 980px) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.topRow}>
          <span className={styles.badge}>{proyecto.slug.replaceAll("-", " ")}</span>
          <a href={proyecto.url} target="_blank" rel="noreferrer" className={styles.link}>
            {copy.projectsPage.viewProject}
          </a>
        </div>

        <h2>{proyecto.title || copy.projectsPage.comingSoon}</h2>
        <p>{proyecto.description}</p>

        <div className={styles.tags}>
          {proyecto.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
