import { IntentInterface } from './intent.interface';
import { TextResponse } from '../responses/text.response';


export class GameIntent implements IntentInterface {

  getResponse() {
    return new TextResponse(`Бродилка. 
    Перед тобой первая онлайн-бродилка по музею.     
    Ну что, начинаем?`);
  }
}
