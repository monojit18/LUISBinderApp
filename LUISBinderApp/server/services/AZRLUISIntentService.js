/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
// const Utils = require("../commons/Utils");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISIntentService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

        this.performGetIntentAsync = (luisBinderProxy,
                                        entityOption, request,
                                        response, responseCallback) =>
        {

            let appConfigInfo = _self.prepareAppConfig(request, response, 
                                                        responseCallback);
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

        this.performGetAllIntentsAsync = (luisBinderProxy,
                                            entityOption, request,
                                            response, responseCallback) =>
        {

            let appConfigInfo = _self.prepareAppConfig(request, response, 
                                                        responseCallback);
            if (Utils.isValidNonEmptyDictionary(appConfigInfo) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let queryDictionary = request.query;
            let limitInfo = _self.extractLimits(queryDictionary);
            
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.getAllIntentsAsync(appConfigInfo,
                                                limitInfo
                                                .skipLimitString,
                                                limitInfo
                                                .takeLimitString,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performCreateIntentAsync = (luisBinderProxy,
                                            entityOption, request,
                                            response, responseCallback) =>
        {

            let appConfigInfo = _self.prepareAppConfig(request, response, 
                                                        responseCallback);
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

        this.performUpdateIntentAsync = (luisBinderProxy,
                                            entityOption, request,
                                            response, responseCallback) =>
        {

            let appConfigInfo = _self.prepareAppConfig(request, response, 
                                                        responseCallback);
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

        this.performDeleteIntentAsync = (luisBinderProxy,
                                            entityOption, request,
                                            response, responseCallback) =>
        {

            let appConfigInfo = _self.prepareAppConfig(request, response, 
                                                        responseCallback);
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
        this.routerInfo.get("/:versionId/intents/:intentId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            self.performGetIntentAsync(luisBinderProxy,
                                        luisBinderProxy.entityOptions
                                                        .KIntent,
                                                        request, response,
                                                        responseCallback);
            
        });
    }

    getAllIntentsAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/intents",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            self.performGetAllIntentsAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KGetIntents,
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

            let luisBinderProxy = self.prepareLUISClient(request);
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

            let luisBinderProxy = self.prepareLUISClient(request);
            self.performCreateIntentAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KPrebuiltIntents,
                                                            request, response,
                                                            responseCallback);            
        });
    }

    renameIntentAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/intents/:intentId/rename",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            self.performUpdateIntentAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KIntent,
                                                            request, response,
                                                            responseCallback);            
        });
    }

    deleteIntentAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/intents/:intentId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.prepareLUISClient(request);
            self.performDeleteIntentAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KIntent,
                                                            request, response,
                                                            responseCallback);            
        });
    }
    
}

module.exports = AZRLUISIntentService;
