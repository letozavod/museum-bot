import { IntentInterface } from './intent.interface';
import { TextResponse } from '../responses/text.response';


export class GameIntent implements IntentInterface {

  getResponse() {
    return new TextResponse('Привет! Добро пожаловать в игру! Тебе нужно ответить на несколько вопросов, чтобы получить приз!');
  }
}