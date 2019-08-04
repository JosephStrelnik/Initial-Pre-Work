# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

 When we click on a link to a url in a browser (client) we first prompt a DNS lookup to identify the Ip address to send a request to the server. Within that request, protocol (http for web), subdomain, domain, port, path, query, parameters and fragment are all identified and checked. The server will then send either a 404 error message if the checked subdomains, query etc. do not exist or the server will form and render the requested doc/webpage back to the client/browser to view. Each time the url is requested by the client it will send a new request to the server to ensure that the latest version of the website/doc is requested and rendered.

## From start to finish, how does data reach you to be rendered in the browser?

 Once the server has verified the url requested it will send compile and send the client its HTTP response to be rendered. The browser begins to render the HTML and sends requests for any additional objects such as JavaScript, CSS, images, video etc. Once the page is loaded the browser may send more async requests if the website/page requires

## What code is rendered in the browser?

 The code rendered typically in a web page is HTML, CSS and JavaScript

## What is the server-side code’s main function?

 Server side code is intended to ensure that the user/client request is run on the originating server before it gets to the client. Server side code also helps ensures that proprietary data cant be accessed and source code is protected.

## What is the client-side code’s main function?

 Client side code provides the user interface experience. Essentially, what the user/client can see and do after the page has been rendered. Typical client side code is usually HTML, CSS and JavaScript

## What is runtime?

 Runtime is the time a program runs and is executable after its source code has been compiled into machine code. Errors can still occur during runtime if a program has bugs and these are referred to as "Runtime Errors"

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

 A new instance is created every time a client request is made to a server to ensure the latest version of client side assets is rendered. This is especially true for static websites. Dynamic sites can display different URL data based on user preferences or info stored on the server side

## How many instances of the server-side code are available at any given time?

One, if the server side code is changed it can be accessed by a new request/refresh. output to the client can vary using server side scripting but the source code remains hidden and un accessible to the client

## How many instances of the databases connected to the server application are created?
Typically one, there can be different instances or variations of the same database on a server that use different criteria to access
the server application and database
