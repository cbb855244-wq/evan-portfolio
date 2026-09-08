import type { Project } from '@/src/data/projects';

type ProjectInfoProps = {
  project: Project;
};

export function ProjectInfo({ project }: ProjectInfoProps) {
  const rows = [
    ['项目', 'PROJECT', project.titleZh],
    ['地点', 'LOCATION', project.locationZh],
    ['类型', 'TYPE', project.categoryZh],
    ['工作内容', 'ROLE', project.role.join(' / ')],
    ['年份', 'YEAR', project.year],
  ];

  return (
    <section className="project-info">
      {rows.map(([zh, en, value]) => (
        <div key={en}>
          <p>
            {zh}
            <span>{en}</span>
          </p>
          <p>{value}</p>
        </div>
      ))}
      {project.awards && (
        <div>
          <p>
            奖项
            <span>AWARDS</span>
          </p>
          <p>{project.awards.join(' / ')}</p>
        </div>
      )}
    </section>
  );
}
