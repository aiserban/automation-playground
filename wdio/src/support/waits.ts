export const wait = (elements: ChainablePromiseArray) => {
  const getLen = async () => await elements.length;

  return {
    toBeGreaterThan: async (n: number) =>
      browser.waitUntil(async () => (await getLen()) > n, {
        timeoutMsg: `Expected count to be > ${n} but got ${await getLen()}`,
      }),

    toBeLessThan: async (n: number) =>
      browser.waitUntil(async () => (await getLen()) < n, {
        timeoutMsg: `Expected count to be < ${n} but got ${await getLen()}`,
      }),

    toBeAtLeast: async (n: number) =>
      browser.waitUntil(async () => (await getLen()) >= n, {
        timeoutMsg: `Expected count to be >= ${n} but got ${await getLen()}`,
      }),

    toBeAtMost: async (n: number) =>
      browser.waitUntil(async () => (await getLen()) <= n, {
        timeoutMsg: `Expected count to be <= ${n} but got ${await getLen()}`,
      }),

    toBeExactly: async (n: number) =>
      browser.waitUntil(async () => (await getLen()) === n, {
        timeoutMsg: `Expected count to be exactly ${n} but got ${await getLen()}`,
      }),

    toNotBe: (n: number) =>
      browser.waitUntil(async () => (await getLen()) !== n, {
        timeoutMsg: `Expected count to not be ${n}`,
      }),
  };
};
