module.exports = {
    options: {
        keepAlive: false,
        noColor: false,
        coverageDir: "coverage/protractor",
        args: {
            baseUrl: "http://localhost:3000"
        }
    },
    local: {
        options: {
            configFile: "tests/config/protractor-config.js"
        }
    },
    stack: {
        options: {
            configFile: "tests/config/protractor-config-browserstack.js"
        }
    }
};