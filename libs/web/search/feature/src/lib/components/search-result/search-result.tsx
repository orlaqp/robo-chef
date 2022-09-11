import styled from '@emotion/styled';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import { RecipeDTO } from 'libs/shared/model/src';
import React from 'react';

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
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {items &&
          items.map((i) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={i.Name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {i.Description || 'N/A'}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
      </List>
    </StyledSearchResult>
  );
}

export default SearchResult;
