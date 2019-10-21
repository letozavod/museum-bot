import * as functions from 'firebase-functions';
import { IntentFactory } from './intents/intent-factory';

export const dialogFlowfullfilment = functions.https.onRequest((request, response) => {
  const intentName = request.body.queryResult.intent.displayName;
  console.log('Intent name:', intentName);
  const intent = IntentFactory.getIntent(intentName);
  response.send(intent.getResponse());
});