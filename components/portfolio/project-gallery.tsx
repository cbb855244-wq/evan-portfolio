import type { Project } from '@/src/data/projects';
import { FadeIn } from './fade-in';

type ProjectGalleryProps = {
  project: Project;
};

export function ProjectGallery({ project }: ProjectGalleryProps) {
  return (
    <section className="project-gallery" aria-label={`${project.titleZh} 图像`}>
      {project.images.map((image, index) => (
        <FadeIn
          key={image}
          className={`gallery-frame gallery-frame-${(index % 3) + 1}`}
        >
          <img src={image} alt={`${project.titleZh} 图像 ${index + 1}`} />
        </FadeIn>
      ))}
    </section>
  );
}
