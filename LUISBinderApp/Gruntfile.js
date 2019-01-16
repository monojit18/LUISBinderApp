module.exports = function(grunt)
{
    
    grunt.initConfig(
    {        
        pkg: grunt.file.readJSON("package.json"),
        jshint:
        {            
            all: ["server/**/*.js"],
            options:
            {
                
                debug: true,
                esversion: 6
            }
        },
        watch:
        {            
            files: ["Gruntfile.js", "server/**/*.js"],
            tasks: ["jshint"]            
        },
        run:
        {            
            commands:
            {             
                exec: "npm -s start"                
            }            
        }
        
    });
    
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-run");

    grunt.registerTask("default", ["jshint", "run"]);
    
};