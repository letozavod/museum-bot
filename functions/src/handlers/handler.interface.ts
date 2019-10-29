export interface HandlerInterface {
  priority: number;
  handler: Function;
  condition: Function | null;

  handle(agent: any): void;
  isSuitable(agent: any): boolean;
}