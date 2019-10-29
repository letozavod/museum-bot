import { HandlerInterface } from "./handler.interface";

export class QueryHandler implements HandlerInterface {

  constructor(
    public query: string,
    public handler: Function,
    public priority: number,
    public condition: Function | null
  ) {}

  handle(agent: any) {
    this.handler(agent);
  }

  isSuitable(agent: any): boolean {
    return this.query === agent.query 
      && (this.condition === null || this.condition(agent)); 
  }
}