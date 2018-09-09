/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISRoleService = require("../services/AZRLUISRoleService");

class AZRLUISRoleRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISRoleService = function()
        {
            
            let luisRoleService = new AZRLUISRoleService(routerInfo, AZRLUISProxy);
            luisRoleService.getEntityRoleAsync(this.responseCallback);
            luisRoleService.createEntityRoleAsync(this.responseCallback);
            luisRoleService.updateEntityRoleAsync(this.responseCallback);
            luisRoleService.deleteEntityRoleAsync(this.responseCallback);
            luisRoleService.createCompositeEntityRoleAsync(this.responseCallback);
            luisRoleService.updateCompositeEntityRoleAsync(this.responseCallback);
            luisRoleService.deleteCompositeEntityRoleAsync(this.responseCallback);
            luisRoleService.createListEntityRoleAsync(this.responseCallback);
            luisRoleService.updateListEntityRoleAsync(this.responseCallback);
            luisRoleService.deleteListEntityRoleAsync(this.responseCallback);
            luisRoleService.updateHierarchialEntityRoleAsync(this.responseCallback);
            luisRoleService.deleteHierarchialEntityRoleAsync(this.responseCallback);
            luisRoleService.createRegExEntityRoleAsync(this.responseCallback);
            luisRoleService.updateRegExEntityRoleAsync(this.responseCallback);
            luisRoleService.deleteRegExEntityRoleAsync(this.responseCallback);
            
        };

        this.prepareLUISRoleService();
        
    }
        
}

module.exports = AZRLUISRoleRouter;