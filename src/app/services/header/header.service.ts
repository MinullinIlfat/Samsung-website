import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() {
  }

  Al = [
    {name: 'Galaxy Al'},
    {name: 'BESPOKE Al'},
  ]

  smartphones = [
    {name: 'Мобильные устройства'},
    {name: 'Galaxy Al'},
    {name: 'Смартфоны'},
    {name: 'Планшеты'},
    {name: 'Ноутбуки Galaxy Book'},
    {name: 'Galaxy Watch'},
    {name: 'Galaxy Fit'},
    {name: 'Наушники Galaxy Buds'},
    {name: 'Аксессуары'},
    {name: 'One Ul'},
    {name: 'Приложения и сервисы'},
    {name: 'Аллея звезд Galaxy'},
    {name: 'Почему Galaxy'},
    {name: 'Samsung Care+'},
    {name: 'Всё для гейминга'},
    {name: 'TryGalaxy'},
  ]

  smartphonesImages = [
    {
      img: 'assets/images/smartphones/GalaxyS24Ultra.png',
      name: 'Galaxy S24 Ultra'
    },
    {
      img: 'assets/images/smartphones/GalaxyS24S24+.png',
      name: 'Galaxy S24 | S24 +'
    },
    {
      img: 'assets/images/smartphones/GalaxyZFlip5.png',
      name: 'Galaxy Z Flip5'
    },
    {
      img: 'assets/images/smartphones/GalaxyZFold5.png',
      name: 'Galaxy Z Fold5'
    },
    {
      img: 'assets/images/smartphones/GalaxyTabS9.png',
      name: 'Galaxy Tab S9'
    },
    {
      img: 'assets/images/smartphones/Galaxy_Watch_6.png',
      name: 'Galaxy Watch6'
    },
    {
      img: 'assets/images/smartphones/GalaxyA55_5G.png',
      name: 'Galaxy A55 5G'
    },
    {
      img: 'assets/images/smartphones/GalaxyBuds2Pro.png',
      name: 'Galaxy Buds2 Pro'
    },
    {
      img: 'assets/images/smartphones/All-Smartphones.png',
      name: 'Все смартфоны'
    },
  ]

  TvAndAudio = [
    {
      title: 'Новое и интересное',
      items: [
        {name: 'Поможем выбрать ТВ'},
        {name: 'Neo QLED 8K'},
        {name: 'OLED'},
        {name: 'Neo QLED'},
        {name: 'Сверхбольшие ТВ'},
        {name: 'Портативный проектор The Freestyle'},
        {name: 'The Frame'},
        {name: 'Smart TV'},
        {name: 'Саундбары'},
        {name: 'Что такое Neo QLED'},
        {name: 'Консольный гейминг'},
        {name: 'Руководство по выбору телевизора'},
      ],
    },
    {
      title: 'Дисплей Micro LED',
      items: [
        {name: 'Узнать больше о MICRO LED'},
      ],
    },
    {
      title: 'Телевизоры',
      items: [
        {name: 'Все телевизоры'},
        {name: 'Узнать больше о телевизорах'},
        {name: 'Neo QLED 8K'},
        {name: 'Neo QLED'},
        {name: 'QLED'},
        {name: 'OLED'},
        {name: 'Smart TV'},
        {name: 'Crystal UHD'},
      ],
    },
    {
      title: 'ТВ по разрешению',
      items: [
        {name: '8K ТВ'},
        {name: '4K ТВ'},
        {name: 'Full HD & HD'},
      ],
    },
    {
      title: 'Интерьерные ТВ',
      items: [
        {name: 'Все интерьерные ТВ'},
        {name: 'Узнать больше об интерьерных ТВ'},
        {name: 'Телевизор-картина The Frame'},
      ],
    },
    {
      title: 'Проекторы',
      items: [
        {name: 'Все проекторы'},
        {name: '100" портативных проекторов The Freestyle'},
        {name: '130" 4К проектор The Premiere с тройным лазером'},
        {name: '120" 4К лазерный проектор The Premiere'},
      ],
    },
    {
      title: 'ТВ по диагонали',
      items: [
        {name: 'Все телевизоры'},
        {name: '98"'},
        {name: '85"'},
        {name: '75"'},
        {name: '65"'},
        {name: '55"'},
        {name: '50"'},
        {name: '43"'},
        {name: '32"'},
        {name: 'Выберите идеальный размер ТВ'},
      ],
    },
    {
      title: 'Аудио',
      items: [
        {name: 'Все аудио'},
        {name: 'Узнать больше об аудио'},
        {name: 'Премиальные саундбары Q серии'},
        {name: 'Ультратонкие саундбары'},
        {name: 'Саундбары S серии'},
        {name: 'Классические саунбары'},
        {name: 'Аудиосистемы Sound Tower'},
      ],
    },
    {
      title: 'Аксессуары',
      items: [
        {name: 'Подберите аксессуар к вашему ТВ'},
        {name: 'Аксессуары для ТВ'},
        {name: 'Аксессуары для аудио'},
        {name: 'Аксессуары The Freestyle'},
      ],
    },
  ]
}
