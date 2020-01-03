// conf.js
exports.config = {
  framework: "jasmine2",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["*.spec.js"],
  multiCapabilities: [{ browserName: "firefox" }, { browserName: "chrome" }],
  onPrepare: function() {
    var jasmineReporters = require("jasmine-reporters");

    return browser.getProcessedConfig().then(config => {
      var browserName = config.capabilities.browserName;

      jasmine.getEnv().addReporter(
        new jasmineReporters.JUnitXmlReporter({
          consolidateAll: true,
          savePath: "./logs",
          // this will produce distinct xml files for each capability
          filePrefix: browserName + "-xmloutput",
          modifySuiteName: function(generatedSuiteName, suite) {
            // this will produce distinct suite names for each capability,
            // e.g. 'firefox.login tests' and 'chrome.login tests'
            return browserName + "." + generatedSuiteName;
          }
        })
      );
    });
  }
};
