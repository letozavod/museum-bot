import { BotResponse } from "./bot-response.interface";

export class CardResponse implements BotResponse {

  constructor(
    public title: string, 
    public image: string|null, 
    public description: string,
    public url: string, 
    public buttons = []) {
  }

  plainText() {

    let fulfillmentText = `${this.title}\n\n${this.description}`;
    if(this.url) {
      fulfillmentText += `\n\nCмотреть на сайте: ${this.url}`;
    }
    
    return {
      fulfillmentText
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