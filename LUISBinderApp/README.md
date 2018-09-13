# AZRLUISServer
1. *A set of REST services for Azure LUIS APIs.These Binder APIs can be called from both Mobile and Web applications using the exposed endpoints.*
2. *Dockerfile is included which would help containerize the service and also can be used seamlessly with Azure Container Registry or Docker Cloud or running locally. This would help in local testing and then hosting in Azure as Web API (or any other hosting services)*
3. *No need to send API subscription details as part of the request (although that option is open); these secured information can be in Azure Web API layer and service can read from process.env dictionary*
4. *Server host address is kept at 0.0.0.0 - so that it can be accesses from containerized hosting solutions like Docker Swarm*

# API Endpoints:
  
  ## Default
  
   **URL** - https://<host_server_details> <br/>
   **GET request-**
  
  ## Entity APIs
1.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId<br/>
    **GET request-**

2.  **URL** - https://<host_server_details>/luis/:versionId/entities/create<br/>
    **PUT request body-**

    ```
     {
         "name": "DayOfWeek"
     }

    ```
    
3.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/update<br/>
    **POST request body-**

    ```
     {
         "name": "DayOfWeek"
     }

    ```
    
4.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/delete<br/>
    **DELETE request-**

5.  **URL** - https://<host_server_details>/luis/:versionId/entities/composite/create<br/>
    **PUT request body-**

    ```
     {
        "name": "Reservation",
        "children": [ "Location::To", "datetime" ]
    }

    ```
    
6.  **URL** - https://<host_server_details>/luis/:versionId/entities/composite/:entityId/update<br/>
    **POST request body-**

    ```
     {
        "name": "Reservation",
        "children": [ "Location::To" ]
        
    }
    
    ```
    
7.  **URL** - https://<host_server_details>/luis/:versionId/entities/composite/:entityId/delete<br/>
    **DELETE request-**
    
8.  **URL** - https://<host_server_details>/luis/:versionId/entities/list/create<br/>
    **PUT request body-**

    ```
     {
        "name": "States",
        "sublists": 
        [
          {
            "canonicalForm": "New York",
            "list": [ "NY", "New York" ]
          },
          {
            "canonicalForm": "Washington",
            "list": [ "Washington", "WA" ]
          },
          {
            "canonicalForm": "California",
            "list": [ "California", "CA", "Calif.", "Cal." ]
          }
        ]
     }
    
    ```
    
9.  **URL** - https://<host_server_details>/luis/:versionId/entities/list/:entityId/update<br/>
    **POST request body-**

    ```
     {
        "name": "States",
        "subLists": [
          {
            "canonicalForm": "new york",
            "list": [
              "ny",
              "new york"
            ]
          },
          {
            "canonicalForm": "washington",
            "list": [
              "washington",
              "wa"
            ]
          },
          {
            "canonicalForm": "california",
            "list": [
              "california",
              "ca",
              "calif.",
              "cal."
            ]
          },
          {
            "canonicalForm": "Texas",
            "list": [
              "Texas",
              "TX"
            ]
          }
        ]
     }
    
    ```

10.  **URL** - https://<host_server_details>/luis/:versionId/entities/list/:entityId/delete<br/>
     **DELETE request-**

11.  **URL** - https://<host_server_details>/luis/:versionId/entities/hierarchial/create<br/>
     **PUT request body-**

  ```
     {
        "name" : "To"
     }
    
  ```
    
12.  **URL** - https://<host_server_details>/luis/:versionId/entities/hierarchial/:entityId/update<br/>
     **POST request body-**

  ```
     {
        "name" : "Source"
     }
    
  ```
    
13.  **URL** - https://<host_server_details>/luis/:versionId/entities/hierarchial/:entityId/delete<br/>
     **DELETE request-**

14.  **URL** - https://<host_server_details>/luis/:versionId/entities/sublists/create<br/>
     **PUT request body-**

  ```
     {
        "canonicalForm": "BankName",
        "list": [
          "HSBC",
          "CitiBank"
        ]
     }
    
  ```

15.  **URL** - https://<host_server_details>/luis/:versionId/entities/sublists/create<br/>
     **PUT request body-**

  ```
     {
        "canonicalForm": "BankName",
        "list": [
          "HSBC",
          "CitiBank"
        ]
     }
    
  ```
    
