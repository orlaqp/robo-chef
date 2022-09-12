import styled from '@emotion/styled';
import {
  Divider,
  List,
} from '@mui/material';
import { RecipeDTO } from 'libs/shared/model/src';
import React from 'react';
import RecipeItem from '../recipe-item/recipe-item';

/* eslint-disable-next-line */
export interface SearchResultProps {
  items: RecipeDTO[];
}

const StyledSearchResult = styled.div`
  color: pink;
`;

export function SearchResult({ items }: SearchResultProps) {
  return (
    <StyledSearchResult>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {items &&
          items.map((i, idx) => (
            <>
              <RecipeItem key={idx} item={i} />
              <Divider variant="inset" component="li" />
            </>
          ))}
      </List>
    </StyledSearchResult>
  );
}

export default SearchResult;
