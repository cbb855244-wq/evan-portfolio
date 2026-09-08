export type Project = {
  slug: string;
  number: string;
  titleZh: string;
  titleEn: string;
  categoryZh: string;
  categoryEn: string;
  year: string;
  locationZh: string;
  locationEn: string;
  coverImage: string;
  images: string[];
  descriptionZh: string;
  role: string[];
  awards?: string[];
};

export const projects: Project[] = [
  {
    slug: 'nio-house',
    number: '01',
    titleZh: '蔚来中心',
    titleEn: 'NIO HOUSE',
    categoryZh: '品牌体验 / 商业零售',
    categoryEn: 'Brand Experience / Retail',
    year: '',
    locationZh: '上海，中国',
    locationEn: 'Shanghai, China',
    coverImage: '/images/projects/nio-house-cover.svg',
    images: [
      '/images/projects/nio-house-cover.svg',
      '/images/projects/spatial-study-01.svg',
      '/images/projects/spatial-study-02.svg',
    ],
    descriptionZh:
      '围绕新能源汽车品牌的社区属性与商业动线，转译品牌基因，塑造兼具辨识度、停留感与沉浸体验的零售空间。',
    role: ['核心空间规划', '概念创意', '扩初深化', '材料与工艺把控'],
  },
  {
    slug: 'nio-nsc',
    number: '02',
    titleZh: '蔚来 NSC',
    titleEn: 'NIO NSC',
    categoryZh: '汽车零售空间',
    categoryEn: 'Automotive Retail',
    year: '',
    locationZh: '上海，中国',
    locationEn: 'Shanghai, China',
    coverImage: '/images/projects/nio-nsc-cover.svg',
    images: [
      '/images/projects/nio-nsc-cover.svg',
      '/images/projects/spatial-study-01.svg',
      '/images/projects/spatial-study-02.svg',
    ],
    descriptionZh:
      '从概念策划到全案设计，构建符合品牌定位与商业效率的空间框架，让展示、洽谈与服务体验形成清晰秩序。',
    role: ['全案设计主导', '空间逻辑梳理', '功能动线规划', '施工图配合'],
  },
  {
    slug: 'nio-caohejing',
    number: '03',
    titleZh: '蔚来漕河泾办公空间',
    titleEn: 'NIO CAOHEJING OFFICE',
    categoryZh: '总部办公',
    categoryEn: 'Workplace / Headquarters',
    year: '',
    locationZh: '上海，中国',
    locationEn: 'Shanghai, China',
    coverImage: '/images/projects/nio-caohejing-cover.svg',
    images: [
      '/images/projects/nio-caohejing-cover.svg',
      '/images/projects/spatial-study-01.svg',
      '/images/projects/spatial-study-02.svg',
    ],
    descriptionZh:
      '以流动感、科技感和办公协作为核心线索，参与总部空间概念构思，并通过材料、光影与细节推进空间落地。',
    role: ['概念贡献', '方案深化', '材料研究', '现场落地协同'],
    awards: ['CBDA 金奖', '祝融奖'],
  },
  {
    slug: 'songqin-office',
    number: '04',
    titleZh: '颂琴办公室',
    titleEn: 'SONGQIN OFFICE',
    categoryZh: '精品办公',
    categoryEn: 'Workplace',
    year: '',
    locationZh: '上海，中国',
    locationEn: 'Shanghai, China',
    coverImage: '/images/projects/songqin-office-cover.svg',
    images: [
      '/images/projects/songqin-office-cover.svg',
      '/images/projects/spatial-study-01.svg',
      '/images/projects/spatial-study-02.svg',
    ],
    descriptionZh:
      '围绕接待、开放办公、独立办公室、会议与休息场景，营造兼具商务质感与人文关怀的精品办公环境。',
    role: ['方案设计', '效果图制作', '空间规划', '细节推敲'],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
