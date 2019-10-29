import { IntentHandler } from "./intent-handler";
import { HandlerInterface } from "./handler.interface";
import { QueryHandler } from "./query-handler";

export class HandlersRegistry {

  constructor(private registry: HandlerInterface[] = []) {}

  registerIntentHandler(intentName: string, agentHandler: Function, priority: number, condition: Function|null) {
    const handler = new IntentHandler(intentName, agentHandler, priority, condition);
    this.registry.push(handler);
  }

  registerQueryHandler(query: string, agentHandler: Function, priority: number, condition: Function|null) {
    const handler = new QueryHandler(query, agentHandler, priority, condition);
    this.registry.push(handler);
  }

  findHandler(agent: any): HandlerInterface | null {

    const handlers = [...this.registry].filter((agentHandler: HandlerInterface) => agentHandler.isSuitable(agent));
    handlers.sort((h1: HandlerInterface, h2: HandlerInterface) => h1.priority - h2.priority);
    const handler = handlers.pop();

    if(handler) return handler;
    return null;
  }
}