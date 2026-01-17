export const getByTestId = (selector: string, elementType: string = '') =>
  `${elementType}[data-test='${selector}']`;

export const getElementWithText = (selector: string, elementType = 'button') =>
  `//${elementType}[normalize-space(text())='${selector}']`;
