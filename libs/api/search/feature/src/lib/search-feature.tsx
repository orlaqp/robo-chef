import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/system';

/* eslint-disable-next-line */
export interface SearchFeatureProps {}

const StyledSearchFeature = styled.div`
  color: pink;
`;

export function SearchFeature(props: SearchFeatureProps) {
  return (
    <StyledSearchFeature>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Stack spacing={2}>
          <TextField id="outlined-basic" label="Type to search for recipes" variant="outlined" />
        </Stack>
      </Container>
    </StyledSearchFeature>
  );
}

export default SearchFeature;
