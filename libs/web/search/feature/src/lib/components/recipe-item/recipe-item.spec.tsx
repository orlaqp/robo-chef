import { render } from '@testing-library/react';

import RecipeItem from './recipe-item';

describe('RecipeItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecipeItem />);
    expect(baseElement).toBeTruthy();
  });
});
