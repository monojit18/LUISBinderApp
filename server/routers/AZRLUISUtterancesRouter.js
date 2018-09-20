/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISUtterancesService = require("../services/AZRLUISUtterancesService");

class AZRLUISUtterancesRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISUtterancesService = function()
        {
            
            let luisInterfaceService = new AZRLUISUtterancesService(routerInfo,
                                                                    AZRLUISProxy);
            luisInterfaceService.getTrainStatusAsync(this.responseCallback);
            luisInterfaceService.reviewExamplesAsync(this.responseCallback);            
            luisInterfaceService.addLabelsAsync(this.responseCallback);
            luisInterfaceService.deleteLabelsAsync(this.responseCallback);            
            luisInterfaceService.trainApplicationAsync(this.responseCallback);
            
        };

        this.prepareLUISUtterancesService();
        
    }
        
}

module.exports = AZRLUISUtterancesRouter;