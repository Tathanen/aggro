module.exports = {
    options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.s3Bucket %>"
    },
    build: {
        options : {
            headers: {
                CacheControl: 31536000
            }
        },
        cwd: "build/",
        src: [ "**", "!**.html" ],
        dest: "build-<%= version %>/build/"
    },
    index: {
        cwd: "build/",
        src: "**.html",
        dest: "build-<%= version %>/build/"
    },
    robots: {
        cwd: "build/",
        src: "robots.txt",
        dest: "build-<%= version %>/"
    }
};
