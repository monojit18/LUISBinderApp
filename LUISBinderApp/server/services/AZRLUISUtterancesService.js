/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISUtterancesService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

        this.extractLimits = function()
        {

            let skipLimitString = "";
            let takeLimitString = "";

            let queryDictionary = request.query;
            if (Utils.isValidNonEmptyDictionary(queryDictionary) === true)
            {

                skipLimitString = queryDictionary.skip;
                takeLimitString = queryDictionary.take;

            }

            let limitInfo = {};
            limitInfo.skipLimitString = skipLimitString;
            limitInfo.takeLimitString = takeLimitString;
            return limitInfo;
            
        };

    }

    getTrainStatusAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/train",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            luisBinderProxy.getTrainStatusAsync(appConfigInfo,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    reviewExamplesAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/examples",
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

            let luisBinderProxy = self.pepareLUISClient(request);
            luisBinderProxy.reviewExamplesAsync(appConfigInfo, limitInfo
                                                                .skipLimitString,
                                                                limitInfo
                                                                .takeLimitString,
                                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
        
    }
    
    addLabelsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/examples",
                            (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            luisBinderProxy.addLabelsAsync(appConfigInfo, request.body,
                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
    }

    deleteLabelsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/examples",
                                (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            luisBinderProxy.addLabelsAsync(appConfigInfo, request.body,
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

            let appConfigInfo = self.prepareAppconfig(request, response,
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            luisBinderProxy.trainApplicationAsync(appConfigInfo,
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });        
    }
    
}

module.exports = AZRLUISUtterancesService;
