import { BrowserRouter as Router } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { createNetworkStatusNotifier } from "react-apollo-network-status";
import { useRunningProcessContext } from "./contexts/running-process-context";
import { ProgressSpinner } from "primereact/progressspinner";
import ToastProvider from "./contexts/toast-context";

const { link, useApolloNetworkStatus } = createNetworkStatusNotifier();

const GlobalLoader: React.FC = (): JSX.Element => {
  const { numPendingQueries, numPendingMutations } = useApolloNetworkStatus();
  const { isRunning } = useRunningProcessContext();

  return (
    <>
      {numPendingQueries > 0 || numPendingMutations > 0 || isRunning ? (
        <div className="loader">
          <ProgressSpinner />
        </div>
      ) : null}
    </>
  );
};

const client = new ApolloClient({
  // Provide required constructor fields
  cache: new InMemoryCache(),
  link: link.concat(
    createHttpLink({
      uri: "http://localhost:3000/graphql",
    })
  ),

  // Provide some optional constructor fields
  name: "react-web-client",
  version: "1.0",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

const Providers = ({ children }: { children: React.ReactNode }) => (
  <Router>
    <ApolloProvider client={client}>
      <ToastProvider>
        <GlobalLoader />
        {children}
      </ToastProvider>
    </ApolloProvider>
  </Router>
);

export default Providers;
