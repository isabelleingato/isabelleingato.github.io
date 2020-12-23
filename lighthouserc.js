// https://css-tricks.com/continuous-performance-analysis-with-lighthouse-ci-and-github-actions/
// https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/configuration.md#target
// https://github.com/GoogleChrome/budget.json
// https://github.com/GoogleChrome/lighthouse-ci/blob/master/docs/server.md
module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run clean && npm run build && npm run serve",
      url: [
        "http://localhost:9000/",
        "http://localhost:9000/about",
        "http://localhost:9000/blog",
        "http://localhost:9000/recommentations",
      ],
      startServerReadyPattern:
        "You can now view iingato-personal-site in the browser.",
      startServerReadyTimeout: 20000,
      numberOfRuns: 5,
      assert: {
        assertions: {
          "first-contentful-paint": ["warn", { maxNumericValue: 4000 }],
          viewport: "error",
          "resource-summary:document:size": [
            "error",
            { maxNumericValue: 14000 },
          ],
          "resource-summary:font:count": ["warn", { maxNumericValue: 1 }],
          "resource-summary:third-party:count": [
            "warn",
            { maxNumericValue: 5 },
          ],
        },
        budgetFile: "./budget.json",
      },
    },
    upload: {
      target: "filesystem", // or temporary-public-storage
    },
  },
};
