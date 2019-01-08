/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
// const Utils = require("../commons/Utils");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISTrainService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

    }

    getTrainStatusAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/train",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppConfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.getTrainStatusAsync(appConfigInfo,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    trainApplicationAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/train",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppConfig(request, response,
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.trainApplicationAsync(appConfigInfo,
                                                    (responseBody, error) =>
            {

                luisBinderProxy.getTrainStatusAsync(appConfigInfo,
                                                (responseBody, error) =>
                {

                    responseCallback(response, responseBody, error);
                    
                });

                // responseCallback(response, responseBody, error);
                
            });
        });  
        
    }    
}

module.exports = AZRLUISTrainService;
