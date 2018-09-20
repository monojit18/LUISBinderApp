/*jshint esversion: 6 */

const AZRConstants = require("../commons/AZRConstants");

class AZRLUISBaseRouter
{
    
    constructor()
    {
        
        const self = this;
        this.responseCallback = function(response, result, error)
        {

            if (error != null)
            {

                self.processErrorResponse(error, response);
                return;

            }

            self.processSuccessResponse(response, result);

        };
        
        this.processErrorResponse = function(error, response)
        {
            
            response.status = AZRConstants.HttpStatusCodes.KBadRequest;
            response.send({"error" : error});
            
        };
        
        this.processSuccessResponse = function(response, result)
        {
            
            response.status = AZRConstants.HttpStatusCodes.KSuccess;
            response.send({"result" : result});
            
        };
        
        
    }
    
}

module.exports = AZRLUISBaseRouter;