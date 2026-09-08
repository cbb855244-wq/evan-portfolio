import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://evan-cheng-portfolio.openai.site'),
  title: {
    default: '成斌｜空间设计师作品集｜Evan Cheng — Spatial Designer Portfolio',
    template: '%s',
  },
  description:
    '成斌空间设计作品集，涵盖商业零售、新能源汽车品牌空间、办公空间及品牌体验设计。',
  openGraph: {
    title: '成斌｜空间设计师作品集｜Evan Cheng — Spatial Designer Portfolio',
    description:
      '成斌空间设计作品集，涵盖商业零售、新能源汽车品牌空间、办公空间及品牌体验设计。',
    images: ['/og.svg'],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evan Cheng — Spatial Designer Portfolio',
    description:
      '成斌空间设计作品集，涵盖商业零售、新能源汽车品牌空间、办公空间及品牌体验设计。',
    images: ['/og.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
