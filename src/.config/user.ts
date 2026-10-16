import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'בית מדרש החיד״א',
    subtitle: 'Bet Midrash HaChidah',
    author: 'Bet Midrash HaChidah',
    description:
      'A growing Moroccan Sephardic community in North Hollywood, California, dedicated to Torah, tefillah, and community.',
    website: 'https://betmidrash.markket.place/',
    pageSize: 5,
    socialLinks: [
      {
        name: 'rss',
        href: '/atom.xml',
      },
    ],
    navLinks: [
      {
        name: 'Home',
        href: '/',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    footer: [
      '© %year <a href="%website">%author</a>',
      'A Sephardic community in North Hollywood, California',
      'Published with <a target="_blank" rel="noopener noreferrer" href="https://astro.build/">Astro</a>',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'he-US',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {},
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
