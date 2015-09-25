module.exports = {
    options: {
        key: process.env.BROWSERSTACK_KEY,
        hosts: [ {
            name: "localhost",
            port: 3000,
            sslFlag: 0
        } ]
    }
};