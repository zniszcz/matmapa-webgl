const   browserSync = require('browser-sync').create();

module.exports = (gulp) => {
    return () => {
        browserSync.init({
            injectChanges: true,
            server: "./src/"
        });
    }
};
