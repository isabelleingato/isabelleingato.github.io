---
title: "Reading RFCs: Websockets"
date: "2020-08-22"
---

My first brush with JavaScript was in 2014 during my sophomore year of college. Over a period of 24 hours, the language was (mis)used by myself and two of my friends during our first hackathon, in which we built a Linear Algebra learning toolkit called [Linus](https://github.com/isabelleingato/hackprinceton2014). Linus was a serverless browser-based app which presented a user with a resizable matrix into which they could enter any numeric values. Two little button options would then appear, and one could select either 'Find the kernel' or 'Find the image'. The app's value was in using JS and CSS to transform the matrix with each step in the operation, like your professor writing and erasing and writing and erasing on the chalkboard, only quicker and without the cloud of dust!
<br><br>
The next time I touched JavaScript was during an internship in 2015. By that time, [ES6](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4) was already defined and, to be candid, the deep grounding in JS, which a personal history of experience with an older, 'more challenging' version of the language seems to gives some developers I admire, felt like it was already lost on me. (Not quite hopelessly lost though!) In an effort to contextualize the things I may (think I) know and/or have picked up from various secondary sources and tutorials and my own attempts over the years, I've decided to make a concerted effort to start reading more from primary sources. Today that means reading the [2011 RFC for WebSockets](https://tools.ietf.org/html/rfc6455). I encourage you to read along with me or take a look at my summary below.
<br><br>
## THE BASICS:
* What's the problem we're solving? HTTP polling is an 'abuse' of HTTP that requires high overhead and maintaining/managing connections on both sides.
<br>
* What's the proposed solution? Use a single TCP connection for traffic in both directions.
<br><br>
## THE HOW:
* The client's part of the handshake includes an HTTP Upgrade request, so that a single port can be used.
<br>
* But how do you authenticate the client as truly a websocket client? ie How does the server prevent itself handling XMLHttpRequest packets made to look like websocket requests for example? Answer: The Sec-WebSocket-Key header from the client handshake and the GUID ([UUID](https://tools.ietf.org/html/rfc4122)) for the connection are combined, hashed, and returned in the server's part of the handshake.
<br>
* The protocol for communication is ws:// or wss:// rather than http:// and https://
<br>
* To safely shutdown a connection, the server must initialize the closing handshake, not the client.
<br><br>
## THE KEY IMPLICATIONS:
* Websockets aren't bound by a browser-enforced CORS, so if you're implementing, you should validate the origin server-side yourself. Check out this [excellent blog post](https://blog.securityevaluators.com/websockets-not-bound-by-cors-does-this-mean-2e7819374acc) for more info.
<br>
* Websockets are a TCP-based protocol and not directly related to HTTP _beyond the upgrade request_. (If you find this confusing, checkout the [OSI model](https://en.wikipedia.org/wiki/OSI_model). Note that HTTP is an application layer protocol, while TCP is a lower-level transport layer protocol.)
<br>
* Regardless if TLS is used, frames should always be masked for security and/or other reasons. Why? I thought [this](https://stackoverflow.com/questions/33250207/why-are-websockets-masked) was a pretty good explanation.
<br>
<br>
## Additional Readings:
* [Mozilla WebSockets API Client Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
<br>
* [Mozilla WebSockets API Server Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
<br>
* [Srushtika Neelakantam's walkthrough in NodeJS](https://medium.com/hackernoon/implementing-a-websocket-server-with-node-js-d9b78ec5ffa8)
<br>
* [Bootstrapping Websockets with HTTP/2](https://tools.ietf.org/html/rfc8441)
<br>
* [HTTP/2 Websockets](https://medium.com/@pgjones/http-2-websockets-81ae3aab36dd)
<br>
* [RFC 6202](https://tools.ietf.org/html/rfc6202)
