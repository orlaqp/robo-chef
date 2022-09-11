import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import { Container, Stack } from '@mui/system';
import { searchRecipesQuery } from '@robo-chef/web/search/data-access';
import { useEffect, useState } from 'react';
import SearchResult from './components/search-result/search-result';
import { RecipeDTO } from '@robo-chef/shared/model';
import { Button } from '@mui/material';

/* eslint-disable-next-line */
export interface SearchFeatureProps {}

const StyledSearchFeature = styled.div`
  color: pink;
`;

export function SearchFeature(props: SearchFeatureProps) {
  const [text, setText] = useState<string>();
  const { data, error, loading, refetch } = useQuery<{ recipes: RecipeDTO[]}>(
    searchRecipesQuery,
    {
      variables: { text }
    });

  const doSearch = () => refetch({ text });

  return (
    <StyledSearchFeature>
      <Container maxWidth="md" sx={{ marginTop: 4 }}>
        <Stack spacing={2}>
          <Stack direction='row' spacing={1}>
            <TextField id="outlined-basic" label="Type to search for recipes" variant="outlined" onChange={e => setText(e.target.value)} />
            <Button variant='contained' onClick={doSearch}>Search</Button>
          </Stack>
          { data?.recipes && data.recipes.length > 0 &&
          <SearchResult items={data?.recipes}/>
          }
        </Stack>
      </Container>
    </StyledSearchFeature>
  );
}

export default SearchFeature;
