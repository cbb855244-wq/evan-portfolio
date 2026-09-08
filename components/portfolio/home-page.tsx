'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { projects } from '@/src/data/projects';
import { ContactInfo } from './contact-info';

const practiceItems = [
  {
    titleEn: 'RETAIL',
    titleZh: '商业零售',
    note: '品牌体验、销售逻辑、用户路径与空间识别。',
  },
  {
    titleEn: 'WORKPLACE',
    titleZh: '办公空间',
    note: '功能逻辑、团队关系、材质与空间体验。',
  },
  {
    titleEn: 'BRAND EXPERIENCE',
    titleZh: '品牌体验',
    note: '将品牌语言转化为真实的空间体验。',
  },
];

const focusItems = ['商业零售', '办公空间', '品牌体验'];
const tools = ['CAD', 'SketchUp', 'Photoshop', 'Revit', 'AIGC'];
const approachItems = ['Concept', 'Planning', 'Material', 'Development', 'Delivery'];
const homeImagesBySlug: Record<string, string> = {
  'nio-house': '/images/portfolio/home-nio-house.jpg',
  'nio-nsc': '/images/portfolio/home-nio-nsc.jpg',
  'nio-caohejing': '/images/portfolio/home-nio-caohejing.jpg',
  'songqin-office': '/images/portfolio/home-songqin-office.jpg',
};

const moreWorkItems = [
  {
    titleZh: '顺丰智慧科技生态总部基地',
    titleEn: 'SF SMART TECHNOLOGY HQ',
    type: '总部办公 / Workplace',
    meta: '深圳 · 2025',
    image: '/images/more-work/sf-headquarters.webp',
    alt: '顺丰智慧科技生态总部基地白色大厅与曲面空间',
    size: 'wide',
  },
  {
    titleZh: '蔚来 F2 员工中心',
    titleEn: 'NIO F2 EMPLOYEE CENTER',
    type: '办公 / Employee Center',
    meta: '合肥 · 2022',
    image: '/images/more-work/nio-f2.webp',
    alt: '蔚来 F2 员工中心明亮开放办公与绿植空间',
    size: 'narrow',
  },
  {
    titleZh: '珠海将军山体育公园',
    titleEn: 'JIANGJUNSHAN SPORTS PARK',
    type: '公共 / 体育空间',
    meta: '珠海 · 2023',
    image: '/images/more-work/jiangjunshan-sports.webp',
    alt: '珠海将军山体育公园蓝色运动场地',
    size: 'narrow',
  },
  {
    titleZh: '厦门瑞吉业主套房',
    titleEn: 'ST. REGIS XIAMEN',
    type: '酒店 / 高端居住',
    meta: '厦门 · 2025',
    image: '/images/more-work/st-regis-xiamen.webp',
    alt: '厦门瑞吉业主套房高挑空暖色居住空间',
    size: 'wide',
  },
];

const entranceEase = [0.16, 1, 0.3, 1] as const;
const introKey = 'portfolio-intro-played';

function SectionKicker({
  number,
  title,
  label,
}: {
  number: string;
  title: string;
  label: string;
}) {
  return (
    <div className="section-kicker">
      <span>{number}/</span>
      <div>
        <p>{title}</p>
        <p>{label}</p>
      </div>
    </div>
  );
}

