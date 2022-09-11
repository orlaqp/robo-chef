import { ApolloProvider } from '@apollo/client';
import styled from '@emotion/styled';
import { apolloClient } from '@robo-chef/web/graphql';
import { SearchFeature } from '@robo-chef/web/search/feature';

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <ApolloProvider client={apolloClient}>
      <StyledPage>
        <SearchFeature />
      </StyledPage>
    </ApolloProvider>
  );
}

export default Index;
