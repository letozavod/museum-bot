import { IntentInterface } from "./intent.interface";
import { TextResponse } from "../responses/text.response";

export class WelcomeEventIntent implements IntentInterface {
  
  getResponse() {

    return new TextResponse(`Меня зовут Люба Мамонтова. Ты можешь спросить меня про:
    
    - Интересные экспонаты музея;
    - Время работы музея;
  
    Либо сыграть в увлекательную игру.
    
    Просто спроси меня об этом.`);
  }
}