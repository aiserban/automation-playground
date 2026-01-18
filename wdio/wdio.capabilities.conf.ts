const getExecutionConfig = () => {
  const device = process.env.DEVICE.toLowerCase();
  const browserName = process.env.BROWSER.toLowerCase();
  const headless = process.env.HEADLESS.toLowerCase() === 'true';

  const chromeArgs = [
    '--disable-infobars',
    ...(headless ? ['--headless=new'] : []),
  ];

  if (device === 'desktop' && browserName === 'chrome') {
    return {
      capabilities: [
        {
          browserName: 'chrome',
          'goog:chromeOptions': {
            args: chromeArgs,
          },
        },
      ],
      services: [],
    };
  }

  if (device === 'mobile' && browserName === 'safari') {
    return {
      capabilities: [
        {
          platformName: 'iOS',
          'wdio:deviceType': 'mobile',
          'appium:deviceName': 'iPhone 16',
          'appium:platformVersion': '18.6',
          'appium:automationName': 'XCUITest',
          'appium:browserName': 'Safari',
          'appium:newCommandTimeout': 240,
        },
      ],
      services: [
        [
          'appium',
          {
            command: '/Users/andrei/.nvm/versions/node/v24.13.0/bin/appium',
            args: { address: '127.0.0.1', port: 4723 },
          },
        ],
      ],
    };
  }
};

export const executionConfig = getExecutionConfig();
