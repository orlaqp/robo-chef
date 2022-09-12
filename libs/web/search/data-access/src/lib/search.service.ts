import { gql } from '@apollo/client';

export const searchRecipesQuery = gql`
  query SearchRecipes($text: String) {
    recipes(text: $text) {
      Name
      Description
    }
  }
`;
