import {
  NextProject,
  ProjectHero,
  ProjectImage,
  ProjectMeta,
  ProjectSection,
  ProjectStatement,
} from './project-detail';

const imageBase = '/images/projects/songqin-office';

export function SongqinOfficeProject() {
  return (
    <>
      <ProjectHero
        eyebrow="04 / PROJECT"
        title="SONGQIN OFFICE"
        subtitle="颂琴办公室"
        description="在文化记忆与当代办公之间，寻找新的空间表达。"
        image={`${imageBase}/hero-02.webp`}
        imageAlt="颂琴办公室前台与文化展示空间"
        imageCaption="SONGQIN OFFICE / ZHUHAI"
      />

      <ProjectMeta
        items={[
          { label: 'PROJECT', value: '颂琴办公室装修项目' },
          { label: 'TYPE', value: '精品办公 / Workplace' },
          { label: 'LOCATION', value: '珠海 / Zhuhai' },
          { label: 'AREA', value: '1250 m²' },
          { label: 'STATUS', value: '在建' },
          { label: 'YEAR', value: '2025' },
          { label: 'PROJECT TIME', value: '2025 / 03' },
          { label: 'ROLE', value: '方案设计 / 效果图制作 / 空间规划 / 细节推敲' },
        ]}
      />

      <ProjectStatement
        kicker="01 / CONCEPT"
        title="文化记忆，进入当代办公的日常秩序。"
        body="项目以中葡文化元素与龍環葡韻意象为线索，将色彩、图案与材质转译进办公、会议、休息与接待场景。"
      />

      <ProjectSection
        eyebrow="02 / CULTURAL TRANSLATION"
        title="文化转译"
        caption="中葡文化元素与空间图案共同构成具有记忆点的办公入口。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-songqin-cultural">
          <ProjectImage
            alt="颂琴办公室文化展示与接待空间"
            caption="CULTURAL TRANSLATION"
            className="nio-img-main"
            src={`${imageBase}/cultural-01.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="颂琴办公室休息区与文化图案墙"
            caption="LOUNGE"
            className="nio-img-offset"
            src={`${imageBase}/cultural-02.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="03 / WORKPLACE CHARACTER"
        title="办公气质"
        caption="开放办公、会议空间与休息区在同一套色彩和材质语言中展开。"
      >
        <div className="nio-editorial-grid nio-editorial-grid-songqin-workplace">
          <ProjectImage
            alt="颂琴办公室休息与协作空间"
            caption="WORKPLACE"
            className="nio-img-main"
            src={`${imageBase}/workplace-01.webp`}
          />
          <ProjectImage
            alt="颂琴办公室会议空间"
            caption="MEETING SPACE"
            className="nio-img-left"
            src={`${imageBase}/workplace-02.webp`}
          />
          <ProjectImage
            alt="颂琴办公室开放办公区"
            className="nio-img-right"
            src={`${imageBase}/material-01.webp`}
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="04 / MATERIAL & DETAIL"
        title="材质与细节"
        caption="色彩、纹样与会议空间细节，让文化线索进入具体的办公场景。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-songqin-material">
          <ProjectImage
            alt="颂琴办公室会议室材质与色彩细节"
            caption="MATERIAL & DETAIL"
            className="nio-img-main"
            src={`${imageBase}/material-02.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="颂琴办公室平面功能布局"
            caption="PLAN"
            className="nio-img-left"
            src={`${imageBase}/hero-01.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <NextProject href="/" titleZh="返回首页" titleEn="BACK TO INDEX" />
    </>
  );
}
