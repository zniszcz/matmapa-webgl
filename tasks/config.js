module.exports = (gulp) => {
    return {
        css: {
            scss: "./src/scss/**/*.{scss,sass}",
            scssDir: "./src/scss",
            css: "./.tmp/css/**/*.css",
            cssDir: "./.tmp/css",
            dist: "./dist"  
        } 
    };
};
