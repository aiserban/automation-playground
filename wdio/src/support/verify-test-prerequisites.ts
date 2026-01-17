const mandatoryEnvironmentVariables = ['TEST_ENV', 'DEFAULT_PASSWORD', 'TAGS'];

export const verifyTestPrerequisites = () => {
  mandatoryEnvironmentVariables.forEach((item) => {
    if (!process.env[item])
      throw new Error(
        `Environment variable ${item} is required for test execution.`
      );
  });
};