function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HomePage() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const reducedMotion = useReducedMotion();
  const [playEntrance] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const navigation = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigation?.type === 'reload';

    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      (isReload || sessionStorage.getItem(introKey) !== 'true');
  });
  const activeProjectImage =
    homeImagesBySlug[activeProject.slug] ?? activeProject.coverImage;

  useEffect(() => {
    if (!playEntrance || reducedMotion) {
      return;
    }

    sessionStorage.setItem(introKey, 'true');
  }, [playEntrance, reducedMotion]);

  return (
    <main className="brutalist-home v2-home">
      <header className="brutalist-nav v2-nav">
        <motion.a
          animate={{ opacity: 1, y: 0 }}
          className="brutalist-brand"
          href="/"
          initial={playEntrance ? { opacity: 0, y: -10 } : false}
          transition={{ delay: 0.35, duration: 0.5, ease: entranceEase }}
        >
          <span>EVAN CHENG</span>
          <span>成斌 / 空间设计师</span>
        </motion.a>
        <motion.nav
          animate={{ opacity: 1, y: 0 }}
          aria-label="主导航"
          initial={playEntrance ? { opacity: 0, y: -10 } : false}
          transition={{ delay: 0.45, duration: 0.52, ease: entranceEase }}
        >
          <a href="#work">
            PROJECTS
            <span>项目</span>
          </a>
          <a href="#about">
            ABOUT
            <span>关于</span>
          </a>
          <a href="#contact">
            CONTACT
            <span>联系</span>
          </a>
          <span>
            SHANGHAI
            <small>CN</small>
          </span>
        </motion.nav>
      </header>

      <section className="v2-hero">
        <div className="v2-hero-inner">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="v2-identity"
            initial={playEntrance ? { opacity: 0, y: 12 } : false}
            transition={{ delay: 0.45, duration: 0.6, ease: entranceEase }}
          >
            <p>成斌 / 空间设计师</p>
            <p>SPATIAL DESIGNER</p>
          </motion.div>
          <div className="v2-hero-title-mask">
            <motion.h1
              animate={{ letterSpacing: '-0.058em' }}
              initial={
                playEntrance
                  ? {
                      letterSpacing: '-0.12em',
                    }
                  : false
              }
              transition={{ duration: 1.05, ease: entranceEase }}
            >
              <motion.span
                animate={{ y: 0 }}
                className="v2-hero-word"
                initial={playEntrance ? { y: 120 } : false}
                transition={{ duration: 1.02, ease: entranceEase }}
              >
                EVAN
              </motion.span>
              <span className="v2-hero-space"> </span>
              <motion.span
                animate={{ y: 0 }}
                className="v2-hero-word"
                initial={playEntrance ? { y: 140 } : false}
                transition={{ delay: 0.08, duration: 1.02, ease: entranceEase }}
              >
                CHENG
              </motion.span>
            </motion.h1>
          </div>
          <div className="v2-hero-bottom">
            <motion.span
              aria-hidden="true"
              className="v2-hero-rule"
              initial={playEntrance ? { scaleX: 0 } : false}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.9, ease: entranceEase }}
            />
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={playEntrance ? { opacity: 0, y: 12 } : false}
              transition={{ delay: 0.65, duration: 0.6, ease: entranceEase }}
            >
              关注空间、品牌与人的关系，以材质、光影与空间秩序，
              <br />
              将品牌语言转化为真实可感知的空间体验。
            </motion.p>
            <motion.p
              animate={{ opacity: 1, y: 0 }}
              initial={playEntrance ? { opacity: 0, y: 12 } : false}
              transition={{ delay: 0.75, duration: 0.58, ease: entranceEase }}
            >
              SPACE / BRAND / EXPERIENCE
            </motion.p>
            <motion.a
              animate={{ opacity: 1, y: 0 }}
              href="#intro"
              initial={playEntrance ? { opacity: 0, y: 12 } : false}
              transition={{ delay: 0.85, duration: 0.58, ease: entranceEase }}
            >
              SCROLL TO EXPLORE ↓
              <span>向下探索</span>
            </motion.a>
          </div>
        </div>
      </section>

      <section className="v2-intro" id="intro">
        <Reveal className="v2-intro-grid">
          <SectionKicker number="01" title="INTRO" label="设计观点" />
          <h2>
            <span>空间</span>
            <small>
              不是形式的终点，
              <br />
              而是关系发生的地方。
            </small>
          </h2>
          <div className="v2-intro-copy">
            <p>关注空间如何回应品牌、人的行为与真实使用场景。</p>
            <p>
              从概念构思、空间规划，到材质、光影与细节，让设计从抽象逻辑逐渐转化为可以进入、使用和感知的真实空间。
            </p>
          </div>
          <div className="v2-intro-strip">
            <span data-zh="商业零售">RETAIL</span>
            <span data-zh="办公空间">WORKPLACE</span>
            <span data-zh="品牌体验">BRAND ENVIRONMENT</span>
          </div>
        </Reveal>
      </section>

      <section className="v2-work" id="work">
        <Reveal className="v2-work-heading">
          <SectionKicker number="02" title="SELECTED WORK" label="精选项目" />
        </Reveal>

        <div
          className="v2-work-stage"
          onMouseLeave={() => setPreviewVisible(false)}
        >
          <div className="v2-project-index">
            {projects.map((project) => (
              <a
                href={`/projects/${project.slug}`}
                key={project.slug}
                className="v2-index-row"
                onMouseEnter={() => {
                  setActiveProject(project);
                  setPreviewVisible(true);
                }}
                onFocus={() => {
                  setActiveProject(project);
                  setPreviewVisible(true);
                }}
                onBlur={() => setPreviewVisible(false)}
              >
                <span>{project.number}</span>
                <span>
                  <strong>{project.titleZh}</strong>
                  <small>{project.titleEn}</small>
                </span>
                <span>{project.categoryZh}</span>
                {project.year ? <span>{project.year}</span> : <span />}
                <span className="v2-project-arrow">↗</span>
                <img
                  src={homeImagesBySlug[project.slug] ?? project.coverImage}
                  alt={`${project.titleZh} 封面`}
                />
              </a>
            ))}
          </div>

          <motion.div
            className="v2-hover-preview"
            key={activeProject.slug}
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={{
              opacity: previewVisible ? 1 : 0,
              y: previewVisible ? 0 : 14,
              scale: previewVisible ? 1 : 0.94,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <span />
            <img src={activeProjectImage} alt="" />
          </motion.div>
        </div>
      </section>

      <section className="v2-more-work" aria-label="More work">
        <Reveal className="v2-more-work-heading">
          <p>MORE WORK</p>
          <h2>其他项目</h2>
        </Reveal>
        <div className="v2-more-work-grid">
          {moreWorkItems.map((item) => (
            <Reveal
              className={`v2-more-work-item v2-more-work-item-${item.size}`}
              key={item.titleEn}
            >
              <div className="v2-more-work-image">
                <img src={item.image} alt={item.alt} />
              </div>
              <div className="v2-more-work-copy">
                <h3>{item.titleZh}</h3>
                <p>{item.titleEn}</p>
                <span>{item.type}</span>
                <small>{item.meta}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="v2-image-break" aria-label="Selected frame">
        <Reveal>
          <p>SELECTED FRAME / 001</p>
          <motion.img
            src="/images/portfolio/selected-frame-001.jpg"
            alt="精选空间视觉"
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </Reveal>
      </section>

      <section className="v2-practice">
        <Reveal>
          <SectionKicker number="03" title="PRACTICE" label="设计实践" />
          <div className="v2-practice-lines">
            {practiceItems.map((item, index) => (
              <div key={item.titleEn}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>
                  <span>{item.titleEn}</span>
                  <em>{item.titleZh}</em>
                </h3>
                <p>{item.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="v2-in-space">
        <Reveal>
          <SectionKicker number="04" title="IN SPACE" label="空间片段" />
          <div className="v2-space-frame">
            <motion.img
              src="/images/portfolio/in-space-001.jpg"
              alt="空间片段视觉"
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
          <div className="v2-frame-caption">
            <p>FRAME / 001</p>
            <p>SHANGHAI</p>
            <p>SPATIAL STUDY</p>
          </div>
        </Reveal>
      </section>

      <section className="v2-about" id="about">
        <Reveal className="v2-about-grid">
          <SectionKicker number="05" title="ABOUT" label="关于我" />
          <div className="v2-lime-mark">BASED IN SHANGHAI</div>
          <h2>
            从概念，
            <br />
            到真实发生的空间。
          </h2>
          <div className="v2-about-copy">
            <p>
              成斌，空间设计师，现工作于上海。设计实践主要围绕商业零售、汽车品牌空间与办公环境展开。
            </p>
            <p>
              工作覆盖概念构思、空间规划、材料研究、设计深化与现场落地。
            </p>
          </div>
        </Reveal>
        <Reveal className="v2-about-facts">
          <div>
            <p>FOCUS</p>
            {focusItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div>
            <p>TOOLS</p>
            {tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <div>
            <p>APPROACH</p>
            {approachItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div>
            <p>LOCATION</p>
            <span>Shanghai</span>
            <span>China</span>
          </div>
          <div>
            <p>AWARDS</p>
            <span>CBDA 中国建筑装饰协会金奖</span>
            <span>祝融奖</span>
          </div>
        </Reveal>
      </section>

      <section className="v2-contact" id="contact">
        <Reveal className="v2-contact-grid">
          <SectionKicker number="06" title="CONTACT" label="联系" />
          <h2>
            保<span>持</span>联系
          </h2>
          <ContactInfo
            className="v2-contact-details"
            showEmailArrow
            tone="dark"
          />
        </Reveal>
        <footer className="v2-footer">
          <p>EVAN CHENG</p>
          <p>Spatial Designer</p>
          <p>Shanghai, China</p>
          <p>© 2026</p>
          <a href="#">Back to top ↑</a>
        </footer>
      </section>
    </main>
  );
}
