import { FacebookSvg } from 'svgIcons/FacebookSvg';
import { InstagramSvg } from 'svgIcons/InstagramSvg';
import { TelegramSvg } from 'svgIcons/TelegramSvg';
import { TiktokSvg } from 'svgIcons/TiktokSvg';
import { TwitterSvg } from 'svgIcons/TwitterSvg';
import { VkSvg } from 'svgIcons/VkSvg';
import { YoutubeSvg } from 'svgIcons/YoutubeSvg';

export type cardsType = {
  pathImg: string;
  fullImg: boolean;
  data: string;
  tag: string;
  title: string;
  article: string;
};

export const headerTitles = {
  header: {
    title: ' Юрий Поклад: «Динамо» как бы начинает работать заново',
    tag: '#болельщикам',
    pathImg: './header_bg.png',
    article: '',
  },
  middle: {
    title: ' Юрий Поклад: «Динамо» как бы начинает работать заново',
    tag: '#Экстрим',
    pathImg: './middle_bg.png',
    article: '',
  },
  footer: {
    title: 'Экстрим',
    tag: '',
    pathImg: './footer_bg.png',
    article: 'Интервью с Юрием Покладом.Полный список всех медалей Беларуси на Европейских играх.',
  },
};

export const upPages = [
  { name: 'Review' },
  { name: 'Экстрим' },
  { name: 'Легенды' },
  { name: 'зож и туризм' },
  { name: 'Позірк' },
  { name: 'Треш' },
];

export const contactsSubtitle = [{ name: 'Соцсети' }, { name: 'Подписка' }];

export const lowPages = [
  { name: 'Футбол' },
  { name: 'Хоккей' },
  { name: 'Биатлон' },
  { name: 'Теннис' },
  { name: 'Гандбол' },
  { name: 'Баскетбол ' },
  { name: 'Бокс' },
  { name: 'Легкая атлетика' },
  { name: 'Другое' },
];

export const cards: cardsType[] = [
  {
    pathImg: './post_1.png',
    fullImg: false,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
    article:
      'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
  },
  {
    pathImg: './post_2.png',
    fullImg: false,
    data: '09.07.19',
    tag: '#любительский_спорт',
    title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
    article:
      'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
  },
  {
    pathImg: './post_1.png',
    fullImg: true,
    data: '09.07.19',
    tag: '#Профессиональный_спорт',
    title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
    article:
      'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
  },
  {
    pathImg: './post_2.png',
    fullImg: false,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
    article:
      'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
  },
];
export const cardsSlice2 = [
  {
    pathImg: './post_1.png',
    fullImg: true,
    data: '09.07.19',
    tag: '#Профессиональный_спорт',
    title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
    article:
      'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
  },
  {
    pathImg: './post_2.png',
    fullImg: false,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Японцы лидируют в медальном зачете летней универсиады, белорусы – 25-е. Почему так?',
    article:
      'И если для «горняков», которые неделей ранее разгромно уступили в Турине тамошним «быкам» 0:5, визит «Торино» в Солигорск — формальность, то от «жёлто-синих»...',
  },
];
export const avatars = [
  {
    pathImg: '/avatar_1.png',
    name: 'Алексей Михайличенко',
    occupation: 'Главный тренер ф.к. Динамо',
    conversation: 'Сергей Корниленко станет играющим тренером «Крыльев советов»',
  },
  {
    pathImg: './avatar_2.png',
    name: 'Алексей Михайличенко',
    occupation: 'Главный тренер ф.к. Динамо',
    conversation: '«Динамо» как бы начинает работать заново',
  },
  {
    pathImg: './avatar_3.png',
    name: 'Алексей Михайличенко',
    occupation: 'Главный тренер ф.к. Динамо',
    conversation: 'Сергей Корниленко станет играющим тренером «Крыльев советов»',
  },
  {
    pathImg: './avatar_1.png',
    name: 'Алексей Михайличенко',
    occupation: 'Главный тренер ф.к. Динамо',
    conversation: '«Динамо» как бы начинает работать заново',
  },
];

export const socialNetworks = [
  { svgElem: VkSvg },
  { svgElem: FacebookSvg },
  { svgElem: InstagramSvg },
  { svgElem: YoutubeSvg },
  { svgElem: TelegramSvg },
  { svgElem: TiktokSvg },
  { svgElem: TwitterSvg },
];
