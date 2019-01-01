
/*jshint esversion: 6 */

const AZRLUISBaseRouter = require("./AZRLUISBaseRouter");
const AZRLUISPredictionService = require("../services/AZRLUISPredictionService");

class AZRLUISPredictionRouter extends AZRLUISBaseRouter
{
    
    constructor(routerInfo, AZRLUISProxy)
    {
        
        super();
        
        this.prepareLUISPredictionService = () =>
        {
            
            let luisPredictionService = new AZRLUISPredictionService(
                                            routerInfo, AZRLUISProxy);
            luisPredictionService.getPredictionsAsync(this.responseCallback);
            
            
        };

        this.prepareLUISPredictionService();
        
    }
        
}

module.exports = AZRLUISPredictionRouter;