import { User } from './user';
import { getConfig } from './config';

export const getCredentials = (username: string): User => {
  const cfg = getConfig();
  const user = cfg.users.find((u) => u.username === username);
  if (!user)
    throw new Error(
      `User ${username} not found in the environment's configuration`
    );
  return user;
};
