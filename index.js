const { ApolloServer } = require("apollo-server");

const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    sayHi: String
  }
`;

const resolvers = {
  Query: {
    sayHi: () => "HelloWorld !!!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));
// server.listen({ port: 5000 }).then(() => `Server is Running on PORT ${PORT}`);
