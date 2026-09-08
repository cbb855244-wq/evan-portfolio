import { FadeIn } from './fade-in';
import type { ReactNode } from 'react';

type MetaItem = {
  label: string;
  value: string;
};

type ProjectHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
};

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
  tone?: 'light' | 'dark';
  className?: string;
};

type ProjectSectionProps = {
  eyebrow: string;
  title: string;
  caption: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
};

type NextProjectProps = {
  href: string;
  titleZh: string;
  titleEn: string;
};

export function ProjectHero({
  eyebrow,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imageCaption = 'NIO HOUSE / RETAIL SPACE',
}: ProjectHeroProps) {
  return (
    <section className="nio-project-hero">
      <FadeIn className="nio-project-hero-copy">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        <div>
          <span>{subtitle}</span>
          <p>{description}</p>
        </div>
      </FadeIn>
      <ProjectImage
        alt={imageAlt}
        caption={imageCaption}
        src={image}
      />
    </section>
  );
}

export function ProjectMeta({ items }: { items: MetaItem[] }) {
  return (
    <section className="nio-project-meta" aria-label="项目基础信息">
      {items.map((item) => (
        <FadeIn as="article" key={item.label}>
          <p>{item.label}</p>
          <span>{item.value}</span>
        </FadeIn>
      ))}
    </section>
  );
}

export function ProjectStatement({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <section className="nio-project-statement">
      <FadeIn className="nio-statement-kicker">
        <p>{kicker}</p>
      </FadeIn>
      <FadeIn className="nio-statement-copy">
        <h2>{title}</h2>
        <p>{body}</p>
      </FadeIn>
    </section>
  );
}

export function ProjectSection({
  eyebrow,
  title,
  caption,
  children,
  tone = 'light',
}: ProjectSectionProps) {
  return (
    <section className={`nio-project-section nio-project-section-${tone}`}>
      <div className="nio-section-head">
        <FadeIn>
          <p>{eyebrow}</p>
          <h2>{title}</h2>
        </FadeIn>
        <ProjectCaption>{caption}</ProjectCaption>
      </div>
      {children}
    </section>
  );
}

export function ProjectImage({
  src,
  alt,
  caption,
  tone = 'light',
  className = '',
}: ProjectImageProps) {
  return (
    <FadeIn
      className={`nio-project-image nio-project-image-${tone} ${className}`}
    >
      <img src={src} alt={alt} />
      {caption && <ProjectCaption>{caption}</ProjectCaption>}
    </FadeIn>
  );
}

export function ProjectImagePair({
  first,
  second,
  tone = 'light',
}: {
  first: ProjectImageProps;
  second: ProjectImageProps;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className="nio-project-image-pair">
      <ProjectImage {...first} tone={tone} />
      <ProjectImage {...second} tone={tone} />
    </div>
  );
}

export function ProjectCaption({ children }: { children: ReactNode }) {
  return <p className="nio-project-caption">{children}</p>;
}

export function NextProject({ href, titleZh, titleEn }: NextProjectProps) {
  return (
    <section className="nio-next-project">
      <p>
        下一个项目
        <span>NEXT PROJECT</span>
      </p>
      <a href={href}>
        <span>{titleZh}</span>
        <strong>{titleEn}</strong>
      </a>
    </section>
  );
}
