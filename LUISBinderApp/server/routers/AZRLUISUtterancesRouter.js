/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISUtterancesService = require("../services/AZRLUISUtterancesService");

class AZRLUISUtterancesRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISUtterancesService = () =>
        {
            
            let luisUtterancesService = new AZRLUISUtterancesService(routerInfo,
                                                                        AZRLUISProxy);
            
            luisUtterancesService.reviewExamplesAsync(this.responseCallback);
            luisUtterancesService.addLabelsAsync(this.responseCallback);
            luisUtterancesService.deleteLabelsAsync(this.responseCallback);

        };

        this.prepareLUISUtterancesService();
        
    }
        
}

module.exports = AZRLUISUtterancesRouter;