import { TopExhibitIntent } from './top-exhibit.intent';

export const TOP_EXHIBIT_INTENT = 'topExhibit';
export const ABOUT_MUSEUM_INTENT = 'aboutMuseum';

export class IntentFactory {

  static getIntent(intentName: string) {
    
    switch(intentName) {
      case TOP_EXHIBIT_INTENT:
        return new TopExhibitIntent()
      default: 
        throw new Error('Unknown intent');  
    }
  }
}