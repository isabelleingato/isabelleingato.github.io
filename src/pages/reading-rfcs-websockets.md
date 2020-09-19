---
title: "Reading RFCs Journey: Websockets"
date: "2020-08-22"
---

My first brush with JavaScript was in 2014 during my sophomore year of college. Over a period of 24 hours, the language was (mis)used by myself and two of my friends during our first hackathon, in which we built a Linear Algebra learning toolkit called Linus. Linus was a serverless browser-based app which presented a user with a matrix (table); they could enter numeric values into the matrix and resize it, then click either 'Find the kernel' or 'Find the image'. The app's value was in using JS and CSS to transform the matrix repeatedly to visualize each step of the operation.

The next time I touched JavaScript was during an internship in 2015. By that time, [ES6](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4) was already defined and, to be candid, the grounding that history seems to give some developers I admire felt like it was already lost on me. In an effort to contextualize the things I (think) I know and have picked up from various sources and tutorials and my own attempts over the years, I've decided to make a concerted effort to start reading from the source more, and today that means reading the [2011 RFC for WebSockets](https://tools.ietf.org/html/rfc6455).

THE BASICS:
* What's the problem we're solving? HTTP polling is an 'abuse' of http that requires high overhead and maintaining/managing connections on both sides.
* What's the proposed solution? Use a single TCP connection for traffic in both directions.

THE HOW:
* The client's part of the handshake includes an HTTP Upgrade request, so that a single port can be used.
* Authenticating the client as truly a websocket client: How does the server prevent itself handling XMLHttpRequest packets made to look like websocket requests for example? The Sec-WebSocket-Key header from the client handshake and the GUID ([UUID](https://tools.ietf.org/html/rfc4122)) for the connection are combined, hashed, and returned in the server's part of the handshake.
* The protocol for communication is ws:// or wss:// rather than http://
* To safely shutdown a connection, the server must initialize the closing handshake, not the client.

THE KEY IMPLICATIONS:
* Websockets aren't bound by a browser-enforced CORS, so if you're implementing, you should validate the Origin server-side yourself. Check out this [article](https://blog.securityevaluators.com/websockets-not-bound-by-cors-does-this-mean-2e7819374acc) for more info.
* Websockets are a TCP-based protocol and not directly related to http beyond the upgrade request.
* Regardless use of TLS, frames should be masked for security and/or other reasons. Why? I thought [this](https://stackoverflow.com/questions/33250207/why-are-websockets-masked) was a pretty good explanation.

Additional Readings:
* [Mozilla WebSockets API Client Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
* [Mozilla WebSockets API Server Docs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
* [Bootstrapping Websockets with HTTP/2](https://tools.ietf.org/html/rfc8441)
* [HTTP/2 Websockets](https://medium.com/@pgjones/http-2-websockets-81ae3aab36dd)
* [RFC 6202](https://tools.ietf.org/html/rfc6202)