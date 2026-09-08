import {
  NextProject,
  ProjectHero,
  ProjectImage,
  ProjectMeta,
  ProjectSection,
  ProjectStatement,
} from './project-detail';

const imageBase = '/images/projects/nio-house';

export function NioHouseProject() {
  return (
    <>
      <ProjectHero
        eyebrow="01 / PROJECT"
        title="NIO HOUSE"
        subtitle="蔚来中心"
        description="突破单一零售边界，重塑品牌精神场域。"
        image={`${imageBase}/zhongshan-interior.webp`}
        imageAlt="蔚来中山 NIO House 室内接待空间"
      />

      <ProjectMeta
        items={[
          { label: 'TYPE', value: '品牌体验 / 商业零售' },
          { label: 'SERIES', value: 'NIO House' },
          { label: 'LOCATION', value: '福州 / 长春 / 中山' },
          {
            label: 'ROLE',
            value: '空间设计 / 方案深化',
          },
        ]}
      />

      <ProjectStatement
        kicker="BRAND EXPERIENCE"
        title="在冷峻科技与温润人居之间寻找设计平衡。"
        body="NIO House 以品牌精神场域为核心，统筹生活方式模块，在零售、体验与社区之间建立清晰而温润的空间关系。"
      />

      <ProjectSection
        eyebrow="FUZHOU NIO HOUSE"
        title="榕树下"
        caption="用极简线条的完整演绎，在空间内再现百年城市记忆中榕树下的聚集社交属性。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-fuzhou">
          <ProjectImage
            alt="蔚来福州 NIO House 汽车展厅主空间"
            caption="FUZHOU / NIO HOUSE"
            className="nio-img-main"
            src={`${imageBase}/fuzhou-showroom.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来福州 NIO House 外立面与门头"
            caption="FACADE"
            className="nio-img-right"
            src={`${imageBase}/fuzhou-facade.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来福州 NIO House 休息区"
            className="nio-img-pair-a"
            src={`${imageBase}/fuzhou-lounge.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来福州 NIO House 内部空间"
            className="nio-img-pair-b"
            src={`${imageBase}/fuzhou-interior.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="CHANGCHUN NIO HOUSE"
        title="方圆之间"
        caption="以物为实，空间为虚，方圆之间，漫步蔚来。"
      >
        <div className="nio-editorial-grid nio-editorial-grid-changchun">
          <ProjectImage
            alt="蔚来长春 NIO House 开放汽车展示空间"
            caption="CHANGCHUN / RETAIL SPACE"
            className="nio-img-main"
            src={`${imageBase}/changchun-showroom.webp`}
          />
          <ProjectImage
            alt="蔚来长春 NIO House 蓝绿色儿童与社交空间"
            caption="COMMUNITY SPACE"
            className="nio-img-offset"
            src={`${imageBase}/changchun-community.webp`}
          />
          <ProjectImage
            alt="蔚来长春 NIO House 玻璃与圆柱休闲空间"
            className="nio-img-wide"
            src={`${imageBase}/changchun-glass-lounge.webp`}
          />
          <ProjectImage
            alt="蔚来长春 NIO House 木色生活方式区域"
            className="nio-img-small"
            src={`${imageBase}/changchun-lifestyle.webp`}
          />
        </div>
      </ProjectSection>

      <ProjectSection
        eyebrow="ZHONGSHAN NIO HOUSE"
        title="先驱之维"
        caption="先驱之维，启明蔚来。"
        tone="dark"
      >
        <div className="nio-editorial-grid nio-editorial-grid-zhongshan">
          <ProjectImage
            alt="蔚来中山 NIO House 门头"
            caption="ZHONGSHAN / NIO HOUSE"
            className="nio-img-facade"
            src={`${imageBase}/zhongshan-facade.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来中山 NIO House 汽车展示大厅"
            caption="RETAIL SPACE"
            className="nio-img-main"
            src={`${imageBase}/zhongshan-showroom.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来中山 NIO House Lifestyle Lounge"
            className="nio-img-lounge"
            src={`${imageBase}/zhongshan-lounge.webp`}
            tone="dark"
          />
          <ProjectImage
            alt="蔚来中山 NIO House 儿童空间"
            className="nio-img-kids"
            src={`${imageBase}/zhongshan-kids.webp`}
            tone="dark"
          />
        </div>
      </ProjectSection>

      <NextProject
        href="/projects/nio-nsc"
        titleZh="蔚来 NSC"
        titleEn="NIO NSC"
      />
    </>
  );
}
