import { BotResponse } from "../responses/bot-response.interface";

export interface IntentInterface {
  getResponse(): BotResponse;
}