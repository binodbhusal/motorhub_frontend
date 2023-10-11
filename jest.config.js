module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|css)$": "identity-obj-proxy",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(scss|css)$": "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
