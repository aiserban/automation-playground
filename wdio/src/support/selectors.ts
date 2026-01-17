export const getByTestId = (selector: string, elementType: string = '') =>
  `${elementType}[data-test=${selector}]`;
