import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ExchangeRates from "./exchangeRates";

const client = new ApolloClient({
    uri: "https://48p1r2roz4.sse.codesandbox.io",
    cache: new InMemoryCache()
});

export default function Currency() {
    return (
        <ApolloProvider client={client}>
            <div>
                <h2>My first Apollo app 🚀</h2>
                <ExchangeRates />
            </div>
        </ApolloProvider>
    );
}