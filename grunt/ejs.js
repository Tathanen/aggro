"use strict";

module.exports = {
    build: {
        options: {
            useSource: "<%= useSource %>",
            useDist: "<%= useDist %>"
        },
        src: "build/index.html",
        dest: "build/index.html",
        overwrite: true
    }
};
