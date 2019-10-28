const { Card, Suggestion } = require('dialogflow-fulfillment');

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
    agent.add(new Suggestion(`Начать игру`));
    agent.add(new Suggestion(`Купить билет`));
    agent.add(new Suggestion(`Сыграть позже`));
  } else {
    agent.add('test');
    agent.add(JSON.stringify(agent));  
  }

  agent.add(JSON.stringify(agent.context));
    
}