"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./components/language-provider";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  const { copy } = useLanguage();
  const featuredProjects = copy.projects.slice(0, 3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("visit-registered")) {
        fetch("https://contador-python-47oo.onrender.com/visita")
          .then((res) => res.json())
          .then(() => {
            localStorage.setItem("visit-registered", "true");
          })
          .catch((err) =>
            console.error("No se pudo registrar la visita:", err),
          );
      }
    }
  }, []);

  return (
    <div className={`pageShell ${styles.page}`}>
      <section className={styles.hero}>
        <motion.div
          className={styles.heroCopy}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <span className="sectionEyebrow">{copy.home.eyebrow}</span>
          <h1 className={styles.heroTitle}>{copy.home.title}</h1>
          <p className={styles.heroLead}>{copy.home.lead}</p>

          <div className={styles.heroActions}>
            <Link href="/proyectos" className={styles.primaryAction}>
              {copy.home.primaryAction}
            </Link>
            <Link href="/contacto" className={styles.secondaryAction}>
              {copy.home.secondaryAction}
            </Link>
            <a
              className={styles.secondaryAction}
              href="/CV/Joaquin-Delgado-FullStackDeveloper.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.home.thirdAction}
            </a>
          </div>

          <div className={styles.statsGrid}>
            {copy.home.heroStats.map((item, index) => (
              <motion.div
                key={item.label}
                className={`${styles.statCard} glassPanel`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 + index * 0.12 }}
              >
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={`${styles.heroVisual} glassPanel`}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <div className={styles.profileWrap}>
            <Image
              src="/perfil/image.jpeg"
              alt="Foto de perfil de Joaquin Delgado"
              fill
              priority
              sizes="(max-width: 1080px) 100vw, 40vw"
              className={styles.profileImage}
            />
          </div>

          <div className={styles.floatingNote}>
            <span>{copy.home.floatingNoteLabel}</span>
            <strong>{copy.home.floatingNoteTitle}</strong>
          </div>

          <div className={styles.heroRibbon}>
            <span>React</span>
            <span>Next.js</span>
            <span>NestJS</span>
            <span>FastAPI</span>
            <span>PostgreSQL</span>
          </div>
        </motion.div>
      </section>

      <section className={styles.story}>
        <div>
          <span className="sectionEyebrow">{copy.home.storyEyebrow}</span>
          <h2 className="sectionTitle">{copy.home.storyTitle}</h2>
        </div>

        <div className={styles.storyGrid}>
          {copy.home.presentation.map((item, index) => (
            <motion.article
              key={item.title}
              className={`${styles.storyCard} glassPanel`}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <span className={styles.storyIndex}>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.featured}>
        <div className={styles.sectionHeading}>
          <div>
            <span className="sectionEyebrow">{copy.home.featuredEyebrow}</span>
            <h2 className="sectionTitle">{copy.home.featuredTitle}</h2>
          </div>
          <Link href="/proyectos" className={styles.inlineLink}>
            {copy.home.featuredLink}
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.slug}
              className={`${styles.projectCard} glassPanel`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
            >
              <div className={styles.projectImageWrap}>
                <Image
                  src={project.images}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1080px) 100vw, 33vw"
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectBody}>
                <span>{project.technologies.slice(0, 3).join(" · ")}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.inlineLink}
                >
                  {copy.home.openProject}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className={styles.techSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className="sectionEyebrow">{copy.home.stackEyebrow}</span>
            <h2 className="sectionTitle">{copy.home.stackTitle}</h2>
          </div>
          <p className="sectionLead">{copy.home.stackLead}</p>
        </div>

        <div className={styles.techGrid}>
          {Object.entries(copy.technologies).map(([category, items], index) => (
            <motion.article
              key={category}
              className={`${styles.techCard} glassPanel`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3>{formatCategory(category, copy.categories)}</h3>
              <div className={styles.techList}>
                {items.map((tech) => (
                  <div key={tech.name} className={styles.techItem}>
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={44}
                      height={44}
                      style={{ width: "auto", height: "auto" }}
                    />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

function formatCategory(category: string, labels: Record<string, string>) {
  return labels[category] ?? category;
}
