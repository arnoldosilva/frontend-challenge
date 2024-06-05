module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: ["app/**/*.ts(x)?", "!app/**/*.d.ts"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.next/",
    "/.jest/",
    "/app/lib/",
    "/app/page.tsx",
    "/app/layout.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/app"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
