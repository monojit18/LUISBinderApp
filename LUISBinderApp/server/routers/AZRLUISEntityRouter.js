/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISEntityService = require("../services/AZRLUISEntityService");

class AZRLUISEntityRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISEntityService = () =>
        {
            
            let luisEntityService = new AZRLUISEntityService(routerInfo, AZRLUISProxy);
            luisEntityService.createEntityAsync(this.responseCallback);
            luisEntityService.createListEntityAsync(this.responseCallback);
            luisEntityService.createCompositeEntityAsync(this.responseCallback);
            luisEntityService.createHierarchialEntityAsync(this.responseCallback);
            luisEntityService.getEntityAsync(this.responseCallback);
            luisEntityService.getAllEntitiesAsync(this.responseCallback);
            luisEntityService.getHierarchialEntityAsync(this.responseCallback);
            luisEntityService.getAllHierarchialEntitiesAsync(this.responseCallback);
            luisEntityService.renameEntityAsync(this.responseCallback);
            luisEntityService.deleteEntityAsync(this.responseCallback);
            
            
        };

        this.prepareLUISEntityService();
        
    }
        
}

module.exports = AZRLUISEntityRouter;