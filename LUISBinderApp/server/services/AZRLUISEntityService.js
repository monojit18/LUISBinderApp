/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
const AZRConstants = require("../commons/AZRConstants");
const Utils = require("../../node_modules/utility_helper");

class AZRLUISEntityService extends AZRLUISBaseService
{

    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

        this.performGetEntityAsync = function(luisBinderProxy,
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
            
            let entityIdString = paramsDictionary.entityId;
            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.getEntityAsync(appConfigInfo, entityIdString,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performCreateEntityAsync = function(luisBinderProxy,
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
            luisBinderProxy.createEntityAsync(appConfigInfo, request.body,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performUpdateEntityAsync = function(luisBinderProxy,
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
            
            let entityIdString = paramsDictionary.entityId;
            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.updateEntityAsync(appConfigInfo, entityIdString,
                                                request.body,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performDeleteEntityAsync = function(luisBinderProxy,
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
            
            let entityIdString = paramsDictionary.entityId;
            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.deleteEntityAsync(appConfigInfo, entityIdString,                                                
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performCreateChildEntityAsync = function(luisBinderProxy,
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
            
            let entityIdString = paramsDictionary.entityId;
            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.createChildEntityAsync(appConfigInfo, entityIdString,
                                                    request.body,
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performUpdateChildEntityAsync = function(luisBinderProxy,
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
            
            let entityIdString = paramsDictionary.entityId;
            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let childIdString = paramsDictionary.childId;
            if (Utils.isNullOrEmptyString(childIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.updateChildEntityAsync(appConfigInfo, entityIdString,
                                                    childIdString, request.body,
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performDeleteChildEntityAsync = function(luisBinderProxy,
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
            
            let entityIdString = paramsDictionary.entityId;
            if (Utils.isNullOrEmptyString(entityIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let childIdString = paramsDictionary.childId;
            if (Utils.isNullOrEmptyString(childIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.deleteChildEntityAsync(appConfigInfo, entityIdString,
                                                    childIdString,
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };
    }

    getEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/entities/:entityId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performGetEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions.KEntity,
                                            request, response, responseCallback);
            
        });
    }

    createEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions.KEntities,
                                            request, response, responseCallback);
            
        });
    }

    updateEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/:entityId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions.KEntity,
                                            request, response,
                                            responseCallback);
            
        });
    }

    deleteEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/:entityId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let paramsDictionary = request.params;
            if (Utils.isValidNonEmptyDictionary(paramsDictionary) === false)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions.KEntity,
                                            request, response,
                                            responseCallback);
            
        });
    }

    createCompositeEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/composite/create",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KCompositeEntities,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    updateCompositeEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/composite/:entityId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KCompositeEntity,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    deleteCompositeEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/composite/:entityId/delete",
                                (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KCompositeEntity,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    createListEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/list/create",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KListEntities,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    updateListEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/list/:entityId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KListEntity,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    deleteListEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/list/:entityId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KListEntity,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    createHierarchialEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/hierarchial/create",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                            .KHierarchialEntities, request,
                                            response, responseCallback);
            
        });
    }

    updateHierarchialEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/hierarchial/:entityId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KHierarchialEntity,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    deleteHierarchialEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/hierarchial/:entityId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions
                                                            .KHierarchialEntity,
                                                            request, response,
                                                            responseCallback);
            
        });
    }

    createSubListEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/sublists",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KSubListEntities,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    createCompositeChildEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/composite/create",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                .KCompositeChildEntities, request,
                                                response, responseCallback);
            
        });
    }

    updateCompositeChildEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/composite/:childEntityId/update",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                .KCompositeChildEntity, request,
                                                response, responseCallback);
            
        });
    }

    deleteCompositeChildEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/composite/:childEntityId/delete",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                .KCompositeChildEntity, request,
                                                response, responseCallback);
            
        });
    }

    createHierarchialChildEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/hierarchial/create",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                .KHierarchialEntities, request,
                                                response, responseCallback);
            
        });
    }

    updateHierarchialChildEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/hierarchial/:childEntityId/update",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                .KHierarchialChildEntity, request,
                                                response, responseCallback);
            
        });
    }

    deleteHierarchialChildEntityAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/hierarchial/:childEntityId/delete",
                            (request, response) =>
        {

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteChildEntityAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                .KHierarchialChildEntity, request,
                                                response, responseCallback);
            
        });
    }
    
}

module.exports = AZRLUISEntityService;
