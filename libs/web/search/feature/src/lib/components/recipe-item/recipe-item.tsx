import styled from '@emotion/styled';
import { RecipeDTO } from '@robo-chef/shared/model';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

/* eslint-disable-next-line */
export interface RecipeItemProps {
  item: RecipeDTO;
}

export function RecipeItem({ item }: RecipeItemProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={item.Name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {item.Description || 'N/A'}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

export default RecipeItem;
