import {
  NextProject,
  ProjectHero,
  ProjectImage,
  ProjectMeta,
  ProjectSection,
  ProjectStatement,
} from './project-detail';

const imageBase = '/images/projects/nio-nsc';

export function NioNscProject() {
  return (
    <>
      <ProjectHero
        eyebrow="02 / PROJECT"
        title="NIO NSC"
        subtitle="蔚来 NSC"
        description="以空间语言，构建敏捷商业触点。"
        image={`${imageBase}/cover.webp`}
        imageAlt="蔚来贵阳 NSC 汽车展示空间"
        imageCaption="GUIYANG / NIO NSC"
      />

      <ProjectMeta
        items={[
          { label: 'TYPE', value: '汽车零售空间 / Automotive Retail' },
          { label: 'SERIES', value: 'NIO NSC' },
          {
            label: 'LOCATION',
            value: '贵阳 / 金华 / 昆明 / 义乌 / 苏州吴中 / 广州 / 合肥',
          },
          {
            label: 'ROLE',
            value: '全案设计主导 / 空间逻辑梳理 / 功能动线规划 / 施工图配合',
          },
        ]}
      />

      <ProjectStatement
        kicker="01 / SYSTEM"
        title="在统一的品牌语言中，回应不同城市与场地条件。"
        body="NSC 门店系列以新零售 SI 体系为基础，通过模块化空间语言与快速迭代，在不同城市和场地条件中保持品牌识别，同时优化动线、光影与商业效率。"
      />

      <ProjectSection
        eyebrow="01 / SYSTEM"
        title="一致的品牌语言，不同的空间回应。"
        caption="以入口、标识、展车界面与材质秩序构成可复制的零售系统。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-nsc-system">
          <ProjectImage
            alt="蔚来昆明 NSC 独立门店外立面"
            caption="KUNMING / NIO NSC"
            className="nio-img-main"
            src={`${imageBase}/kunming-facade.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来贵阳 NSC 玻璃门店外立面"
            caption="FACADE"
            className="nio-img-left"
            src={`${imageBase}/guiyang-facade.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来金华 NSC 汽车展示空间"
            className="nio-img-right"
            src={`${imageBase}/jinhua-showroom.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来合肥包河 NSC 汽车展示空间"
            caption="SHOWROOM"
            className="nio-img-wide"
            src={`${imageBase}/hefei-showroom.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="02 / URBAN ADAPTATION"
        title="城市适配"
        caption="不同入口关系、建筑尺度与采光条件，在同一套品牌秩序中被重新组织。"
      >
        <div className="nio-editorial-grid nio-editorial-grid-nsc-urban">
          <ProjectImage
            alt="蔚来合肥包河 NSC 建筑外立面"
            caption="HEFEI / URBAN ADAPTATION"
            className="nio-img-main"
            src={`${imageBase}/hefei-facade.webp`}
          />
          <ProjectImage
            alt="蔚来昆明 NSC 展厅空间"
            caption="RETAIL SPACE"
            className="nio-img-offset"
            src={`${imageBase}/kunming-showroom.webp`}
          />
          <ProjectImage
            alt="蔚来广州万博南村 NSC 接待空间"
            className="nio-img-wide"
            src={`${imageBase}/guangzhou-interior.webp`}
          />
          <ProjectImage
            alt="蔚来广州万博南村 NSC 休息区"
            caption="CUSTOMER AREA"
            className="nio-img-small"
            src={`${imageBase}/guangzhou-lounge.webp`}
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="03 / RETAIL TOUCHPOINTS"
        title="商业触点"
        caption="在较小商业尺度中整合接待、洽谈、休息与用户服务，形成完整体验链路。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-nsc-touchpoints">
          <ProjectImage
            alt="蔚来金华 NSC 用户接待与洽谈空间"
            caption="JINHUA / CUSTOMER AREA"
            className="nio-img-main"
            src={`${imageBase}/jinhua-customer.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来义乌 NSC 接待空间"
            caption="RETAIL TOUCHPOINT"
            className="nio-img-left"
            src={`${imageBase}/yiwu-interior.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来苏州吴中 NSC 客户洽谈区"
            className="nio-img-right"
            src={`${imageBase}/wuzhong-customer.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来苏州吴中 NSC 休息区"
            caption="LOUNGE"
            className="nio-img-small"
            src={`${imageBase}/wuzhong-lounge.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <NextProject
        href="/projects/nio-caohejing"
        titleZh="蔚来漕河泾办公空间"
        titleEn="NIO CAOHEJING OFFICE"
      />

      <a className="nio-back-link" href="/#projects">
        ← 返回项目
      </a>
    </>
  );
}