16.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/create<br/>
     **PUT request body-**

  ```
     {
        "name" : "datetime"
     }
    
  ``` 
    
17.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/create<br/>
     **PUT request body-**

  ```
     {
        "name" : "datetime"
     }
    
  ``` 
    
18.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/:childEntityId/update<br/>
     **POST request body-**
     
  ```
     {
        "name" : "datetime"
     }
    
  ``` 
    
19.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/:childEntityId/delete<br/>
     **DELETE request-**

    
20.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/create<br/>
     **PUT request body-**
     
  ```
     {
        "name" : "To"
     }
    
  ```
    
    
21.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/:childEntityId/update<br/>
     **POST request body-**

  ```
     {
        "name" : "Source"
     }
    
  ``` 
    
22.  **URL** - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/:childEntityId/delete<br/>
     **DELETE request-**
    
  ## Intent APIs
  
1. **URL** - https://<host_server_details>/luis/:versionId/intents/:intentId<br/>
   **GET request-**

2. **URL** - https://<host_server_details>/luis/:versionId/intents/create<br/>
   **PUT request body-**

  ```
     {
        "name" : "intent1"
     }
    
  ``` 

3. **URL** - https://<host_server_details>/luis/:versionId/prebuiltIntents/create<br/>
   **PUT request body-**

  ```
     {
        "domainName": "Camera",
        "modelName": "CapturePhoto"
     }
    
  ```

  ## Utterances APIs
  
1.  **URL** - https://<host_server_details>/luis/:versionId/patterns<br/>
    **GET request-**
    
2.  **URL** - https://<host_server_details>/luis/:versionId/intents/:intentId/patterns<br/>
    **GET request-**
    
3.  **URL** - https://<host_server_details>/luis/:versionId/train<br/>
    **GET request-**
    
4.  **URL** - https://<host_server_details>/luis/:versionId/examples<br/>
    **GET request-**
    
5. **URL** - https://<host_server_details>/luis/:versionId/labels/create<br/>
   **PUT request body-**

  ```
    [
      {
        "text": "Book me a flight from Cairo to Redmond next Thursday",
        "intentName": "BookFlight",
        "entityLabels":
        [
          {
            "entityName": "Location::From",
            "startCharIndex": 22,
            "endCharIndex": 26
          },
          {
            "entityName": "Location::To",
            "startCharIndex": 31,
            "endCharIndex": 37
          }
        ]
      },
      {
        "text": "What's the weather like in Seattle?",
        "intentName": "GetWeather",
        "entityLabels":
        [
          {
            "entityName": "Location",
            "startCharIndex": 27,
            "endCharIndex": 33
          }
        ]
      }
    ]
    
  ```
  
6. **URL** - https://<host_server_details>/luis/:versionId/labels/delete<br/>
   **DELETE request-**
   
    
7. **URL** - https://<host_server_details>/luis/:versionId/patterns/create<br/>
   **PUT request body-**

  ```
     [
        {
            "pattern": "Who's reporting to {Name}",
            "intent": "report to name"
        },
        {
            "pattern": "Who's {Name} reporting to?",
            "intent": "name report to"
        }
    ]
    
  ```
    
8. **URL** - https://<host_server_details>/luis/:versionId/patterns/update<br/>
   **POST request body-**

  ```
     [
        {
            "id": "16cfbc93-4065-445f-b06e-00cebdae11c4",
            "pattern": "Who's reporting to {Name}",
            "intent": "new intent"
        },
        {
            "id": "1d026f03-5942-4d0d-9153-1c01301e1429",
            "pattern": "Who's {Name} reporting to?",
            "intent": "new intent"
        }
    ]
    
  ```

9. **URL** - https://<host_server_details>/luis/:versionId/patterns/delete<br/>
   **DELETE request-**
    
10. **URL** - https://<host_server_details>/luis/:versionId/train<br/>
    **POST request body-**

  ```
     {
          "statusId": 9,
          "status": "Queued"
     }
      OR

     {
          "statusId": 2,
          "status": "UpToDate"
     }
    
  ```
  
