"use client";

import { useLanguage } from "./language-provider";

export default function FooterCopy() {
  const { copy } = useLanguage();

  return (
    <>
      <span>{copy.footer.brand}</span>
      <span>{copy.footer.text}</span>
    </>
  );
}
