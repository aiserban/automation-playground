export const MESSAGES = Object.freeze({
  LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.',
  INCORRECT_PASSWORD: `Epic sadface: Username and password do not match any user in this service`,
});

type MessageValues = keyof typeof MESSAGES;

export const isAllowedMessage = (value: any): value is MessageValues => {
  return Object.keys(MESSAGES).includes(value);
};
