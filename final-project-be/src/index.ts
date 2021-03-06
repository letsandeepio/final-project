import * as dotenv from 'dotenv';
dotenv.config();

import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

import morgan from 'morgan';

const prisma = new PrismaClient();

export interface Context {
  prisma: typeof prisma;
  db: any;
}

const resolvers = {
  Query,
  Mutation
};

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

const options = {
  cors: corsOptions
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: (request) => {
    return {
      ...request,
      prisma
    };
  }
});

server.express.use(morgan('dev'));

server.start(options, () =>
  console.log(`Server  is running on http://localhost:4000`)
);
