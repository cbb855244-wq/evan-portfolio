'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';

const parallaxEase = [0.16, 1, 0.3, 1] as const;

export function PortfolioParallaxHero({
  playEntrance,
}: {
  playEntrance: boolean;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0vh', '0vh'] : ['0vh', '-10vh'],
  );
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [1.04, 1.09],
  );
  const mainImageY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0vh', '0vh'] : ['4vh', '-24vh'],
  );
  const mainImageScale = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? [1, 1] : [0.96, 1.04],
  );
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    reducedMotion ? ['0vh', '0vh'] : ['0vh', '-34vh'],
  );
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.84, 1],
    [1, 1, 0.2],
  );
  const mainImageOpacity = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [1, 0.92, 0],
  );
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.62, 1],
    [1, 0.85, 0],
  );

  return (
    <section className="v2-parallax-hero" ref={heroRef}>
      <div className="v2-parallax-sticky">
        <motion.div
          aria-hidden="true"
          className="v2-parallax-layer v2-parallax-layer-back"
          style={{
            opacity: backgroundOpacity,
            scale: backgroundScale,
            y: backgroundY,
          }}
        >
          <img src="/images/portfolio/home-nio-caohejing.jpg" alt="" />
        </motion.div>

        <motion.div
          aria-hidden="true"
          className="v2-parallax-main-image"
          style={{
            opacity: mainImageOpacity,
            scale: mainImageScale,
            y: mainImageY,
          }}
        >
          <img src="/images/projects/nio-caohejing/technology-02.webp" alt="" />
        </motion.div>

        <motion.div
          className="v2-parallax-content"
          style={{ opacity: textOpacity, y: textY }}
        >
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="v2-parallax-kicker"
            initial={playEntrance ? { opacity: 0, y: 12 } : false}
            transition={{ delay: 0.35, duration: 0.65, ease: parallaxEase }}
          >
            <p>成斌 / 空间设计师</p>
            <p>SPATIAL DESIGNER</p>
          </motion.div>
          <div className="v2-parallax-title-mask">
            <motion.h1
              animate={{ letterSpacing: '0.02em' }}
              initial={playEntrance ? { letterSpacing: '0.16em' } : false}
              transition={{ duration: 1.05, ease: parallaxEase }}
            >
              EVAN CHENG
            </motion.h1>
          </div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="v2-parallax-bottom"
            initial={playEntrance ? { opacity: 0, y: 14 } : false}
            transition={{ delay: 0.65, duration: 0.68, ease: parallaxEase }}
          >
            <p>
              SPATIAL DESIGNER
            </p>
            <a href="#work">
              SCROLL TO PROJECTS
              <span>向下探索项目</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
