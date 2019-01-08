/*jshint esversion: 6 */

const AZRConstants = require("../commons/AZRConstants");
const Utils = require("../commons/Utils");
// const Utils = require("../../node_modules/utility_helper");
const URL = require("../../node_modules/url");

class AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        const _self = this;

        this.processLocationResponse = (response, responseBody,
                                        responseCallback) =>
        {

            if (Utils.isValidNonEmptyDictionary(responseBody) == false)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }

            let idString = "";
            if (responseBody.statusCode === 201)
                idString = _self.extractLocation(response, responseBody,
                                                    responseCallback);
            responseBody.Id = idString;
            return responseBody;

        };

        this.prepareLUISClient = function(request, luisEndpointKeyString)
        {
 
            if ((request === null) || (request === undefined))
                return null;

            let endpointKeyString = "";
            if (Utils.isNullOrEmptyString(luisEndpointKeyString) === false)
                endpointKeyString = luisEndpointKeyString;
            else
                endpointKeyString = AZRConstants.LUISHeaders.KSubscriptionKey;

            let subscriptionKeyString = process.env[endpointKeyString];
            if (Utils.isNullOrEmptyString(subscriptionKeyString) == true)
            {

                subscriptionKeyString = request.get(AZRConstants
                                                    .LUISEnvironments
                                                    .KAccountKey);
                if (Utils.isNullOrEmptyString(subscriptionKeyString) == true)                
                    return null;

            }

            let regionString = process.env[AZRConstants
                                            .LUISHeaders
                                            .KRegionKey];
            if (Utils.isNullOrEmptyString(regionString) == true)
            {

                regionString = request.get(AZRConstants.LUISEnvironments
                                                        .KRegionKey);
                if (Utils.isNullOrEmptyString(regionString) == true)                
                    return null;

            }
            
            let luisClient = new _self.azureLUISProxy(subscriptionKeyString,
                                                        regionString);
            return luisClient;
            
        };

        this.prepareAppConfig = (request, response, responseCallback) =>
        {

            if ((request === null) || (request === undefined))
                return null;

            let appIdString = process.env[AZRConstants.LUISHeaders.KAppId];
            if (Utils.isNullOrEmptyString(appIdString) === true)            
                appIdString = request.get(AZRConstants.LUISHeaders.KAppId);
            
            if (Utils.isNullOrEmptyString(appIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let versionIdString = request.params.versionId;
            if (Utils.isNullOrEmptyString(versionIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let appConfigInfo = {};
            appConfigInfo.appIdString = appIdString;
            appConfigInfo.versionIdString = versionIdString;
            return appConfigInfo;
            
        };

        this.extractLocation = (response, responseBody,
                                responseCallback) =>
        {

            if (Utils.isValidNonEmptyDictionary(responseBody) == false)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }
            
            let luisHeaders = responseBody.headers;
            if (Utils.isValidNonEmptyDictionary(luisHeaders) == false)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }
            
            let locationString = luisHeaders.location;
            if (Utils.isNullOrEmptyString(locationString) == true)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }
            
            let parsedURL = URL.parse(locationString, false);
            if (Utils.isValidNonEmptyDictionary(parsedURL) == false)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }
            
            let pathNameString = parsedURL.pathname;
            if (Utils.isNullOrEmptyString(pathNameString) == true)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }
            
            let tokensArray = pathNameString.split("/");
            if (Utils.isValidNonEmptyArray(tokensArray) == false)
            {

                _self.processSuccessResponse(response, responseBody,
                                                responseCallback);
                return null;

            }
            
            let idString = tokensArray[tokensArray.length - 1];                
            return idString;

        };

        this.extractLimits = (queryDictionary) =>
        {

            let skipLimitString = "";
            let takeLimitString = "";

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
        
        this.processArgumentNullErrorResponse = (response, responseCallback) =>
        {
            
            let evalError = new EvalError(AZRConstants.ExceptionMessages.KArgumentNullMessage);
            responseCallback(response, null, evalError);
            
        };
        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

    }
}

module.exports = AZRLUISBaseService;