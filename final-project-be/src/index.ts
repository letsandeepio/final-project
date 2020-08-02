import { GraphQLServer } from 'graphql-yoga';

const activities = [
  {
    id: 1,
    user_id: 1,
    title: 'Titanic',
    category: 'Watch',
    duration: 120,
    completed: false
  },
  {
    id: 2,
    user_id: 1,
    title: 'Lasagna',
    category: 'Cook',
    duration: 60,
    completed: false
  }
];

// 1
const typeDefs = `
type Query {
  info: String!
  activities: [Activity!]!
}
type Activity {
  id: ID!,
  user_id: Int!,
  title: String!,
  category: String!,
  duration: Int!
  completed: Boolean
}
`;

// 2
const resolvers = {
  Query: {
    info: () => `Eileen, Keith and Sandeep. Get to work!!!!`,
    activities: () => activities
  }
};

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
