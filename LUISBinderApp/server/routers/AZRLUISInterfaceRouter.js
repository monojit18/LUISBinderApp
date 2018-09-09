/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISUtterancesService = require("../services/AZRLUISUtterancesService");
const AZRLUISEntityService = require("../services/AZRLUISEntityService");

class AZRLUISInterfaceRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISUtterancesService = function()
        {
            
            let luisInterfaceService = new AZRLUISUtterancesService(routerInfo,
                                                                    AZRLUISProxy);
            luisInterfaceService.getPatternsAsync(this.responseCallback);
            luisInterfaceService.getIntentPatternsAsync(this.responseCallback);
            luisInterfaceService.getTrainStatusAsync(this.responseCallback);
            luisInterfaceService.reviewExamplesAsync(this.responseCallback);            
            luisInterfaceService.addLabelsAsync(this.responseCallback);
            luisInterfaceService.deleteLabelsAsync(this.responseCallback);
            luisInterfaceService.addPatternsAsync(this.responseCallback);
            luisInterfaceService.updatePatternsAsync(this.responseCallback);
            luisInterfaceService.deletePatternsAsync(this.responseCallback);
            luisInterfaceService.trainApplicationAsync(this.responseCallback);
            
        };

        this.prepareLUISEntityService = function()
        {
            
            let luisInterfaceService = new AZRLUISEntityService(routerInfo, AZRLUISProxy);
            luisInterfaceService.createEntityAsync(this.responseCallback);
            luisInterfaceService.getEntityAsync(this.responseCallback);
            luisInterfaceService.updateEntityAsync(this.responseCallback);
            luisInterfaceService.deleteEntityAsync(this.responseCallback);
            
            
        };
        
        this.prepareLUISUtterancesService();
        this.prepareLUISEntityService();
        
    }
        
}

module.exports = AZRLUISInterfaceRouter;