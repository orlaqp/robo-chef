import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/system';
import { searchRecipesQuery } from '@robo-chef/web/search/data-access';
import { useCallback, useEffect, useMemo, useState } from 'react';
import SearchResult from './components/search-result/search-result';
import { RecipeDTO } from '@robo-chef/shared/model';
import { Alert, Button } from '@mui/material';
import debounce from 'lodash/debounce';

/* eslint-disable-next-line */
export interface SearchFeatureProps {}

const StyledSearchFeature = styled.div`
  color: pink;
`;

export function SearchFeature(props: SearchFeatureProps) {
  const [text, setText] = useState<string>();
  console.log(`rendering ... ${text}`);
  const debouncedChangeHandler = useMemo(
    () => debounce((text) => setText(text), 300)
  , [])
  
  // TODO: error , loading could be used for a more complete implementation
  const { data, error, loading } = useQuery<{ recipes: RecipeDTO[] }>(searchRecipesQuery, {
    variables: { text },
  });

  if (loading) {
    return (
      <Alert severity="info">Searching ...</Alert>
    )
  }

  if (error) {
    return (
      <Alert severity="error">There was an error while searching</Alert>
    )
  }

  return (
    <StyledSearchFeature>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={1}>
            <TextField
              label="Type to search for recipes"
              variant="outlined"
              onChange={(e) => debouncedChangeHandler(e.target.value)}
            />
          </Stack>
          {data?.recipes && data.recipes.length > 0 && (
            <SearchResult items={data?.recipes} />
          )}
        </Stack>
      </Container>
    </StyledSearchFeature>
  );
}

export default SearchFeature;
