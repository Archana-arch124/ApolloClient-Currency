import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ExchangeRates from "./Components/exchangeRates";

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
});
export default function Client() {
    return (
        <ApolloProvider client={client}>
              <ExchangeRates/>
        </ApolloProvider>
    );
}