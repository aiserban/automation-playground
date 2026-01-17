import { User } from '../../support/user';

const DEFAULT_PASSWORD = process.env.DEFAULT_PASSWORD;

if (!DEFAULT_PASSWORD)
  throw new Error(
    `Password not found in environment variables. Please set it in your  .env file or your pipeline variables`
  );

const USERS: ReadonlyArray<User> = Object.freeze([
  {
    username: 'standard_user',
    password: DEFAULT_PASSWORD,
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
  },
  {
    username: 'standard_user',
    password: DEFAULT_PASSWORD,
    firstName: 'Jane',
    lastName: 'Smith',
    postalCode: '23456',
  },
  {
    username: 'locked_out_user',
    password: DEFAULT_PASSWORD,
    firstName: 'Lock',
    lastName: 'Wood',
    postalCode: '34567',
  },
  {
    username: 'problem_user',
    password: DEFAULT_PASSWORD,
    firstName: 'Percy',
    lastName: 'Problem',
    postalCode: '45678',
  },
  {
    username: 'performance_glitch_user',
    password: DEFAULT_PASSWORD,
    firstName: 'Gary',
    lastName: 'Glitch',
    postalCode: '56789',
  },
  {
    username: 'error_user',
    password: DEFAULT_PASSWORD,
    firstName: 'Ernie',
    lastName: 'Error',
    postalCode: '67890',
  },
  {
    username: 'visual_user',
    password: DEFAULT_PASSWORD,
    firstName: 'Vinnie',
    lastName: 'Visual',
    postalCode: '78901',
  },
]);

export default USERS;
