export const MESSAGES = Object.freeze({
  LOCKED_OUT: 'Epic sadface: Sorry, this user has been locked out.',
  INCORRECT_PASSWORD: `Epic sadface: Username and password do not match any user in this service`,
  NOT_AUTHORIZED_INVENTORY: `Epic sadface: You can only access '/inventory.html' when you are logged in.`,
  NOT_AUTHORIZED_CART: `Epic sadface: You can only access '/cart.html' when you are logged in.`,
  CHECKOUT_COMPLETE_HEADER: `Thank you for your order!`,
  CHECKOUT_COMPLETE_MESSAGE: `Your order has been dispatched, and will arrive just as fast as the pony can get there!`,
});

type MessageValues = keyof typeof MESSAGES;

export const isAllowedMessage = (value: any): value is MessageValues => {
  return Object.keys(MESSAGES).includes(value);
};
