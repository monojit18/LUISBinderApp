/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISIntentService = require("../services/AZRLUISIntentService");

class AZRLUISIntentRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISIntentService = () =>
        {
            
            let luisIntentService = new AZRLUISIntentService(routerInfo, AZRLUISProxy);
            luisIntentService.createIntentAsync(this.responseCallback);
            luisIntentService.createPrebuiltIntentAsync(this.responseCallback);
            luisIntentService.getIntentAsync(this.responseCallback);
            luisIntentService.getAllIntentsAsync(this.responseCallback);
            luisIntentService.renameIntentAsync(this.responseCallback);
            luisIntentService.deleteIntentAsync(this.responseCallback);
            
        };

        this.prepareLUISIntentService();
        
    }
        
}

module.exports = AZRLUISIntentRouter;