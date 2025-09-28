module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
// This configuration file sets up Babel to use the preset-env preset, targeting the current version of Node.js. This is particularly useful for ensuring compatibility when running tests in a Node.js environment, as it allows you to use modern JavaScript features while ensuring they are transpiled appropriately for the version of Node.js you are using.
//adding @babel/preset-react with runtime automatic to transpile JSX code in the test files.  it is required to transform JSX syntax into JavaScript that can be understood by the testing environment. testing environment like Jest needs to understand JSX syntax to run tests on React components.jest uses babel-jest to transpile the code before running the tests.
// The "automatic" runtime allows you to use JSX without having to import React in every file, as Babel will automatically handle the necessary imports.
