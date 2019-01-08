/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISTrainService = require("../services/AZRLUISTrainService");

class AZRLUISTrainRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISTrainService = () =>
        {
            
            let luisTrainService = new AZRLUISTrainService(routerInfo,
                                                            AZRLUISProxy);
            luisTrainService.getTrainStatusAsync(this.responseCallback);
            luisTrainService.trainApplicationAsync(this.responseCallback);
            
        };

        this.prepareLUISTrainService();
        
    }
        
}

module.exports = AZRLUISTrainRouter;