import { User } from '../../support/user';

const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;

if (!DEFAULT_PASSWORD)
  throw new Error(
    `Password not found in environment variables. Please set it in your  .env file or your pipeline variables`
  );

const users: Array<User> = [
  {
    username: 'standard_user',
    password: DEFAULT_PASSWORD,
  },
  {
    username: 'standard_user',
    password: DEFAULT_PASSWORD,
  },
  {
    username: 'locked_out_user',
    password: DEFAULT_PASSWORD,
  },
  {
    username: 'problem_user',
    password: DEFAULT_PASSWORD,
  },
  {
    username: 'performance_glitch_user',
    password: DEFAULT_PASSWORD,
  },
  {
    username: 'error_user',
    password: DEFAULT_PASSWORD,
  },
];

export default Object.freeze(users);
