module.exports = {
    options: {
        accessKeyId:     "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        distributionId:  "<%= aws.cloudfrontDistributionId %>",
        invalidations:   [ "/*" ]
    },
    build: {
        options: {
            originPath: "/build-<%= version %>"
        }
    }
};
