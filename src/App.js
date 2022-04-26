import { client } from "./gqlClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { CharitiesList } from "./components/CharitiesList";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>CharityBase Demo 🚀</h1>
      <CharitiesList />
    </ApolloProvider>
  );
};

export default App;
