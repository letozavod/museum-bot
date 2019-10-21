import * as functions from 'firebase-functions';
import { IntentFactory } from 'functions/intents/intent-factory';

export const dialogFlowfullfilment = functions.https.onRequest((request, response) => {
  const intent = IntentFactory.getIntent(request.body.queryResult.intent.displayName);
  response.send(intent.getResponse());
});