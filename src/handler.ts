import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const helloWorld: APIGatewayProxyHandler = async (event) => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Hello, World!',
    input: event,
  }, null, 2),
});

