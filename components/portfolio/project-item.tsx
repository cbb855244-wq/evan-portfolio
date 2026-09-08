import type { Project } from '@/src/data/projects';
import { FadeIn } from './fade-in';

type ProjectItemProps = {
  project: Project;
  index: number;
};

export function ProjectItem({ project, index }: ProjectItemProps) {
  return (
    <FadeIn
      as="article"
      className={`project-item project-item-${index + 1}`}
      delay={index * 0.04}
    >
      <div className="project-meta">
        <span>{project.number}</span>
        <div>
          <h3>{project.titleZh}</h3>
          <p>{project.titleEn}</p>
        </div>
        <div className="project-category">
          <p>{project.categoryZh}</p>
          <p>{project.categoryEn}</p>
          {project.awards && (
            <p className="project-awards">{project.awards.join(' / ')}</p>
          )}
        </div>
      </div>

      <a className="project-image-link" href={`/projects/${project.slug}`}>
        <img src={project.coverImage} alt={`${project.titleZh} 项目图片`} />
        <span>进入项目 →</span>
      </a>
    </FadeIn>
  );
}
