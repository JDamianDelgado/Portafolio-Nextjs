"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "./language-provider";
import styles from "./navbar.module.css";

export default function NavBar() {
  const pathname = usePathname();
  const [dark, setDark] = useState(true);
  const { copy, toggleLocale } = useLanguage();

  useEffect(() => {
    document.documentElement.classList.toggle("dark-theme", dark);
  }, [dark]);

  return (
    <header className={styles.wrapper}>
      <nav className={`${styles.navbar} glassPanel pageShell`}>
        <div className={styles.links}>
          <span className={styles.brandBadge}>JD</span>
          {copy.nav.links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className={styles.link}>
                <span>{link.label}</span>
                {active ? (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className={styles.activePill}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </Link>
            );
          })}
          <div className={styles.buttonCajon}>
            <button
              type="button"
              className={styles.languageToggle}
              onClick={toggleLocale}
              aria-label={copy.nav.toggleLanguage}
              title={copy.nav.toggleLanguage}
            >
              <LanguageIcon className={styles.themeIcon} />
              <span>{copy.nav.languageBadge}</span>
            </button>

            <button
              type="button"
              className={styles.themeToggle}
              onClick={() => setDark((current) => !current)}
              aria-label={
                dark ? copy.nav.toggleTheme.light : copy.nav.toggleTheme.dark
              }
            >
              {dark ? (
                <SunIcon className={styles.themeIcon} />
              ) : (
                <MoonIcon className={styles.themeIcon} />
              )}
            </button>
          </div>
        </div>

        <div className={styles.actions}></div>
      </nav>
    </header>
  );
}
