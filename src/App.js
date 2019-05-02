import React from "react";
import Auth from "./components/auth/auth";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./services/apollo";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Auth />;
    </ApolloProvider>
  );
}

export default App;
