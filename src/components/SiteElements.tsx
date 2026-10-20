import React from "react";
import { ArrowUpRight } from "lucide-react";
import photoSources from "../data/photo-sources.json";

export function Photo({
  name,
  alt,
  className = "",
  priority = false,
  position,
}: {
  name: string;
  alt: string;
  className?: string;
  priority?: boolean;
  position?: string;
}) {
  const source = photoSources.find((photo) => photo.name === name);
  return (
    <img
      className={`photo ${className}`}
      src={`/images/${name}.webp`}
      srcSet={
        source && source.smallWidth < source.width
          ? `/images/${name}-small.webp ${source.smallWidth}w, /images/${name}.webp ${source.width}w`
          : undefined
      }
      sizes={priority ? "100vw" : "(max-width: 700px) 100vw, 50vw"}
      width={source?.width}
      height={source?.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      style={{ objectPosition: position }}
    />
  );
}
export function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  const external = href.startsWith("https://");
  return (
    <a
      className={`text-link${light ? " light" : ""}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <header className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-description">{description}</p>
    </header>
  );
}
export function ContactInvitation() {
  return (
    <section className="contact-invitation wrap">
      <div>
        <p className="eyebrow">함께 만드는 다음 이야기</p>
        <h2>어떤 일을 함께할까요?</h2>
      </div>
      <TextLink href="/contact/">기획 · 제작 · 운영 문의</TextLink>
    </section>
  );
}
