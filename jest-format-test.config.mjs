import baseConfig from "./jest.config.mjs";

const config = {
  ...baseConfig,
  runner: "./tests/config/jest-light-runner",
  testRegex: "tests/format/.*/jsfmt\\.spec\\.js$",
  setupFiles: ["<rootDir>/tests/config/setup.js"],
  projects: [],
};

export default config;
