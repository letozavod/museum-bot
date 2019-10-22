import { IntentInterface } from "./intent.interface";
import { TextResponse } from "../responses/text.response";

export class WorktimeIntent implements IntentInterface {
  getResponse() {

    return new TextResponse(`Время работы:
    вт-чт 10:00 - 19:30, пт 12:00 - 20:00
    сб-вс 11:00 - 18:00, пн выходной`);
  }
}