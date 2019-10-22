import { BotResponse } from "./bot-response.interface";

export class CardResponse implements BotResponse {

  constructor(
    public title: string, 
    public image: string, 
    public description: string, 
    public buttons = []) {
  }

  plainText() {
    return {
      "fulfillmentText": `${this.title}\n\n${this.description}`
    };
  }

  richMessage() {
    return {
      "fulfillmentMessages": [
        {
          "card": {
            "title": this.title,
            "formattedText": this.description,
            "image": {
              "imageUri": this.image
            },
          }
        }
      ]
    }
  }
}