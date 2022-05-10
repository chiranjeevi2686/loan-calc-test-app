var reporter = require('cucumber-html-reporter');
const path =  __dirname;

var options = {
        theme: 'bootstrap',
        jsonFile: `${path}/report.json`,
        output: `${path}/cucumber_report.html`,
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0",
            "Test Environment": "PRE-PROD",
            "Browser": "Chrome  101.0.4951.54",
            "Platform": "MAC OS",
        }
    };

    reporter.generate(options);