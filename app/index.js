'use strict';
var generators = require('yeoman-generator'),
    _ = require('lodash'),
    fs = require('fs'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    prompting: function () {
        this.log(yosay('Welcome to ' +
            chalk.blue('Dynamic-NG Code') + ' Generator!'));

        var done = this.async();
        this.prompt([{
            type: 'input',
            name: 'appname',
            message: 'Name Your application .. ',
            default: this.config.get('appname') || 'app'
        },
            {
                type: 'input',
                name: 'ngappname',
                message: 'Angular App Name (ng-app)',
                default: this.config.get('ngappname') || 'app'
            },
            {
                type: 'checkbox',
                name: 'jslibs',
                message: 'Select base CSS template framework.. ',
                choices: [
                    {
                        name: 'BootStrap',
                        value: 'bootstrap',
                        checked: true
                    },
                    {
                        name: 'Material Design ',
                        value: 'materialdesign',
                        checked: true
                    }
                ]},
             {
                type: 'list',
                name: "installPackages",
                message: "Run npm install and bower install?",
                choices: ['Yes', 'No']
            }], function (answers) {
                this.config.set('ngappname', answers.ngappname);
                this.config.save();

                // this.includeLodash = _.includes(answers.jslibs, 'lodash');
                // this.includeMoment = _.includes(answers.jslibs, 'momentjs');
                // this.includeAngularUIUtils = _.includes(answers.jslibs, 'angularuiutils');
                // this.includeAngularLocalStorage = _.includes(answers.jslibs, 'angularLocalStorage');
                // this.includeAngularTranslate = _.includes(answers.jslibs, 'angularTranslate');
                // this.includeAngularDatatable = _.includes(answers.jslibs, 'angularDatatable');
                
                this.bootstrapTemplate = _.includes(answers.jslibs, 'bootstrap');
                this.materialTemplate = _.includes(answers.jslibs, 'materialdesign');
                this.installPackages = answers.installPackages;
                
                
                 this.log(chalk.yellow.bold(this.bootstrapTemplate));
                 
                  this.log(chalk.yellow.bold(this.materialTemplate));
                done();
            }.bind(this));
    },
    writing: {
        gulpfile: function () {
           
            this.copy('_gulpfile.js', 'gulpfile.js');
            this.copy('_gulp.config.js', 'gulp.config.js');
            this.copy('gitignore', '.gitignore');
            this.copy('jshintrc', '.jshintrc');
            
        },

        packageJSON: function () {
           
            this.copy('_package.json', 'package.json');
        },

        git: function () {
          
            this.composeWith('common', {
                options: {
                    'skip-messages': true,
                    gitignore: true,
                    gitattributes: true,
                    jshintrc: false,
                    editorconfig: false,
                    'test-jshintrc': false
                }
            });
        },

        bower: function () {
            
            
            this.copy('_bower.json', 'bower.json');
            this.copy('bowerrc', '.bowerrc');
            
        },

        appStaticFiles: function () {
           
            this.copy('_favicon.ico', 'src/favicon.ico');
            this.directory('styles', 'src/styles');
            if(this.materialTemplate)
             {
                 this.directory('material/client/assets', 'src/app/client/assets');
             }
        },

        scripts: function () {
             
            // Script for material 
            if(this.materialTemplate)
            {
                
                this.fs.copyTpl(
                    this.templatePath('material/client/_app.js'),
                    this.destinationPath('src/app/client/app.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/server/_server.js'),
                    this.destinationPath('src/app/server/server.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
               
                this.fs.copyTpl(
                    this.templatePath('material/client/features/about/_about.controller.js'),
                    this.destinationPath('src/app/client/features/about/about.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/about/_route.js'),
                    this.destinationPath('src/app/client/features/about/route.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                    
                this.fs.copyTpl(
                    this.templatePath('material/client/features/content/_content.controller.js'),
                    this.destinationPath('src/app/client/features/content/content.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/content/_route.js'),
                    this.destinationPath('src/app/client/features/content/route.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                  
                this.fs.copyTpl(
                    this.templatePath('material/client/features/footer/_footer.controller.js'),
                    this.destinationPath('src/app/client/features/footer/footer.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/footer/_route.js'),
                    this.destinationPath('src/app/client/features/footer/route.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                
                this.fs.copyTpl(
                    this.templatePath('material/client/features/header/_header.controller.js'),
                    this.destinationPath('src/app/client/features/header/header.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/header/_route.js'),
                    this.destinationPath('src/app/client/features/header/route.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
               
                this.fs.copyTpl(
                    this.templatePath('material/client/features/main/_main.controller.js'),
                    this.destinationPath('src/app/client/features/main/main.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/main/_route.js'),
                    this.destinationPath('src/app/client/features/main/route.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                
               
                this.fs.copyTpl(
                    this.templatePath('material/client/features/menu/_menu.controller.js'),
                    this.destinationPath('src/app/client/features/menu/menu.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/menu/_route.js'),
                    this.destinationPath('src/app/client/features/menu/route.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                    
                this.fs.copyTpl(
                    this.templatePath('material/client/features/navbar/_navbar.controller.js'),
                    this.destinationPath('src/app/client/features/navbar/navbar.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('material/client/features/navbar/_route.js'),
                    this.destinationPath('src/app/client/features/navbar/route.js'),
                    {                                  
                        ngapp: this.config.get('ngappname')
                    }
                    );
                    
                     this.log('inside ok');
            }      
            // end script for material 
            
            if(this.bootstrapTemplate)
                {
               
                this.fs.copyTpl(
                    this.templatePath('_app.js'),
                    this.destinationPath('src/app/client/app.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('_server.js'),
                    this.destinationPath('src/app/server/server.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    }
                    );
                this.fs.copyTpl(
                    this.templatePath('client/features/content/_content.controller.js'),
                    this.destinationPath('src/app/client/features/content/content.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/content/_routes.js'),
                    this.destinationPath('src/app/client/features/content/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });    
                        
                this.fs.copyTpl(
                    this.templatePath('client/features/footer/_footer.controller.js'),
                    this.destinationPath('src/app/client/features/footer/footer.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/footer/_routes.js'),
                    this.destinationPath('src/app/client/features/footer/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                    
                this.fs.copyTpl(
                    this.templatePath('client/features/header/_header.controller.js'),
                    this.destinationPath('src/app/client/features/header/header.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/header/_routes.js'),
                    this.destinationPath('src/app/client/features/header/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                    
                this.fs.copyTpl(
                    this.templatePath('client/features/nav-bar/_navbar.controller.js'),
                    this.destinationPath('src/app/client/features/nav-bar/navbar.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/nav-bar/_routes.js'),
                    this.destinationPath('src/app/client/features/nav-bar/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                    
                this.fs.copyTpl(
                    this.templatePath('client/features/quick-sidebar/_quick-sidebar.controller.js'),
                    this.destinationPath('src/app/client/features/quick-sidebar/quick-sidebar.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/quick-sidebar/_routes.js'),
                    this.destinationPath('src/app/client/features/quick-sidebar/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                    
                this.fs.copyTpl(
                    this.templatePath('client/features/sidebar/_sidebar.controller.js'),
                    this.destinationPath('src/app/client/features/sidebar/sidebar.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/sidebar/_routes.js'),
                    this.destinationPath('src/app/client/features/sidebar/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                    
                this.fs.copyTpl(
                    this.templatePath('client/features/theme-panel/_theme-panel.controller.js'),
                    this.destinationPath('src/app/client/features/theme-panel/theme-panel.controller.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                this.fs.copyTpl(
                    this.templatePath('client/features/theme-panel/_routes.js'),
                    this.destinationPath('src/app/client/features/theme-panel/routes.js'),
                    {
                        ngapp: this.config.get('ngappname')
                    });
                }
            this.copy('_karma.conf.js', 'karma.conf.js');
            this.copy('_protractor-config.js', 'protractor-config.js');
           
           
            
        },

        html: function () {

                     
            // HTML for material 
            
                if(this.materialTemplate)
                    {
                        
                         
                    this.fs.copyTpl(
                        this.templatePath('material/client/_index.html'),
                        this.destinationPath('src/app/client/index.html'),
                        {
                            appname: _.startCase(this.appname),
                            ngapp: this.config.get('ngappname'),
                        });

                    this.fs.copy(
                        this.templatePath('material/client/features/about/_about.html'),
                        this.destinationPath('src/app/client/features/about/about.html'));
                        
                    this.fs.copy(
                        this.templatePath('material/client/features/content/_content.html'),
                        this.destinationPath('src/app/client/features/content/content.html'));
                    this.fs.copy(
                        this.templatePath('material/client/features/footer/_footer.html'),
                        this.destinationPath('src/app/client/features/footer/footer.html'));
                        
                    this.fs.copy(
                        this.templatePath('material/client/features/header/_header.html'),
                        this.destinationPath('src/app/client/features/header/header.html'));
                        
                    this.fs.copy(
                        this.templatePath('material/client/features/main/_main.html'),
                        this.destinationPath('src/app/client/features/main/main.html'));
                        
                    this.fs.copy(
                        this.templatePath('material/client/features/menu/_menu.html'),
                        this.destinationPath('src/app/client/features/menu/menu.html'));
                        
                    this.fs.copy(
                        this.templatePath('material/client/features/navbar/_navbar.html'),
                        this.destinationPath('src/app/client/features/navbar/navbar.html'));
                        
                    this.fs.copy(
                        this.templatePath('material/client/features/partials/_menu-link.tmpl.html'),
                        this.destinationPath('src/app/client/features/partials/menu-link.tmpl.html'));
                    this.fs.copy(
                        this.templatePath('material/client/features/partials/_menu-toggle.tmpl.html'),
                        this.destinationPath('src/app/client/features/partials/menu-toggle.tmpl.html'));
            }
            // End HTMLfor material  
            
            if(this.bootstrapTemplate)
             {
                    this.fs.copyTpl(
                        this.templatePath('_index.html'),
                        this.destinationPath('src/app/client/index.html'),
                        {
                            appname: _.startCase(this.appname),
                            ngapp: this.config.get('ngappname'),
                        });

                    this.fs.copy(
                        this.templatePath('client/features/content/_content.html'),
                        this.destinationPath('src/app/client/features/content/content.html'));
                    this.fs.copy(
                        this.templatePath('client/features/footer/_footer.html'),
                        this.destinationPath('src/app/client/features/footer/footer.html'));
                    this.fs.copy(
                        this.templatePath('client/features/header/_header.html'),
                        this.destinationPath('src/app/client/features/header/header.html'));
                    this.fs.copyTpl(
                        this.templatePath('client/features/nav-bar/_navbar.html'),
                        this.destinationPath('src/app/client/features/nav-bar/navbar.html'));
                    
                    this.fs.copyTpl(
                        this.templatePath('client/features/quick-sidebar/_quick-sidebar.html'),
                        this.destinationPath('src/app/client/features/quick-sidebar/quick-sidebar.html'));
                    this.fs.copyTpl(
                        this.templatePath('client/features/sidebar/_sidebar.html'),
                        this.destinationPath('src/app/client/features/sidebar/_sidebar.html'));
                    this.fs.copyTpl(
                        this.templatePath('client/features/theme-panel/_theme-panel.html'),
                        this.destinationPath('src/app/client/features/theme-panel/_theme-panel.html'));
             }
        }
    },
    conflicts: function () {
    },
    install: function () {
        if (this.installPackages === 'Yes') {
            this.installDependencies({
                skipInstall: this.options['skip-install']
            });
        }
    },
    end: function(){
        this.log(chalk.yellow.bold('Installation successful!'));

        var howToInstall =
            '\nAfter running ' + chalk.yellow.bold('npm install & bower install') +
            ', inject your front end dependencies by running ' +
            chalk.yellow.bold('gulp wiredep') +
            '.';

        if (!this.options['skip-install']) {
            this.log(howToInstall);
            return;
        }
    }
});