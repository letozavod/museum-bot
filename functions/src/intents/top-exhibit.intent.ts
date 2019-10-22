import { IntentInterface } from './intent.interface';
import { CardResponse } from '../responses/card.response';

const topExhibits = [
  {
    "title": "Платье",
    "description" : "Платье из крапивного полотна. Ханты. XIX век", 
    "image": "https://mvk.yanao.ru/upload/iblock/a43/Plate-iz-krapivnogo-polotna.-KHanty.-XIX-vek.jpg", 

  },
  {
    "title": "Ложка",
    "description" : "Ложка с навершием в виде головы оленя. Сакрально-производственный центр Усть-Полуй. II век до н. э – II век н. э.", 
    "image": "https://mvk.yanao.ru/upload/iblock/1ae/Lozhka-s-navershiem-v-vide-golovy-olenya.-Sakralno_proizvodstvennyy-tsentr-Ust_Poluy.-II-vek-do-n.-e-_-II-vek-n.-e..jpg", 

  },
  {
    "title": "Мумия мамонтенка Любы",
    "description" : "Мумия мамонтенка Любы. Геологический возраст 42 000 лет", 
    "image": "https://mvk.yanao.ru/upload/iblock/854/Mumiya-mamontenka-Lyuby.-Geologicheskiy-vozrast-42-000-let.jpg", 

  },
  {
    "title": "Сумка для рукоделия",
    "description" : "Сумка для рукоделия. Ненцы. Первая половина XX века", 
    "image": "https://mvk.yanao.ru/upload/iblock/2d1/Sumka-dlya-rukodeliya.-Nentsy.-Pervaya-polovina-XX-veka.jpg", 

  },
  {
    "title": "Бляха",
    "description" : "Бляха с изображением всадника на коне. XIII-XIV века. Серебро", 
    "image": "https://mvk.yanao.ru/upload/iblock/de7/Blyakha-s-izobrazheniem-vsadnika-na-kone.-XIII_XIV-veka.-Serebro.jpg", 

  },
  {
    "title": "Скульптура антропоморфная",
    "description" : "Скульптура антропоморфная. Сакрально-производственный центр Усть-Полуй. II век до н.э -  II век н.э.", 
    "image": "https://mvk.yanao.ru/upload/iblock/564/Skulptura-antropomorfnaya.-Sakralno_proizvodstvennyy-tsentr-Ust_Poluy.-II-vek-do-n.e-_-II-vek-n.e..jpg", 

  },
  {
    "title": "Ленин на Ямале",
    "description" : "Иван Истомин. Ленин на Ямале. 1940-е. Холст, масло", 
    "image": "https://mvk.yanao.ru/upload/iblock/393/Ivan-Istomin.-Lenin-na-YAmale.-1940_e.-KHolst_-maslo.jpg", 

  },
  {
    "title": "Парка шаманская",
    "description" : "Парка шаманская. Селькупы. Середина XX века", 
    "image": "https://mvk.yanao.ru/upload/iblock/cf9/Parka-shamanskaya.-Selkupy.-Seredina-XX-veka.jpg", 

  },
  {
    "title": "Скелет мамонта",
    "description" : "Скелет Монгоченского мамонта. Геологический возраст 17 000 лет", 
    "image": "https://mvk.yanao.ru/upload/iblock/fbe/Skelet-Mongochenskogo-mamonta.-Geologicheskiy-vozrast-17-000-let.jpg", 

  },
  {
    "title": "Пояс мужской",
    "description" : "Пояс мужской. Ненцы. Начало XX века. Дар В. П. Евладову", 
    "image": "https://mvk.yanao.ru/upload/iblock/dcb/Poyas-muzhskoy.-Nentsy.-Nachalo-XX-veka.-Dar-V.-P.-Evladovu.jpg", 

  },
  {
    "title": "Деревянный оклад зеркала",
    "description" : "Деревянный оклад зеркала. Конец XIX - начало XX века", 
    "image": "https://mvk.yanao.ru/upload/iblock/6f8/Derevyannyy-oklad-zerkala.-Konets-XIX-_-nachalo-XX-veka.jpg", 

  },
  {
    "title": "Край земли",
    "description" : "Андрей Яковлев Край земли. 1967. Холст, масло", 
    "image": "https://mvk.yanao.ru/upload/iblock/e51/Andrey-YAkovlev-Kray-zemli.-1967.-KHolst_-maslo.jpg", 

  },
  {
    "title": "Икона Богоматери",
    "description" : "Евсей Моисеенко. Икона Богоматери. 1973. Бумага, смешанная техника", 
    "image": "https://mvk.yanao.ru/upload/iblock/502/Evsey-Moiseenko.-Ikona-Bogomateri.-1973.-Bumaga_-smeshannaya-tekhnika.jpg", 

  },
  {
    "title": "Нога мамонта",
    "description" : "Мумифицированная нога Монгоченского мамонта. Геологический возраст 17000 лет", 
    "image": "https://mvk.yanao.ru/upload/iblock/cb7/Mumifitsirovannaya-noga-Mongochenskogo-mamonta.-Geologicheskiy-vozrast-17000-let.jpg", 

  },
  {
    "title": "Граммофон",
    "description" : "Граммофон. Конец XIX - начало XX века", 
    "image": "https://mvk.yanao.ru/upload/iblock/fff/Grammofon.-Konets-XIX-_-nachalo-XX-veka.jpg", 

  },
  {
    "title": "Камлание",
    "description" : "Минсалим Тимергазеев.  Камлание. 2003. Бивень мамонта, дерево", 
    "image": "https://mvk.yanao.ru/upload/iblock/ea2/Minsalim-Timergazeev.-Kamlanie.-2003.-Biven-mamonta_-derevo.jpg",
  },
  {
    "title": "Сосуд берестяной",
    "description" : "Сосуд берестяной. Сакрально-производственный центр Усть-Полуй. II век до н.э -  II век н.э.", 
    "image": "https://mvk.yanao.ru/upload/iblock/f6e/Sosud-berestyanoy.-Sakralno_proizvodstvennyy-tsentr-Ust_Poluy.-II-vek-do-n.e-_-II-vek-n.e..jpg", 

  },
  {
    "title": "Сумка из гусиных лап",
    "description" : "Сумка из гусиных лап. Коряки. ХХ век. Мастер М. Лоновцева.", 
    "image": "https://mvk.yanao.ru/upload/iblock/4ba/Sumka-iz-gusinykh-lap.-Koryaki.-KHKH-vek.-Master-M.-Lonovtseva.jpg", 

  },
  {
    "title": "Чучело казарки",
    "description" : "Чучело краснозобой казарки. 2002", 
    "image": "https://mvk.yanao.ru/upload/iblock/2a8/CHuchelo-krasnozoboy-kazarki.-2002.jpg", 

  },
  {
    "title": "Когда киты уходят",
    "description" : "Василий Моисеев. Когда киты уходят. 2018. Рог лося, кость кита", 
    "image": "https://mvk.yanao.ru/upload/iblock/13d/Vasiliy-Moiseev.-Kogda-kity-ukhodyat.-2018.-Rog-losya_-kost-kita.jpgg", 
  }
];

export class TopExhibitIntent implements IntentInterface {

  getResponse() {
    const payload = topExhibits[Math.floor(Math.random()*topExhibits.length)];
    return new CardResponse(payload.title, payload.image, payload.description);
  }
}