import {
  NextProject,
  ProjectHero,
  ProjectImage,
  ProjectMeta,
  ProjectSection,
  ProjectStatement,
} from './project-detail';

const imageBase = '/images/projects/nio-caohejing';

export function NioCaohejingProject() {
  return (
    <>
      <ProjectHero
        eyebrow="03 / PROJECT"
        title="NIO CAOHEJING"
        subtitle="OFFICE / 蔚来漕河泾办公空间"
        description="流动的科技，生长的办公场景。"
        image={`${imageBase}/info-exterior.webp`}
        imageAlt="蔚来漕河泾办公空间入口与展示区域"
        imageCaption="NIO CAOHEJING OFFICE"
      />

      <ProjectMeta
        items={[
          {
            label: 'PROJECT',
            value: '漕河泾科技绿洲5期 18 / 19 / 20号楼办公区设计',
          },
          { label: 'TYPE', value: '总部办公 / Workplace' },
          { label: 'LOCATION', value: '上海 / Shanghai' },
          { label: 'AREA', value: '24000 m²' },
          { label: 'CLIENT', value: '蔚来汽车' },
          { label: 'STATUS', value: '已建成' },
          { label: 'PROJECT TIME', value: '2022 / 03' },
          { label: 'YEAR', value: '2022' },
          { label: 'ROLE', value: '概念贡献 / 方案深化 / 材料研究 / 现场落地协同' },
        ]}
      />

      <ProjectStatement
        kicker="01 / CONCEPT"
        title="流动的艺术，构成科技办公的空间秩序。"
        body="蔚来汽车流线型车身所体现的简约、自信与科技感，被转译为空间中的流动轮廓与设计语言，在实用与美观之间建立平衡。"
      />

      <ProjectSection
        eyebrow="01 / AESTHETICS OF TECHNOLOGY"
        title="科技美学"
        caption="曲线天花、玻璃会议室与开放办公共同形成连续的空间流动关系。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-cao-tech">
          <ProjectImage
            alt="蔚来漕河泾办公空间曲线玻璃会议室效果图"
            caption="DESIGN VIEW"
            className="nio-img-main"
            src={`${imageBase}/technology-01.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间茶水与开放办公效果图"
            caption="WORKPLACE"
            className="nio-img-offset"
            src={`${imageBase}/technology-02.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间开放办公与洽谈区效果图"
            className="nio-img-wide"
            src={`${imageBase}/technology-03.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间开放办公与曲线天花效果图"
            caption="INTERIOR VIEW"
            className="nio-img-small"
            src={`${imageBase}/technology-04.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="02 / ECOLOGICAL OFFICE"
        title="在理性的工作环境中，植入自然与愉悦。"
        caption="绿色生态与空间介入，让办公、社交与日常体验保持更舒适的尺度。"
      >
        <div className="nio-editorial-grid nio-editorial-grid-cao-eco">
          <ProjectImage
            alt="蔚来漕河泾办公空间生态会议室效果图"
            caption="ECOLOGICAL OFFICE"
            className="nio-img-main"
            src={`${imageBase}/ecological-01.webp`}
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间茶水休息区效果图"
            caption="LOUNGE"
            className="nio-img-left"
            src={`${imageBase}/ecological-02.webp`}
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间自然采光休息区效果图"
            className="nio-img-right"
            src={`${imageBase}/ecological-03.webp`}
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="03 / BUILT REALITY"
        title="从概念，到真实空间。"
        caption="现场照片独立呈现，回应设计语言从效果图到建成空间的落地。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-cao-built">
          <ProjectImage
            alt="蔚来漕河泾办公空间建成会议空间"
            caption="BUILT VIEW"
            className="nio-img-main"
            src={`${imageBase}/built-01.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间建成蓝色会议室"
            caption="MEETING SPACE"
            className="nio-img-left"
            src={`${imageBase}/built-02.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间建成玻璃会议室与走廊"
            className="nio-img-wide"
            src={`${imageBase}/built-05.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来漕河泾办公空间建成开放办公与会议室"
            caption="WORKPLACE"
            className="nio-img-small"
            src={`${imageBase}/built-07.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <NextProject
        href="/projects/songqin-office"
        titleZh="颂琴办公室"
        titleEn="SONGQIN OFFICE"
      />
    </>
  );
}
