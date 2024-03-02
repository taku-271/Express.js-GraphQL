import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./graphql/resolvers.generated";
import { typeDefs } from "./graphql/typeDefs.generated";
import createContext from "./context";

const app = express();
const PORT = process.env.PORT || 3001;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext(),
  });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
