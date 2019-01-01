/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
// const Utils = require("../commons/Utils");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISPatternService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

    }

    getPatternsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/patterns",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let queryDictionary = request.query;
            let limitInfo = self.extractLimits(queryDictionary);
            
            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.getPatternsAsync(appConfigInfo, limitInfo
                                                            .skipLimitString,
                                                            limitInfo
                                                            .takeLimitString,
                                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    getIntentPatternsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/intents/:intentId/patterns",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let intentIdString = request.params.intentId;
            if (Utils.isNullOrEmptyString(intentIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.getIntentPatternsAsync(appConfigInfo, intentIdString,                                            
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    addPatternsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/patterns/create",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.addPatternsAsync(appConfigInfo, request.body,
                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
        
    }

    updatePatternsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/patterns/update",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.updatePatternsAsync(appConfigInfo, request.body,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });        
    }

    deletePatternsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/patterns/delete",
                                (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.deletePatternsAsync(appConfigInfo, request.body,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });        
    }
    
}

module.exports = AZRLUISPatternService;
