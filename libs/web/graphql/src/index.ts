import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(`Setting apolloclient to: ${process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT']}`);

export const apolloClient = new ApolloClient({
    // uri: process.env['NEXT_PUBLIC_GRAPHQL_ENDPOINT'],
    uri: 'http://localhost:3333/graphql',
    cache: new InMemoryCache(),
});