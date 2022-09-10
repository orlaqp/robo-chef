import { render } from '@testing-library/react';

import SearchFeature from './search-feature';

describe('SearchFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchFeature />);
    expect(baseElement).toBeTruthy();
  });
});
