module.exports = {
    build:
    {
        options: {
            rootpath: "",
            compress: "<%= useDist %>"
        },
        files: {
            "build/project.css": "source/modules/_app/styles/main.less"
        }
    }
};
