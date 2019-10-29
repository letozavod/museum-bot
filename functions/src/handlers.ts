import { HandlersRegistry } from "./handlers/handlers-registry";
const { Card, Suggestion } = require('dialogflow-fulfillment');

const CONTEXT_GAME_WAIT_START = 'gamestage.wait_start';


const SUGGEST_START_GAME = 'Начать игру';
const SUGGEST_BUY_TICKET = 'Купить билет';
const SUGGEST_GAME_LATER = 'Сыграть потом';


export function registerHandlers(): HandlersRegistry {

  const registry = new HandlersRegistry();

  registry.registerIntentHandler('game.info', (agent: any) => {
    
    agent.add([
      'Музейная книга Гиннесса - это маленькая экскурсия вместе с познавательным маршрутом по музею. Ты уже приобрел билет? Если да, то давай начнем.',
      new Suggestion(SUGGEST_START_GAME),
      new Suggestion(SUGGEST_BUY_TICKET),
      new Suggestion(SUGGEST_GAME_LATER)
    ]);
    agent.context.set(CONTEXT_GAME_WAIT_START, 999);
  }, 100, null);



  registry.registerQueryHandler(SUGGEST_START_GAME, (agent: any) => {

    agent.add('Отлично давай играть, дружок!');
    agent.context.set(CONTEXT_GAME_WAIT_START, 999);

  }, 150, (agent: any) => agent.context.get(CONTEXT_GAME_WAIT_START));
  

  return registry;
}



export function defaultFallback(agent: any) {
  agent.add(JSON.stringify(agent.context));
}

export function game(agent: any) {
  
  const gamestage = agent.context.get('gamestage');
  if(!gamestage) {
    agent.add(new Card({
      title: 'Музейная книга Гиннесса',
      imageUrl: 'https://mvk.yanao.ru/upload/iblock/87f/_-_.jpg',
      text: `Это маленькая экскурсия вместе с познавательным маршрутом по музею, которую Вы сможете провести сами`,
    }));
    agent.context.set('gameStage', 999, {
      'started': false,
      'stage': 0
    });
  } else {
    agent.add('test');
    agent.add(JSON.stringify(agent));  
  }

  agent.add(JSON.stringify(agent.context));
    
}