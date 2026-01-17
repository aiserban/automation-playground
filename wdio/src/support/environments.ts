const allowedEnvironments = ['prod', 'int'] as const;

export type EnvName = (typeof allowedEnvironments)[number];

export const getEnv = (): EnvName => {
  const env = process.env.TEST_ENV;
  if (!env) throw new Error(`Missing environment variable TEST_ENV`);

  const isValid = (allowedEnvironments as readonly string[]).includes(env);

  if (!isValid)
    throw new Error(
      `${env} is not a valid environment. Allowed values are ${allowedEnvironments.toString()}`
    );

  return env as EnvName;
};

export const isProd = () => {
  return getEnv() === 'prod';
};
