import type { Metadata } from 'next';
import { ContactSection } from '@/components/portfolio/contact-section';
import { Footer } from '@/components/portfolio/footer';
import { Navbar } from '@/components/portfolio/navbar';
import { NioCaohejingProject } from '@/components/portfolio/nio-caohejing-project';
import { NioHouseProject } from '@/components/portfolio/nio-house-project';
import { NioNscProject } from '@/components/portfolio/nio-nsc-project';
import { ProjectGallery } from '@/components/portfolio/project-gallery';
import { ProjectHeader } from '@/components/portfolio/project-header';
import { ProjectInfo } from '@/components/portfolio/project-info';
import { SongqinOfficeProject } from '@/components/portfolio/songqin-office-project';
import { getNextProject, getProject, projects } from '@/src/data/projects';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: '项目未找到｜成斌',
    };
  }

  return {
    title: `${project.titleZh}｜成斌空间设计作品集`,
    description: project.descriptionZh,
    openGraph: {
      title: `${project.titleZh}｜${project.titleEn}`,
      description: project.descriptionZh,
      images: [project.coverImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.titleZh}｜${project.titleEn}`,
      description: project.descriptionZh,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <main>
        <Navbar />
        <section className="not-found-panel">
          <p className="eyebrow">PROJECT</p>
          <h1>项目未找到</h1>
          <a href="/">返回首页 →</a>
        </section>
      </main>
    );
  }

  const nextProject = getNextProject(project.slug);

  if (project.slug === 'nio-house') {
    return (
      <main className="nio-project-page">
        <Navbar />
        <NioHouseProject />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (project.slug === 'nio-nsc') {
    return (
      <main className="nio-project-page">
        <Navbar />
        <NioNscProject />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (project.slug === 'nio-caohejing') {
    return (
      <main className="nio-project-page">
        <Navbar />
        <NioCaohejingProject />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  if (project.slug === 'songqin-office') {
    return (
      <main className="nio-project-page">
        <Navbar />
        <SongqinOfficeProject />
        <ContactSection />
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <ProjectHeader project={project} />
      <ProjectInfo project={project} />
      <ProjectGallery project={project} />
      <section className="next-project">
        <p>
          下一个项目
          <span>NEXT PROJECT</span>
        </p>
        <a href={`/projects/${nextProject.slug}`}>{nextProject.titleZh} →</a>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
