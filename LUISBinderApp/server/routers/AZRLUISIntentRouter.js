/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISIntentService = require("../services/AZRLUISIntentService");

class AZRLUISIntentRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISIntentService = function()
        {
            
            let luisIntentService = new AZRLUISIntentService(routerInfo, AZRLUISProxy);
            luisIntentService.createIntentAsync(this.responseCallback);
            luisIntentService.createPrebuiltIntentAsync(this.responseCallback);
            luisIntentService.getIntentAsync(this.responseCallback);            
            
        };

        this.prepareLUISIntentService();
        
    }
        
}

module.exports = AZRLUISIntentRouter;