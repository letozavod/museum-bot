import { BotResponse } from "./bot-response.interface";

export class TextResponse implements BotResponse {

  constructor(
    public text: string
  ) {}

  plainText() {
    return {
      "fulfillmentText": this.text
    };
  }

  richMessage() {
    return {
      "fulfillmentText": this.text
    };
  }

}