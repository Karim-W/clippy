# Clippy
Getting a feel for small microsevivces implementation with GoLang for the Backend and React for the Frontend and Kubernetes Deployment.
Aiming to eventually have an implementation close the PasteBin [system-desgin-primer](https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md#design-pastebincom-or-bitly) 's example

Clippy is a simple, minimalistic, Web Application to help you share items via your clipboard across all your devices.
```mermaid

graph TD;

USER-->FRONTEND-INDEX;

FRONTEND-INDEX-->Quill-CreateService;

Quill-CreateService-->id1[(Database)];

Gate-ReadService-->id1[(Database)];

Gate-ReadService-->Analytics-Urkle;

Quill-CreateService-->Analytics-Urkle;

FRONTEND-INDEX-->Gate-ReadService;

Analytics-Urkle-->FRONTEND-INDEX;

```
##### Folder Structure :
- Index => User Frontend (Completed)
- Quill => Create Clips Service (Completed)
- Gate => Read Service (Completed)
- Urkle => Analytics module

##### Application Workflows:
- Create a clip
```mermaid
sequenceDiagram  
 User->>Index: Enter clip details   
 Index-->>Quill: Submit Clip Request
 Quill-->>Database: Store Clip Details
 Quill-->>Urkle: Log Entry
 Quill-->>Index: Return clip Id
 Index->>User: Privde Link to view  
```
- Access a clip
```mermaid
sequenceDiagram  
 User->>Index: Enter clip Browse url 
 Index-->>Index: Extract Clip Id from URL
 Index-->>Gate: Submit Clip View Request
 Gate-->>Database: Query Clip Details
 Gate-->>Urkle: Log Read Operation
 Database-->>Gate: Return Clip details
 Gate-->>Index: Return clip details
 Index->>User: Privde with Clip details  
```