# AZRLUISServer
1. *A set of REST services for Azure LUIS APIs.These Binder APIs can be called from both Mobile and Web applications using the exposed endpoints.*
2. *Dockerfile is included which would help containerize the service and also can be used seamlessly with Azure Container Registry or Docker Cloud or running locally. This would help in local testing and then hosting in Azure as Web API (or any other hosting services)*
3. *No need to send API subscription details as part of the request (although that option is open); these secured information can be in Azure Web API layer and service can read from process.env dictionary*
4. *Server host address is kept at 0.0.0.0 - so that it can be accesses from containerized hosting solutions like Docker Swarm*

# API Endpoints:
  
  ## Default
  
   **URL** - https://<host_server_details> <br/>
   **GET request-**
  
  ## APIs
1.  **URL** - https://<host_server_details>/qnamaker/knowledgebases/all<br/>
    **GET request-**
    
2.  **URL** - https://<host_server_details>/qnamaker/knowledgebases/details/:kbId<br/>
    **GET request-**

3.  **URL** - https://<host_server_details>/qnamaker/endpointkeys<br/>
    **GET request-**

4.  **URL** - https://<host_server_details>/qnamaker/operations/:operationId<br/>
    **GET request-**

5.  **URL** - https://<host_server_details>/qnamaker/knowledgebase/download/:kbId/:environmentId<br/>
    **GET request-**

6.  **URL** - https://<host_server_details>/qnamaker/alterations<br/>
    **GET request-**

7.  **URL** - https://<host_server_details>/qnamaker/knowledgebase/create<br/>
    **PUT request body-**

    ```
      {
        "name": "QnA Maker New FAQ - 1109",
        "qnaList": [
          {
            "id": 0,
            "answer": "Feeling good!!!",
            "source": "",
            "questions": [
              "Sports?"
            ],
            "metadata": []
          }
        ]
      }

    ```
    
   8. **URL** - https://<host_server_details>/qnamaker/knowledgebase/createandpublish<br/>
      **PUT request body-**
    
    ```
      {
        "name": "QnA Maker New FAQ - 1708(2)",
        "qnaList": [
          {
            "id": 0,
            "answer": "Feeling good!!!",
            "source": "",
            "questions": [
              "Any Venetarian options you have?"
            ],
            "metadata": []
          }
        ]
      }
    
    ```
    
 9. **URL** - https://<host_server_details>/qnamaker/knowledgebase/:kbId/publish<br/>
    **PUT request-**
  
    
10. **URL** - https://<host_server_details>/qnamaker/knowledgebase/:kbId/update<br/>
    **POST request body-**
    
    ```
      {
          "update":
          {
            "questions":
            [
              "Do you have any vegetarian options today?"
            ]
          }
      }
    
    ```  
    
11. **URL** - https://<host_server_details>/qnamaker/endpointkeys/:keyType/refresh<br/>
    **POST request-**
    
    
12. **URL** - https://<host_server_details>/qnamaker/knowledgebases/:kbId/replace<br/>
    **POST request body-**
    
    ```
      {
        "qnAList": [
          {
            "id": 0,
            "answer": "string",
            "source": "string",
            "questions": [
              "string"
            ],
            "metadata": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          }
        ]
      }
    
    ``` 
    
13. **URL** - https://<host_server_details>/qnamaker/alterations/replace<br/>
    **POST request body-**
    
    ```
      {
        "wordAlterations": [
          {
            "alterations": [
              "qnamaker",
              "qna maker"
            ]
          },
          {
            "alterations": [
              "botframework",
              "bot framework"
            ]
          },
          {
            "alterations": [
              "webchat",
              "web chat"
            ]
          }
        ]
      }
    
    ``` 
    
14. **URL** - https://<host_server_details>/qnamaker/knowledgebases/delete/:kbId<br/>
    **DELETE request-**
    

15. **URL** - https://<host_server_details>/qnamaker/knowledgebases/all/delete<br/>
    **DELETE request-**
    
    
