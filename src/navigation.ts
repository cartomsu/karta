import { getPermalink } from './utils/permalinks'

const aboutLinks = [
  {
    text: 'История',
    href: getPermalink('/history'),
  },
  {
    text: 'Структура',
    href: getPermalink('/structure'),
  },
  {
    text: 'Руководство',
    href: getPermalink('/management'),
  },
  {
    text: 'Сотрудники',
    href: getPermalink('/people'),
  },
  {
    text: 'С нами работали',
    href: getPermalink('/retired'),
  },
]

const educationLinks = [
  {
    text: 'Учебный план',
    href: getPermalink('/curriculum'),
  },
  {
    text: 'Курсы',
    href: getPermalink('/courses'),
  },
  {
    text: 'Практики',
    href: getPermalink('/practice'),
  },
  {
    text: 'Просвещение',
    href: getPermalink('/philanthropy'),
  },
  {
    text: 'Учебники и пособия',
    href: getPermalink('/books'),
  },
]

const scienceLinks = [
  {
    text: 'Публикации',
    href: getPermalink('/papers'),
  },
  {
    text: 'Конференции',
    href: getPermalink('/conferences'),
  },
  {
    text: 'Анализ публикаций',
    href: getPermalink('/publications'),
  },
]

export const headerData = {
  links: [
    {
      text: 'О кафедре',
      links: aboutLinks,
    },
    {
      text: 'Образование',
      links: educationLinks,
    },
    {
      text: 'Наука',
      links: scienceLinks,
    },
    {
      text: 'Новости',
      href: getPermalink('/news'),
    },
    {
      text: 'Контакты',
      href: getPermalink('/contact'),
    },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
}

export const footerData = {
  links: [
    {
      title: 'О кафедре',
      links: aboutLinks,
    },
    {
      title: 'Образование',
      links: educationLinks,
    },
    {
      title: 'Наука',
      links: scienceLinks,
    },
    {
      title: 'Университет',
      links: [
        { text: 'Географический факультет', href: 'https://www.geogr.msu.ru/' },
        { text: 'МГУ имени М. В. Ломоносова', href: 'https://www.msu.ru/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Новости', href: getPermalink('/news') },
    { text: 'Контакты', href: getPermalink('/contact') },
  ],
  socialLinks: [
    { ariaLabel: 'Telegram', icon: 'tabler:brand-telegram', href: 'https://t.me/cartomsu' },
    {
      ariaLabel: 'YouTube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCKRzV5MyOoQNG9rbLdSdgrA',
    },
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/cartomsu',
    },
  ],
  footNote: `© ${new Date().getFullYear()} Кафедра картографии и геоинформатики`,
}
