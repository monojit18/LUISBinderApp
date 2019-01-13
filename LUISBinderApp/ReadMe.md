## AZRLUISServer
*A set of REST services for Azure LUIS APIs.These Binder APIs can be called from both Mobile and Web applications using the exposed endpoints.
Dockerfile is included which would help containerize the service and also can be used seamlessly with Azure Container Registry or Docker Cloud or running locally. This would help in local testing and then hosting in Azure as Web API (or any other hosting services)
No need to send API subscription details as part of the request (although that option is open); these secured information can be in Azure Web API layer and service can read from process.env dictionary
Server host address is kept at 0.0.0.0 - so that it can be accesses from containerized hosting solutions like Docker Swarm*

API Endpoints:
## Default

URL - https://<host_server_details>

GET request

## Entity APIs

URL - https://<host_server_details>/luis/:versionId/entities/:entityId

GET request

URL - https://<host_server_details>/luis/:versionId/entities/create

PUT request body -

 {

     "name": "DayOfWeek"

 }

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/update

POST request body -

 {

     "name": "DayOfWeek"

 }

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/delete

DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/composite/create

PUT request body

 {

    "name": "Reservation",
    "children": [ "Location::To", "datetime" ]
    
}

URL - https://<host_server_details>/luis/:versionId/entities/composite/:entityId/update
POST request body

 {
    "name": "Reservation",
    "children": [ "Location::To" ]
    
}

URL - https://<host_server_details>/luis/:versionId/entities/composite/:entityId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/list/create
PUT request body

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

URL - https://<host_server_details>/luis/:versionId/entities/list/:entityId/update
POST request body

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

URL - https://<host_server_details>/luis/:versionId/entities/list/:entityId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/hierarchial/create
PUT request body

   {
      "name" : "To"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/hierarchial/:entityId/update
POST request body
   {
      "name" : "Source"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/hierarchial/:entityId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/sublists/create
PUT request body

   {
      "canonicalForm": "BankName",
      "list": [
        "HSBC",
        "CitiBank"
      ]
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/sublists/create
PUT request body
   {
      "canonicalForm": "BankName",
      "list": [
        "HSBC",
        "CitiBank"
      ]
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/create
PUT request body
   {
      "name" : "datetime"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/create
PUT request body
   {
      "name" : "datetime"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/:childEntityId/update
POST request body
   {
      "name" : "datetime"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/:childEntityId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/create
PUT request body

   {
      "name" : "To"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/:childEntityId/update
POST request body
   {
      "name" : "Source"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/:childEntityId/delete
DELETE request

## Intent APIs

URL - https://<host_server_details>/luis/:versionId/intents/:intentId
GET request

URL - https://<host_server_details>/luis/:versionId/intents/create
PUT request body

   {
      "name" : "intent1"
   }
  
URL - https://<host_server_details>/luis/:versionId/prebuiltIntents/create
PUT request body
   {
      "domainName": "Camera",
      "modelName": "CapturePhoto"
   }
  
## Utterances APIs

URL - https://<host_server_details>/luis/:versionId/patterns
GET request

URL - https://<host_server_details>/luis/:versionId/intents/:intentId/patterns
GET request

URL - https://<host_server_details>/luis/:versionId/train
GET request

URL - https://<host_server_details>/luis/:versionId/examples
GET request

URL - https://<host_server_details>/luis/:versionId/labels/create
PUT request body

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
  
URL - https://<host_server_details>/luis/:versionId/labels/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/patterns/create
PUT request body

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
  
URL - https://<host_server_details>/luis/:versionId/patterns/update
POST request body
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
  
URL - https://<host_server_details>/luis/:versionId/patterns/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/train
POST request body

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

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/roles/:roleId
GET request-

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/roles/create
PUT request body

   {
        "name": "sample role"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/roles/update
POST request body
   {
        "name": "new role name"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/roles/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/roles/create
PUT request body-

   {
        "name": "sample role"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/roles/:roleId/update
POST request body
   {
        "name": "new role name"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/composite/roles/:roleId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/list/roles/create
PUT request body

   {
        "name": "sample role"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/list/roles/:roleId/update
POST request body
   {
        "name": "new role name"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/list/roles/:roleId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/roles/create
PUT request body

   {
        "name": "sample role"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/roles/:roleId/update
POST request body
   {
        "name": "new role name"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/hierarchial/roles/:roleId/delete
DELETE request

URL - https://<host_server_details>/luis/:versionId/entities/:entityId/regex/roles/create
PUT request body

   {
        "name": "sample role"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/regex/roles/:roleId/update
POST request body
   {
        "name": "new role name"
   }
  
URL - https://<host_server_details>/luis/:versionId/entities/:entityId/regex/roles/:roleId/delete
DELETE request

## Patterns APIs

URL - https://<host_server_details>/luis/:versionId/patterns/create
PUT request body
    [
        {
            "pattern": "Who's reporting to {Entity_NEW}?",
            "intent": "Intent_NEW"
        }
    ]
