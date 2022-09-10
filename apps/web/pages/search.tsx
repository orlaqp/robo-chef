import styled from '@emotion/styled';
import { SearchFeature } from '@robo-chef/search/feature';

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
    <StyledPage>
      <SearchFeature />
    </StyledPage>
  );
}

export default Index;
