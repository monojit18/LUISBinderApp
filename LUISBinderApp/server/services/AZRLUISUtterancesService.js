/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
// const Utils = require("../commons/Utils");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISUtterancesService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

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

            let luisBinderProxy = self.prepareLUISClient(request);
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
        this.routerInfo.put("/:versionId/labels/create",
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
        this.routerInfo.delete("/:versionId/labels/delete",
                                (request, response) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            luisBinderProxy.addLabelsAsync(appConfigInfo, request.body,
                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });
        });
        
    }
}

module.exports = AZRLUISUtterancesService;
