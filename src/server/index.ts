import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import resolvers, { query } from '../services';
import cors from './middlewares/cors';
import auth  from './middlewares/auth';

export default () => {
  const schema = buildSchema(query);
  const server = express();

  server.use(cors);
  server.use(auth);
  server.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
    }),
  );

  return server;
};
