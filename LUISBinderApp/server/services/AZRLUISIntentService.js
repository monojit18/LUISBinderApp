/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
const AZRConstants = require("../commons/AZRConstants");
const Utils = require("../commons/utility_helper");

class AZRLUISIntentService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

        this.performGetIntentAsync = function(luisBinderProxy,
                                                entityOption, request,
                                                response, responseCallback)
        {

            let appConfigInfo = _self.prepareAppconfig(request, response);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            let paramsDictionary = request.params;
            if (Utils.isValidNonEmptyDictionary(paramsDictionary) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            let intentIdString = paramsDictionary.intentId;
            if (Utils.isNullOrEmptyString(intentIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.getIntentAsync(appConfigInfo, intentIdString,
                                            (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performCreateIntentAsync = function(luisBinderProxy,
                                                    entityOption, request,
                                                    response, responseCallback)
        {

            let appConfigInfo = _self.prepareAppconfig(request, response);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.createIntentAsync(appConfigInfo, request.body,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performUpdateIntentAsync = function(luisBinderProxy,
                                                        entityOption, request,
                                                        response, responseCallback)
        {

            let appConfigInfo = _self.prepareAppconfig(request, response);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let paramsDictionary = request.params;
            if (Utils.isValidNonEmptyDictionary(paramsDictionary) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            let intentIdString = paramsDictionary.intentId;
            if (Utils.isNullOrEmptyString(intentIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.updateIntentAsync(appConfigInfo, intentIdString,
                                                request.body,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performDeleteIntentAsync = function(luisBinderProxy,
                                                    entityOption, request,
                                                    response, responseCallback)
        {

            let appConfigInfo = _self.prepareAppconfig(request, response);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let paramsDictionary = request.params;
            if (Utils.isValidNonEmptyDictionary(paramsDictionary) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            let intentIdString = paramsDictionary.intentId;
            if (Utils.isNullOrEmptyString(intentIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.deleteIntentAsync(appConfigInfo, intentIdString,                                               
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

    }

    getIntentAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/intents/:intentId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performGetIntentAsync(luisBinderProxy,
                                        luisBinderProxy.entityOptions
                                                        .KIntent,
                                                        request, response,
                                                        responseCallback);
            
        });
    }

    createIntentAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/intents/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateIntentAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KIntents,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    createPrebuiltIntentAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/prebuiltIntents/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateIntentAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KPrebuiltIntents,
                                                            request, response,
                                                            responseCallback);            
        });
    }
    
}

module.exports = AZRLUISIntentService;
