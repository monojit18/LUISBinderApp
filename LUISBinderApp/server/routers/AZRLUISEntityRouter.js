/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISEntityService = require("../services/AZRLUISEntityService");

class AZRLUISEntityRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISEntityService = function()
        {
            
            let luisEntityService = new AZRLUISEntityService(routerInfo, AZRLUISProxy);
            luisEntityService.createEntityAsync(this.responseCallback);
            luisEntityService.getEntityAsync(this.responseCallback);
            luisEntityService.updateEntityAsync(this.responseCallback);
            luisEntityService.deleteEntityAsync(this.responseCallback);
            
            
        };

        this.prepareLUISEntityService();
        
    }
        
}

module.exports = AZRLUISEntityRouter;