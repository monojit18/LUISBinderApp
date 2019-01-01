/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISPatternService = require("../services/AZRLUISPatternService");

class AZRLUISPatternRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISPatternService = () =>
        {
            
            let luisIntentService = new AZRLUISPatternService(routerInfo,
                                                                AZRLUISProxy);
            luisIntentService.getPatternsAsync(this.responseCallback);
            luisIntentService.getIntentPatternsAsync(this.responseCallback);
            luisIntentService.addPatternsAsync(this.responseCallback);
            luisIntentService.updatePatternsAsync(this.responseCallback);
            luisIntentService.deletePatternsAsync(this.responseCallback);
            
        };

        this.prepareLUISPatternService();
        
    }
        
}

module.exports = AZRLUISPatternRouter;