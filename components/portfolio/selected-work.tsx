import { projects } from '@/src/data/projects';
import { ProjectItem } from './project-item';
import { SectionLabel } from './section-label';

export function SelectedWork() {
  return (
    <section className="selected-work" id="projects">
      <SectionLabel title="精选项目" label="SELECTED WORK" />
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
