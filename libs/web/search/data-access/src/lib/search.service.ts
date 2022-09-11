import { gql } from '@apollo/client';
import { apolloClient } from '@robo-chef/web/graphql';

export const searchRecipesQuery = gql`
  query SearchRecipes($text: String) {
    recipes(text: $text) {
      Name
      Description
    }
  }
`;

// export const searchRecipes = async (text: string) => {
//     const res = await client.query({
//         query: gql`
//             query SearchRecipes($text: String) {
//                 recipes(text: $text) {
//                     Name
//                     Description
//                 }
//             }
//         `,
//         variables: { text }
//     });

//     return res.
// }
