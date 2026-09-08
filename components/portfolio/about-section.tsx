import { FadeIn } from './fade-in';
import { SectionLabel } from './section-label';

const practices = [
  ['商业零售', 'Retail'],
  ['办公空间', 'Workplace'],
  ['品牌体验', 'Brand Experience'],
];

const approaches = [
  ['概念构思', 'Concept'],
  ['空间规划', 'Spatial Planning'],
  ['材料与细节', 'Material & Detail'],
  ['设计深化', 'Design Development'],
  ['落地协同', 'Implementation'],
];

const tools = ['CAD', 'SketchUp', 'Photoshop', 'Revit', 'AIGC'];

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <FadeIn className="about-grid">
        <div className="about-heading">
          <p className="eyebrow">ABOUT</p>
          <h2>关于</h2>
        </div>
        <div className="about-copy">
          <p>成斌，空间设计师，现工作于上海。</p>
          <p>
            设计实践主要围绕商业零售、汽车品牌空间与办公环境展开，从概念构思、空间规划，到材料研究、设计深化与现场落地，持续探索空间体验与品牌表达之间的关系。
          </p>
          <p>
            相较于单纯塑造形式，更关注空间如何回应品牌特质、人的行为以及真实使用场景，并通过材质、比例、光影与细节，让设计从概念自然生长为可以被感知的空间。
          </p>
        </div>
      </FadeIn>

      <FadeIn className="practice-block">
        <SectionLabel title="设计实践" label="PRACTICE" />
        <div className="practice-grid">
          {practices.map(([zh, en]) => (
            <div key={zh}>
              <h3>{zh}</h3>
              <p>{en}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="approach-block">
        <SectionLabel title="工作方式" label="APPROACH" />
        <div className="approach-list">
          {approaches.map(([zh, en], index) => (
            <div key={zh}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{zh}</h3>
              <p>{en}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="tools-row">
        <p>TOOLS</p>
        <div>
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
