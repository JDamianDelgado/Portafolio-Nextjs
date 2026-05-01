import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import FooterCopy from "./components/footer-copy";
import { LanguageProvider } from "./components/language-provider";
import { MetaPixel } from "./components/meta-pixel";
import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joaquin Delgado | Full Stack Developer",
  description:
    "Portfolio de Joaquin Delgado, desarrollador full stack enfocado en productos web con buen criterio visual y experiencia de usuario.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="pageShell" style={{ paddingBottom: "2.5rem" }}>
            <div
              className="glassPanel"
              style={{
                borderRadius: "28px",
                padding: "1.2rem 1.4rem",
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                color: "var(--muted)",
                fontSize: "0.95rem",
              }}
            >
              <FooterCopy />
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
