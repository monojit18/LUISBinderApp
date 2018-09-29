/*jshint esversion: 6 */

const AZRConstants = require("../commons/AZRConstants");
const Utils = require("../commons/Utils");

class AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        const _self = this;
        this.pepareLUISClient = function(request)
        {
 
            if ((request === null) || (request === undefined))
                return null;
            
            let subscriptionKeyString = process.env[AZRConstants.LUISEnvironments
                                                    .KAccountKey];
            if (Utils.isNullOrEmptyString(subscriptionKeyString) == true)
            {

                subscriptionKeyString = request.get(AZRConstants.LUISHeaders
                                                    .KSubscriptionKey);
                if (Utils.isNullOrEmptyString(subscriptionKeyString) == true)                
                    return null;

            }

            let regionString = process.env[AZRConstants.LUISEnvironments.KRegionKey];
            if (Utils.isNullOrEmptyString(regionString) == true)
            {

                regionString = request.get(AZRConstants.LUISHeaders.KRegionKey);
                if (Utils.isNullOrEmptyString(regionString) == true)                
                    return null;

            }
            
            let luisClient = new _self.azureLUISProxy(subscriptionKeyString,
                                                        regionString);
            return luisClient;
            
        };

        this.prepareAppconfig = function(request, response)
        {

            if ((request === null) || (request === undefined))
                return null;

            let appIdString = request.get(AZRConstants.LUISHeaders.KAppId);
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
        
        this.processArgumentNullErrorResponse = function(response, responseCallback)
        {
            
            let evalError = new EvalError(AZRConstants.ExceptionMessages.KArgumentNullMessage);
            responseCallback(response, null, evalError);
            
        };
        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

    }
}

module.exports = AZRLUISBaseService;