import { HandlerInterface } from "./handler.interface";

export class IntentHandler implements HandlerInterface {

  constructor(
    public intentName: string,
    public handler: Function,
    public priority: number,
    public condition: Function | null
  ) {}

  handle(agent: any) {
    this.handler(agent);
  }

  isSuitable(agent: any) {
    return this.intentName === agent.intent 
      && (this.condition === null || this.condition.call(this, agent)); 
  }
}