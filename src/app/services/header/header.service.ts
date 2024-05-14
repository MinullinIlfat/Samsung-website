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

  appliances = [
    {
      title: 'Новое и интересное',
      items: [
        {name: 'Рецепты для техники Samsung'},
        {name: 'Обзор бытовой техники'},
        {name: 'Руководство по выбору бытовой техники'},
        {name: 'Стиральные машины Al Ecobubble'},
        {name: 'Новые кондиционеры WindFree'},
        {name: 'Линейка беспроводных пылесосов Jet'},
        {name: 'Дом SmartThings'},
      ],
    },
    {
      title: 'BESPOKE',
      items: [
        {name: 'Духовой шкаф BESPOKE'},
        {name: 'Многодверный холодильник BESPOKE'},
        {name: 'Пылесосы BESPOKE Jet'},
        {name: 'Пылесосы BESPOKE Jet Al с искусственным интеллектом'},
      ],
    },
    {
      title: 'Пылесосы',
      items: [
        {name: 'Всы пылесосы'},
        {name: 'Узнать больше о пылесосах'},
        {name: 'Беспроводные'},
        {name: 'Роботы'},
        {name: 'С контейнером'},
        {name: 'С мешком'},
        {name: 'Аксессуары для пылесосов'},
      ],
    },
    {
      title: 'Холодильники',
      items: [
        {name: 'Все холодильники'},
        {name: 'Узнать больше о холодильниках'},
        {name: 'Многодверные холодильники'},
        {name: 'Морозильная камера сбоку'},
        {name: 'Морозильная камера снизу'},
        {name: 'Морозильная камера сверху'},
        {name: 'Встраиваемые холодильники'},
        {name: 'Отдельностоящие холодильники'},
        {name: 'Создайте свой холодильник'},
      ],
    },
    {
      title: 'Стиральные и сушильные машины',
      items: [
        {name: 'Все стиральные и сушильные машины'},
        {name: 'Узнать больше о стиральных и сушильных машинах'},
        {name: 'Стиральные машины Al Ecobubble'},
        {name: 'Узкие стиральные машины'},
        {name: 'Полноразмерные стиральные машины'},
        {name: 'Стиральные машины с сушкой'},
        {name: 'Сушильные машины'},
        {name: 'Аксессуары для стиральных машин'},
        {name: 'Паровые шкафы AirDresser'},
      ],
    },
    {
      title: 'Техника для кухни',
      items: [
        {name: 'Вся техника для кухни'},
        {name: 'Узнать больше о технике для кухни'},
        {name: 'Микроволновые печи'},
        {name: 'Микроволновые печи BESPOKE'},
        {name: 'Духовые шкафы'},
        {name: 'Варочные панели'},
        {name: 'Кухонные вытяжки'},
        {name: 'Рецепты для техники Samsung'},
      ],
    },
    {
      title: 'Посудомоечные машины',
      items: [
        {name: 'Все посудомоечные машины'},
        {name: 'Узнать больше о посудомоечных машинах'},
        {name: 'Встроенные посудомоечные машины'},
        {name: 'Отдельностоящие посудомоечные машины'},
      ],
    },
    {
      title: 'Климатическая техника',
      items: [
        {name: 'Все кондиционеры'},
        {name: 'Узнать больше о кондиционерах'},
        {name: 'Сплит-системы WindFree'},
        {name: 'Инверторные сплит-системы'},
        {name: 'Кондиционеры on-off'},
        {name: 'Мульти-сплит-системы'},
        {name: 'Аксессуары для мульти-сплит-систем'},
        {name: 'Очиститель воздуха'},
        {name: 'Фильтр для очистителя воздуха'},
      ],
    },
  ]

  computers = [
    {
      title: 'Новое и интересное',
      items: [
        {name: 'Все для гейминга'},
        {name: 'Игровые мониторы Odyssey'},
        {name: 'Odyssey Neo G9'},
        {name: 'Odyssey OLED'},
        {name: 'ViewFinity 5K'},
        {name: 'Galaxy Book2 Pro 360'},
        {name: 'Galaxy Book2 Pro'},
      ],
    },
    {
      title: 'Ноутбуки Galaxy Book',
      items: [
        {name: 'Все Galaxy Book'},
        {name: 'Узнать больше о Galaxy Book'},
        {name: 'Galaxy Book2 Pro 360'},
        {name: 'Galaxy Book2 Pro'},
        {name: 'Windows 11'},
      ],
    },
    {
      title: 'Мониторы',
      items: [
        {name: 'Все мониторы'},
        {name: 'Узнать больше о мониторах'},
        {name: 'Игровые Odyssey'},
        {name: 'Smart дисплеи'},
        {name: '5К'},
        {name: '4К UHD'},
        {name: '2К QHD'},
        {name: 'Full HD'},
        {name: 'Изогнутые'},
        {name: 'Ульташирокие'},
        {name: 'Мониторы для работы'},
      ],
    },
    {
      title: 'Память и накопители',
      items: [
        {name: 'Вся память и накопители'},
        {name: 'Узнать больше о памяти и накопителях'},
        {name: 'Внутренние SSD'},
        {name: 'Внешние SSD'},
        {name: 'Карты памяти'},
        {name: 'Флэш-накопители USB'},
      ],
    },
  ]

  displays = [
    {
      title: 'Бизнес-дисплеи',
      items: [
        {name: 'Узнать о решениях для бизнес-дисплеев'},
        {name: 'Профессиональные дисплеи'},
        {name: 'LED экраны'},
        {name: 'Коммерческие телевизоры'},
        {name: 'Мониторы для бизнеса'},
      ],
    },
  ]

  smartThings = [
    {
      title: 'SmartThings',
      items: [
        {name: 'Включайтесь в SmartThings'},
        {name: 'Приготовление еды'},
        {name: 'Забота об одежде'},
        {name: 'Уход за питомцем'},
        {name: 'Забота о доме'},
        {name: 'Забота о детях'},
      ],
    },
    {
      title: 'Приложения и устройства',
      items: [
        {name: 'Приложение SmartThings'},
        {name: 'Устройства SmartThings'},
        {name: 'Голосовой помощник'},
      ],
    },
  ]

  support = [
    {
      title: 'Помощь по продуктам',
      items: [
        {name: 'Поддержка'},
        {name: 'Частые вопросы по технике'},
        {name: 'Помощь и советы для мобильных устройств'},
        {name: 'Новости и уведомления'},
        {name: 'Проверка IMEI Samsung Galaxy'},
        {name: 'Инструкции, драйверы, прошивки и ПО'},
      ],
    },
    {
      title: 'Информация и гарантия',
      items: [
        {name: 'Гарантия'},
        {name: 'Сервисные центры'},
        {name: 'Предварительная запись в сервисный центр'},
        {name: 'Проверить статус обращения'},
        {name: 'Мобильные сервисный центр'},
        {name: 'Фирменная выездная служба "Бренд-инженер"'},
        {name: 'Негарантийный ремонт техники'},
        {name: 'Расширенная гарантия Samsung Care+'},
      ],
    },
    {
      title: 'Связаться с нами',
      items: [
        {name: 'Контактная информация'},
        {name: 'Сервисная поддержка на жестовом языке'},
        {name: 'Чат с экспертом Samsung'},
      ],
    },
  ]
}
