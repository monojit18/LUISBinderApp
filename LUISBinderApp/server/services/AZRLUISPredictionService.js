/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
const AZRConstants = require("../commons/AZRConstants");
// const Utils = require("../commons/Utils");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISPredictionService extends AZRLUISBaseService
{

    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

        this.prepareAppconfig = (request, response, responseCallback) =>
        {

            if ((request === null) || (request === undefined))
                return null;

            let appIdString = request.get(AZRConstants.LUISHeaders.KAppId);
            if (Utils.isNullOrEmptyString(appIdString) === true)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let appConfigInfo = {};
            appConfigInfo.appIdString = appIdString;
            appConfigInfo.queryDictionary = request.query;
            return appConfigInfo;
            
        };

        this.performGetPredictionsAsync = (luisBinderProxy, request,
                                          response, responseCallback) =>
        {

            let appConfigInfo = self.prepareAppconfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            luisBinderProxy.getPredictionsAsync(appConfigInfo, request.body,                                               
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };        
    }

    getPredictionsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/predictions", (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            let luisBinderProxy = self.prepareLUISClient(request, AZRConstants
                                                                    .LUISHeaders
                                                                    .KSubscriptionKey);
            self.performGetPredictionsAsync(luisBinderProxy,
                                            request, response,
                                            responseCallback);
            
        });


    }
    
}

module.exports = AZRLUISPredictionService;
