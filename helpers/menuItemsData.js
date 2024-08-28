export const menuItemsData = [
  {
    title: 'Главная',
    url: '/',
  },
  {
    title: 'О себе',
    // url: '/osebe',
    submenu: [
      {
        title: 'Образование',
        url: '/osebe/education',
      },
      {
        title: 'Сертификаты',
        url: '/osebe/certificates',
      },
      {
        title: 'Фото',
        url: '/osebe/myphoto',
      },
      {
        title: 'Контакты',
        url: '/osebe/contacts',
      },
    ],
  },
  {
    title: 'Йога',
    // url: '',
    submenu: [
      {
        title: 'Расписание',
        url: '/yoga/schedule',
      },
      {
        title: 'Отзывы',
        url: '/yoga/feedbacks',
      },
      {
        title: 'Положения хатха йоги',
        url: '/yoga/basicrules',
      },
      {
        title: 'Наули крийя',
        url: '/yoga/nauli',
      },
    ],
  },
  {
    title: 'Традиция',
    // url: '',
    submenu: [
      {
        title: 'Мастер',
        url: '/tradition/master',
      },
      {
        title: 'Древо Прибежища',
        url: '/tradition/pribezhishche',
      },
      {
        title: 'Методы Учения',
        url: '/tradition/metody',
      },
      {
        title: 'Полезные ссылки',
        url: '/tradition/links',
      },
    ],
  },
  {
    title: 'Видео',
    // url: '',
    submenu: [
      {
        title: 'Кундалини и пранаяма',
        url: '/video/kundalini',
      },
      {
        title: 'Хатха йога',
        url: '/video/hatha',
      },
      {
        title: 'Нидра йога',
        url: '/video/nidra',
      },
      {
        title: 'Видео с Гуру',
        url: '/video/videosguru',
      },
      {
        title: 'Видео с монахами',
        url: '/video/videosmonahami',
      },

    ],
  },
];