/*jshint esversion: 6 */

class AZRLUISServer
{
    
    constructor()
    {
                
        const nodeModulesPathString = "./node_modules/";  
        const Http = require("http");
        const BodyParser = require(nodeModulesPathString + "body-parser");
        const Express = require(nodeModulesPathString + "express");
        const AZRConstants = require("./server/commons/AZRConstants");
        const AZRLUISInterfaceRouter = require("./server/routers/AZRLUISInterfaceRouter");
        const LUISBinderProxy = require(nodeModulesPathString + "azure_luis_binder");

        const _self = this;
        let _express = Express();
        let _httpServer = Http.createServer(_express);
        
        var prepareServer = function()
        {

            _express.use(BodyParser.json
            ({
                limit: AZRConstants.UploadLimit
            }));
            
            _express.use(BodyParser.urlencoded
            ({
                
                limit: AZRConstants.UploadLimit,
                extended: true

            }));
        };
        
        var prepareDefaultResponse = function()
        {
            
            _express.get("/", (request, response) =>
            {
                
                response.send("Welcome to LUISBinder");    
                
            });

        };

        var prepareRouters = function()
        {
            const luisInfo = Express.Router();             
            new AZRLUISInterfaceRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var bindServer = function()
        {

            const port = (process.env.PORT || 7011);
            const host = "0.0.0.0"; // for server to be accessible from within Docker swarm
            
           _httpServer.listen(port, host, function ()
            {

                console.log(`We have started our server on port ${_httpServer.address().port}`);

            });

            _httpServer.on("close", function ()
            {

                console.log("We are Closing");    


            });

            process.on("SIGINT", function()
            {
                _httpServer.close();

            });        

        };
        
        prepareServer();
        prepareDefaultResponse();
        prepareRouters();
        bindServer();
        
    }
    
}

module.exports = new AZRLUISServer();
