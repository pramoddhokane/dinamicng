module.exports = function () {
    var app = 'src/app/';
    //var homeViews = 'views/home/';

    var config = {
        //homeViews: homeViews,
        //index: homeViews + 'index.cshtml',
        index: 'src/index.html',
        appJs: app + '/',

        js: [
            app + '**/*.js',
            'src/styles/**/*.css'
        ],

        bower: {
            json: require('./bower.json'),
            directory: './src/lib/',
            ignorePath: './src',
            relative: true
        }
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    }

    return config;
};