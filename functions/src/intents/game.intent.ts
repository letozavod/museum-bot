import { IntentInterface } from './intent.interface';
import { TextResponse } from '../responses/text.response';


export class GameIntent implements IntentInterface {

  getResponse() {
    return new TextResponse(`Бродилка «Музейная книга Гиннесса»
    В твоих руках Самая первая бродилка МВК «Музейная книга Гиннесса». 
    Вслед за Артуром Гиннессом, создателем всемирно известной книги рекордов, исследуй музейные залы, внимательно рассмотрев экспонаты, и впиши «самые-самые удивительные характеристики экспонатов в новую страницу книги музейных рекордов.
    
    Инструкция:
    
    - Внимательно читай задания.
    - Используй для выполнения заданий содержимое рюкзака-помощника.
    - Одень треуголку и перчатки и отправляйся в путь.
    - Помни, что в музейных залах нужно вести себя тихо, дабы не спугнуть открытие, а также, помни, что трогать экспонаты можно только там, где есть специальный знак.
    - После того, как все задания выполнены, возвращайся в кассу и обменяй свой маршрутный лист на сувенир и верни рюкзачок-помощник.
    
    Ну что, начинаем?`);
  }
}