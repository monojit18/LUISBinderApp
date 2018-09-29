/*jshint esversion: 6 */

const AZRLUISBaseService = require("./AZRLUISBaseService");
const AZRConstants = require("../commons/AZRConstants");
const Utils = require("../commons/Utils");

class AZRLUISRoleService extends AZRLUISBaseService
{
        
    constructor(routerInfo, azureLUISProxy)
    {
        
        super(routerInfo, azureLUISProxy);
        
        const _self = this;        
        this.routerInfo = routerInfo;
        this.azureLUISProxy = azureLUISProxy;

        this.performGetEntityRoleAsync = function(luisBinderProxy,
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

            let roleIdString = paramsDictionary.roleId;
            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
            
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.getEntityRoleAsync(appConfigInfo, entityIdString,
                                                roleIdString,
                                                (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performCreateEntityRoleAsync = function(luisBinderProxy,
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
            luisBinderProxy.createEntityRoleAsync(appConfigInfo, entityIdString,
                                                    request.body,
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performUpdateEntityRoleAsync = function(luisBinderProxy,
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

            let roleIdString = paramsDictionary.roleId;
            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.updateEntityRoleAsync(appConfigInfo, entityIdString,
                                                    roleIdString, request.body,
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

        this.performDeleteEntityRoleAsync = function(luisBinderProxy,
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

            let roleIdString = paramsDictionary.roleId;
            if (Utils.isNullOrEmptyString(roleIdString) === true)
            {

                _self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }
                        
            appConfigInfo.entityOption = entityOption;
            luisBinderProxy.deleteEntityRoleAsync(appConfigInfo, entityIdString, 
                                                    roleIdString,                                               
                                                    (responseBody, error) =>
            {

                responseCallback(response, responseBody, error);
                
            });

        };

    }

    getEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.get("/:versionId/entities/:entityId/roles/:roleId",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performGetEntityRoleAsync(luisBinderProxy,
                                            luisBinderProxy.entityOptions.KEntityRole,
                                            request, response, responseCallback);
            
        });
    }

    createEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/roles/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KEntityRoles,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    updateEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/:entityId/roles/:roleId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    deleteEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/:entityId/roles/:roleId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    createCompositeEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/composite/roles/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KCompositeEntityRoles,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    updateCompositeEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/:entityId/composite/roles/:roleId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KCompositeEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    deleteCompositeEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/:entityId/composite/roles/:roleId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KCompositeEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    createListEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/list/roles/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KListEntityRoles,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    updateListEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/:entityId/list/roles/:roleId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KListEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    deleteListEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/:entityId/list/roles/:roleId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KListEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    createHierarchialEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/hierarchial/roles/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KHierarchialEntityRoles,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    updateHierarchialEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.post("/:versionId/entities/:entityId/hierarchial/roles/:roleId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KHierarchialEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    deleteHierarchialEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.delete("/:versionId/entities/:entityId/hierarchial/roles/:roleId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KHierarchialEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    createRegExEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/regex/roles/create",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performCreateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KRegExEntityRoles,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    updateRegExEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/regex/roles/:roleId/update",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performUpdateEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KRegExEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }

    deleteRegExEntityRoleAsync(responseCallback)
    {

        const self = this;
        this.routerInfo.put("/:versionId/entities/:entityId/regex/roles/:roleId/delete",
                            (request, response) =>
        {

            if ((request === null) || (request === undefined))
            {

                self.processArgumentNullErrorResponse(response, responseCallback);
                return;

            }

            let luisBinderProxy = self.pepareLUISClient(request);
            self.performDeleteEntityRoleAsync(luisBinderProxy,
                                                luisBinderProxy.entityOptions
                                                                .KRegExEntityRole,
                                                                request, response,
                                                                responseCallback);
            
        });
    }
    
}

module.exports = AZRLUISRoleService;
