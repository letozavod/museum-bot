import { IntentInterface } from "./intent.interface";
import { TextResponse } from "../responses/text.response";

export class WhatYouCanIntent implements IntentInterface {
  getResponse() {

    return new TextResponse(`Спроси меня про:
    - Интересные экспонаты музея;
    - Время работы музея;
  
    Либо давай сыграем в увлекательную игру.

    Просто спроси меня об этом.`);
  }
}