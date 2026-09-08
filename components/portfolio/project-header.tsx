import type { Project } from '@/src/data/projects';
import { FadeIn } from './fade-in';

type ProjectHeaderProps = {
  project: Project;
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <FadeIn className="project-header">
      <div className="project-header-title">
        <p>{project.number}</p>
        <h1>{project.titleZh}</h1>
        <p>{project.titleEn}</p>
      </div>
      <div className="project-header-copy">
        <p>{project.categoryZh}</p>
        <p>{project.locationEn}</p>
        <p>{project.descriptionZh}</p>
      </div>
    </FadeIn>
  );
}
