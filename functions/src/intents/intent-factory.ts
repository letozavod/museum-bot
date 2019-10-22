import { TopExhibitIntent } from './top-exhibit.intent';
import { IntentInterface } from './intent.interface';
import { WhatYouCanIntent } from './what-you-can.intent';
import { WelcomeEventIntent } from './welcome-event.intent';
import { GameIntent } from './game.intent';
import { WorktimeIntent } from './worktime.intent';

export const TOP_EXHIBIT_INTENT = 'topExhibit';
export const WHAT_YOU_CAN_INTENT = 'whatYouCan';
export const ABOUT_MUSEUM_INTENT = 'aboutMuseum';
export const WELCOME_EVENT_INTENT = 'welcomeEvent';
export const GAME_INTENT = 'game';
export const WORKTIME_INTENT = 'worktime';

export class IntentFactory {

  static getIntent(intentName: string): IntentInterface {
    
    switch(intentName) {
      case TOP_EXHIBIT_INTENT:
        return new TopExhibitIntent();
      case WHAT_YOU_CAN_INTENT:
        return new WhatYouCanIntent();
      case WELCOME_EVENT_INTENT:
        return new WelcomeEventIntent();
      case GAME_INTENT: 
        return new GameIntent();
      case WORKTIME_INTENT: 
        return new WorktimeIntent();
      default: 
        throw new Error('Unknown intent');  
    }
  }
}