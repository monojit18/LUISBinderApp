## AZRLUISServer
*A set of REST services for Azure LUIS APIs.These Binder APIs can be called from both Mobile and Web applications using the exposed endpoints.
Dockerfile is included which would help containerize the service and also can be used seamlessly with Azure Container Registry or Docker Cloud or running locally. This would help in local testing and then hosting in Azure as Web API (or any other hosting services)
No need to send API subscription details as part of the request (although that option is open); these secured information can be in Azure Web API layer and service can read from process.env dictionary
Server host address is kept at 0.0.0.0 - so that it can be accesses from containerized hosting solutions like Docker Swarm*

API Endpoints:
## Default

### URL - GET
*https://<host_server_details>*

## Entity APIs

### URL - GET
*https://<host_server_details>/luis/:versionId/entities/:entityId*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/create*

### body

    {
        "name": "DayOfWeek"
    }

### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/update*

### body -

    {
        "name": "DayOfWeek"
    }

### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/composite/create*

### body

    {
        "name": "Reservation",
        "children": [ "Location::To", "datetime" ]  
    }

### URL - POST
*https://<host_server_details>/luis/:versionId/entities/composite/:entityId/update*

### body

    {
       "name": "Reservation",
       "children": [ "Location::To" ]
    }

### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/composite/:entityId/delete*

## URL - PUT
*https://<host_server_details>/luis/:versionId/entities/list/create*

### body

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

### URL - POST
*https://<host_server_details>/luis/:versionId/entities/list/:entityId/update*

### body

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

### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/list/:entityId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/hierarchial/create*

### body

    {
      "name" : "To"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/hierarchial/:entityId/update*

### body

    {
      "name" : "Source"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/hierarchial/:entityId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/sublists/create*

### body

    {
      "canonicalForm": "BankName",
      "list": [
        "HSBC",
        "CitiBank"
      ]
    }
  
### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/sublists/create*

### body

    {
      "canonicalForm": "BankName",
      "list": [
        "HSBC",
        "CitiBank"
      ]
    }
  
### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/create*

### body

    {
      "name" : "datetime"
    }
  
### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/create*

### body

    {
      "name" : "datetime"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/:childEntityId/update*

### body

    {
      "name" : "datetime"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/:childEntityId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/create*

### body

    {
      "name" : "To"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/:childEntityId/update*

### body

    {
      "name" : "Source"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/:childEntityId/delete*

## Intent APIs

### URL - GET
*https://<host_server_details>/luis/:versionId/intents/:intentId*

### URL - PUT
*https://<host_server_details>/luis/:versionId/intents/create*

### body

    {
      "name" : "intent1"
    }
  
### URL - PUT
*https://<host_server_details>/luis/:versionId/prebuiltIntents/create*

### body

    {
      "domainName": "Camera",
      "modelName": "CapturePhoto"
    }
  
## Utterances APIs

### URL - GET
*https://<host_server_details>/luis/:versionId/patterns*

### URL - GET
*https://<host_server_details>/luis/:versionId/intents/:intentId/patterns*

### URL - GET
*https://<host_server_details>/luis/:versionId/train*

### URL - GET
*https://<host_server_details>/luis/:versionId/examples*

### URL - PUT
*https://<host_server_details>/luis/:versionId/labels/create*

### body

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
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/labels/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/patterns/create*

### body

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
  
### URL - POST
*https://<host_server_details>/luis/:versionId/patterns/update*

### body

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
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/patterns/delete*

### URL - POST
*https://<host_server_details>/luis/:versionId/train*

### body

    {
        "statusId": 9,
        "status": "Queued"
    }
    OR

    {
        "statusId": 2,
        "status": "UpToDate"
    }
  
## Role APIs

### URL - GET
*https://<host_server_details>/luis/:versionId/entities/:entityId/roles/:roleId*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/roles/create*

### body

    {
        "name": "sample role"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/roles/update*

### body

    {
        "name": "new role name"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/roles/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/roles/create*

### body

    {
        "name": "sample role"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/roles/:roleId/update*

### body

    {
        "name": "new role name"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/composite/roles/:roleId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/list/roles/create*

### body

    {
        "name": "sample role"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/list/roles/:roleId/update*

### body

    {
        "name": "new role name"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/list/roles/:roleId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/roles/create*

### body

    {
        "name": "sample role"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/roles/:roleId/update*

### body

    {
        "name": "new role name"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/roles/:roleId/delete*

### URL - PUT
*https://<host_server_details>/luis/:versionId/entities/:entityId/regex/roles/create*

### body

    {
        "name": "sample role"
    }
  
### URL - POST
*https://<host_server_details>/luis/:versionId/entities/:entityId/regex/roles/:roleId/update*

### body

    {
         "name": "new role name"
    }
  
### URL - DELETE
*https://<host_server_details>/luis/:versionId/entities/:entityId/regex/roles/:roleId/delete*

## Patterns APIs

### URL - PUT
*https://<host_server_details>/luis/:versionId/patterns/create*

### body

    [
        {
            "pattern": "Who's reporting to {Entity_NEW}?",
            "intent": "Intent_NEW"
        }
    ]
