module.exports = {
    options: {
        processors: [
            require( "autoprefixer-core" )( { browsers: "IE >= 9, > 1%" } )
        ]
    },
    build: {
        src: "build/project.css"
    }
};
