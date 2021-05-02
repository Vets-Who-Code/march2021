# Day 1
## Portfolios 
- used trackthis.link to view many examples of luxury websites that use black and white themes
- luxury websites use sans-serif fonts
- portfolios should have a flow to them or a common theme
## APIs
- API means application programming interface
-  that defines interactions between multiple software applications or mixed hardware-software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.
### REST 
- REST API is the most popular version 
- REST APIs communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource. For example, a REST API would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. All HTTP methods can be used in API calls. A well-designed REST API is similar to a website running in a web browser with built-in HTTP functionality.
### GraphQL
- data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data
- provides an alternative to REST
- offers tools for complex queries and a less-is-more approach to fetch calls
- GraphQL have schemas and database like behaviors
- GraphQL behaves in a geospacial manner
- GraphQL is about asking different objects for the value of a specific field. The advantage here is that GraphQL always knows exactly what information you need and returns only the data you want.
### SOAP
- SOAP is more complex and older. 
- Complexity  lends itself to security, however SOAP isnt used as much in recent times.
- SOAP only allows XML, which is not nearly as straightforward to create.
## Resources 
- https://medium.com/@etiennerouzeaud/a-simple-crud-application-with-javascript-ebc82f688c59
- https://blog.jeremylikness.com/blog/build-a-spa-site-with-vanillajs/
- trackthis.link

# Day 2
## SOAP
- Simple Objects Access Protocol is web communication protocol designed for Microsoft
- Here is an example of SOAP

```
<html>
<head>
    <title>SOAP JavaScript Client Test</title>
    <script type="text/javascript">
        function soap() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', 'https://somesoapurl.com/', true);
            // build SOAP request
            var sr =
                '<?xml version="1.0" encoding="utf-8"?>' +
                '<soapenv:Envelope ' + 
                    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
                    'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
                    'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
                    'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
                    '<soapenv:Body>' +
                        '<api:some_api_call soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
                            '<username xsi:type="xsd:string">login_username</username>' +
                            '<password xsi:type="xsd:string">password</password>' +
                        '</api:some_api_call>' +
                    '</soapenv:Body>' +
                '</soapenv:Envelope>';
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        alert(xmlhttp.responseText);
                        // alert('done. use firebug/console to see network response');
                    }
                }
            }
            // Send the POST request
            xmlhttp.setRequestHeader('Content-Type', 'text/xml');
            xmlhttp.send(sr);
            // send request
            // ...
        }
    </script>
</head>
<body>
    <form name="Demo" action="" method="post">
        <div>
            <input type="button" value="Soap" onclick="soap();" />
        </div>
    </form>
</body>
</html> <!-- typo -->

```
- The primary reason is for using SOAP is for Stateful operations
- A stateful operation is one that the outcome depends on any state of the web app that might change the execution
- An example of a stateful operation is reduce(). It would pass the state from a previous element to the next
- reduce() is like SOAP because of how it behaves. 
- SOAP also comes into play in regards to an API's formal contract
- An API contract is a common phrase to describe how API services are consumed, and depending on the on-boarding process, an API provider and consumer can enter into a contract for services around a set of resources, in a self-service way
- So if there is a a set in stone method for the API consumption it would be called 'Formal'
- So more secure, stateful API's that use XML are SOAP
- not generally used for public APIs
- Possible contract statuses are :
UNINITIALIZED	
First creation status before any contract information has been set
INACTIVE	
Created but not activated
OPEN	
Open, missing signatures
CLOSED	
All participants have closed
DELETED	
Deleted without activation
TERMINATED	
Opened and then terminated by user
REJECTED	
Opened and then rejected by a signing participant
CANCELLED	
Closed contract cancelled by all signing participants
- Its more inline with the style of the API, not the API itself. Older state based apps and interfaces
- SIPRnet would be a great example. The infromation is accessible by the state on the other. 
- There are stateless operations, such as filter(), map(), and flatMap(), which do not keep data around (do not maintain state) while moving from processing from one stream element to the next. And there are stateful operations, such as distinct(), limit(), sorted(), reduce(), and collect(), which may pass the state from previously processed elements to the processing of the next element.
Stateless operations usually do not pose a problem when switching from a sequential stream to a parallel one. Each element is processed independently and the stream can be broken into any number of sub-streams for independent processing.
With stateful operations, the situation is different. To start with, using them for an infinite stream may never finish processing. Also, while discussing the reduce() and collect() stateful operations, we have demonstrated how switching to a parallel stream can produce a different result if the initial value (or identity) is set without parallel processing in mind.
And there are performance considerations too. Stateful operations often require processing all the stream elements in several passes using buffering. For large streams, it may tax JVM resources and slow down, if not completely shut down, the application.
That is why a programmer should not take switching from a sequential to a parallel stream lightly. If stateful operations are involved, the code has to be designed and tested to be able to perform the parallel stream processing without negative effects.
- Sequential is in order while parallel means every operation is running at the same time.
- Stateful apis put the responsibility of control on us. That is what SOAP would do. We want to give that control over to the user.
### Homework
- go through the process of using node and SOAP
- https://www.brcline.com/blog/how-to-perform-soap-requests-with-node-js
- SOAP UI or POSTMAN to test API 
