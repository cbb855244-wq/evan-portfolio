'use client';

import { useEffect, useState } from 'react';

type PortfolioIntroOverlayProps = {
  active: boolean;
};

const INTRO_REVEAL_MS = 2450;
const INTRO_END_MS = 3300;
const REDUCED_MOTION_END_MS = 420;

const introImages = [
  {
    src: '/images/portfolio/home-nio-house.jpg',
    alt: '',
  },
  {
    src: '/images/portfolio/home-nio-caohejing.jpg',
    alt: '',
  },
];

export function PortfolioIntroOverlay({ active }: PortfolioIntroOverlayProps) {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const endDelay = prefersReducedMotion
      ? REDUCED_MOTION_END_MS
      : INTRO_END_MS;
    const revealDelay = prefersReducedMotion ? 0 : INTRO_REVEAL_MS;
    const timers: number[] = [];
    let frame = 0;
    let finished = false;
    let mounted = true;

    setVisible(true);
    root.classList.add('portfolio-intro-lock', 'portfolio-intro-active');
    root.classList.remove('portfolio-intro-home-reveal');

    const finishIntro = () => {
      if (!mounted || finished) {
        return;
      }

      finished = true;
      root.classList.remove(
        'portfolio-intro-lock',
        'portfolio-intro-active',
        'portfolio-intro-home-reveal',
      );
      setVisible(false);
    };

    timers.push(
      window.setTimeout(() => {
        root.classList.add('portfolio-intro-home-reveal');
      }, revealDelay),
    );

    timers.push(window.setTimeout(finishIntro, endDelay));

    const startedAt = window.performance.now();
    const watchEnd = (now: number) => {
      if (now - startedAt >= endDelay) {
        finishIntro();
        return;
      }

      frame = window.requestAnimationFrame(watchEnd);
    };

    frame = window.requestAnimationFrame(watchEnd);

    return () => {
      mounted = false;
      timers.forEach((timer) => window.clearTimeout(timer));
      window.cancelAnimationFrame(frame);
      root.classList.remove(
        'portfolio-intro-lock',
        'portfolio-intro-active',
        'portfolio-intro-home-reveal',
      );
    };
  }, [active]);

  if (!visible) {
    return null;
  }

  return (
    <div className="portfolio-intro-overlay" aria-hidden="true">
      <div className="portfolio-intro-brand">
        <span>EVAN CHENG</span>
        <span>成斌 / 空间设计师</span>
      </div>
      <div className="portfolio-intro-window">
        {introImages.map((image, index) => (
          <img
            alt={image.alt}
            className={`portfolio-intro-image portfolio-intro-image-${index + 1}`}
            decoding="async"
            key={image.src}
            src={image.src}
          />
        ))}
      </div>
    </div>
  );
}
