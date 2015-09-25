module.exports = {
    css: {
        expand: true,
        cwd: "source/images/svg-sprite/",
        src: [ "**/*.svg" ],
        dest: "build/svg-sprite/",

        options: {
            shape: {
                id: {
                    separator: "-"
                },
                dimension: {
                    maxWidth: 32,
                    maxHeight: 32
                }
            },
            mode: {
                css: {
                    sprite: "sprite.svg",
                    render: {
                        css: true
                    }
                }
            }
        }
    },
    use: {
        expand: true,
        cwd: "source/images/svg-sprite/",
        src: [ "**/*.svg" ],
        dest: "build/svg-sprite/",

        options: {
            mode: {
                inline: true,
                symbol: {
                    sprite: "sprite.svg",
                }
            }
        }
    }
};
