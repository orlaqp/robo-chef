import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface RecipeItemProps {}

const StyledRecipeItem = styled.div`
  color: pink;
`;

export function RecipeItem(props: RecipeItemProps) {
  return (
    <StyledRecipeItem>
      <h1>Welcome to RecipeItem!</h1>
    </StyledRecipeItem>
  );
}

export default RecipeItem;
