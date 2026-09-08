import { FadeIn } from './fade-in';

export function HeroSection() {
  return (
    <section className="hero-shell">
      <FadeIn className="hero-copy">
        <p className="eyebrow">SPATIAL DESIGNER</p>
        <h1>空间设计师</h1>
        <p className="hero-statement">
          关注空间、品牌与人的关系，
          <br />
          通过材质、光影与空间秩序，
          <br />
          将品牌语言转化为真实的空间体验。
        </p>
        <p className="hero-fields">
          商业零售 · 办公空间 · 品牌体验
          <br />
          <span>Retail / Workplace / Brand Experience</span>
        </p>
      </FadeIn>

      <FadeIn className="hero-image-wrap" delay={0.1}>
        <img
          src="/images/projects/nio-house-cover.svg"
          alt="蔚来中心项目视觉"
          className="hero-image"
        />
      </FadeIn>

      <div className="hero-foot">
        <p>
          上海，中国
          <span>SHANGHAI, CHINA</span>
        </p>
        <a href="#projects">
          向下探索 ↓
          <span>SCROLL TO EXPLORE</span>
        </a>
      </div>
    </section>
  );
}
