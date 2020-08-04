import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client';

import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const prisma = new PrismaClient();

export interface Context {
  prisma: typeof prisma;
  db: any;
}

const resolvers = {
  Query,
  Mutation
};

// 3
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
server.start(() => console.log(`Server  is running on http://localhost:4000`));
