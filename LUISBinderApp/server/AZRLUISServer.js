/*jshint esversion: 6 */

class AZRLUISServer
{
    
    constructor()
    {
                
        const nodeModulesPathString = "../node_modules/";  
        const Http = require("http");
        const Path = require("path");
        const BodyParser = require(nodeModulesPathString + "body-parser");
        const Express = require(nodeModulesPathString + "express");
        const AZRConstants = require("./commons/AZRConstants");
        const AZRLUISEntityRouter = require("./routers/AZRLUISEntityRouter");
        const AZRLUISIntentRouter = require("./routers/AZRLUISIntentRouter");
        const AZRLUISPatternRouter = require("./routers/AZRLUISPatternRouter");
        const AZRLUISRoleRouter = require("./routers/AZRLUISRoleRouter");
        const AZRLUISUtterancesRouter = require("./routers/AZRLUISUtterancesRouter");
        const AZRLUISTrainRouter = require("./routers/AZRLUISTrainRouter");
        const AZRLUISPredictionRouter = require("./routers/AZRLUISPredictionRouter");
        const LUISBinderProxy = require(nodeModulesPathString + "azure_luis_binder");
        const DotEnv = require(nodeModulesPathString + "dotenv"); // env

        const _self = this;
        let _express = Express();
        let _httpServer = Http.createServer(_express);
        
        var prepareServer = () =>
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

            _express.use(BodyParser.text());

            const ENV_FILE = Path.join(__dirname, "../.env");
            DotEnv.config({ path: ENV_FILE });
            
        };
        
        var prepareDefaultResponse = () =>
        {
            
            _express.get("/", (request, response) =>
            {
                
                response.send("Welcome to LUISBinder");    
                
            });

        };

        var prepareLUISEntityRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISEntityRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareLUISIntentRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISIntentRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareLUISPatternRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISPatternRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareLUISRoleRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISRoleRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareLUISUtterancesRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISUtterancesRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareLUISTrainRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISTrainRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareLUISPredictionRouter = () =>
        {
            const luisInfo = Express.Router();             
            new AZRLUISPredictionRouter(luisInfo, LUISBinderProxy);
            _express.use("/luis", luisInfo);

        };

        var prepareRouters = () =>
        {

            prepareLUISEntityRouter();
            prepareLUISIntentRouter();
            prepareLUISPatternRouter();
            prepareLUISRoleRouter();
            prepareLUISUtterancesRouter();
            prepareLUISTrainRouter();
            prepareLUISPredictionRouter();

        };

        var bindServer = () =>
        {

            const port = (process.env.PORT || 7011);
            const host = "0.0.0.0"; // for server to be accessible from within Docker swarm
            
           _httpServer.listen(port, host, () =>
            {

                console.log(`We have started our server on port ${_httpServer.address().port}`);

            });

            _httpServer.on("close", () =>
            {

                console.log("We are Closing");    


            });

            process.on("SIGINT", () =>
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
