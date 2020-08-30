---
title: "Reading RFCs"
date: "2020-08-22"
---

My first brush with JavaScript was in 2014 during my sophomore year of college. Over a period of 24 hours, the language was (mis)used by myself and two of my friends during our first hackathon, in which we built a Linear Algebra learning toolkit called Linus. Linus was a serverless browser-based app which presented a user with a matrix; they could enter numeric values into the matrix and resize it, then click either 'Find the kernel' or 'Find the image'. The app's value was in using JS and CSS to transform the matrix repeatedly to visualize each step of the operation.

The next time I touched JavaScript was during an internship in 2015. By that time, [ES6](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4) was already a thing and the grounding that history seems to give some developers I admire was already lost on me. In an effort to contextualize the things I (think) I know and have picked up from various sources and tutorials and my own attempts over the years, I've decided to make a concerted effort to start reading from the source more, and today that means reading the [2011 RFC for WebSockets](https://tools.ietf.org/html/rfc6455).

* What's the problem we're solving? HTTP polling (aka an 'abuse' of http, high overhead, maintaining/managing connections on both sides)
* What's the proposed solution? Single TCP connection for traffic in both directions.
* not necessarily limited to http
* "After a successful handshake, clients and servers transfer data back
   and forth in conceptual units referred to in this specification as
   "messages"."
* "the WebSocket client's
   handshake is an HTTP Upgrade request" so that a single port can be used by all
   Upgrade: websocket
        Connection: Upgrade
        Sec-Websocket-key
        sec-websocket-protocol: eg chat, superchat
* web sockets do respect cors?
"Finally, the server has to prove to the client that it received the
   client's WebSocket handshake, so that the server doesn't accept
   connections that are not WebSocket connections.  This prevents an
   attacker from tricking a WebSocket server by sending it carefully
   crafted packets using XMLHttpRequest [XMLHttpRequest] or a form
   submission.

   To prove that the handshake was received, the server has to take two
   pieces of information and combine them to form a response.  The first
   piece of information comes from the |Sec-WebSocket-Key| header field
   in the client handshake:

        Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==

   For this header field, the server has to take the value (as present
   in the header field, e.g., the base64-encoded [RFC4648] version minus
   any leading and trailing whitespace) and concatenate this with the
   Globally Unique Identifier (GUID, [RFC4122]) "258EAFA5-E914-47DA-
   95CA-C5AB0DC85B11" in string form, which is unlikely to be used by
   network endpoints that do not understand the WebSocket Protocol.  A
   SHA-1 hash (160 bits) [FIPS.180-3], base64-encoded (see Section 4 of
   [RFC4648]), of this concatenation is then returned in the server's
   handshake.
"

from client handshake = HTTP/1.1 101 Switching Protocols

"By sending a Close frame and waiting for a Close frame in response,
   certain cases are avoided where data may be unnecessarily lost. "

write a quiz and include it here?

"Conceptually, WebSocket is really just a layer on top of TCP that
   does the following:

   o  adds a web origin-based security model for browsers

   o  adds an addressing and protocol naming mechanism to support
      multiple services on one port and multiple host names on one IP
      address

   o  layers a framing mechanism on top of TCP to get back to the IP
      packet mechanism that TCP is built on, but without length limits

   o  includes an additional closing handshake in-band that is designed
      to work in the presence of proxies and other intermediaries"

can share a port cause valid http upgrade request

"The WebSocket Protocol is an independent TCP-based protocol.  Its
   only relationship to HTTP is that its handshake is interpreted by
   HTTP servers as an Upgrade request.

   By default, the WebSocket Protocol uses port 80 for regular WebSocket
   connections and port 443 for WebSocket connections tunneled over
   Transport Layer Security (TLS)"

   "In more elaborate
   setups (e.g., with load balancers and multiple servers), a dedicated
   set of hosts for WebSocket connections separate from the HTTP servers
   is probably easier to manage."

   gaming is one application this is relevant to

   works with proxies too, just extra step

if not 101, handle like normal http

A data frame MAY be transmitted by either the client or the server at
   any time after opening handshake completion and before that endpoint
   has sent a Close frame

FRAMES MUST BE MASKED FOR SECURITY AND OTHER REASONS, REGARDLESS IF TLS

"The masking key is contained completely within the frame, as defined
   in Section 5.2 as frame-masking-key.  It is used to mask the "Payload
   data" defined in the same section as frame-payload-data, which
   includes "Extension data" and "Application data".

   The masking key is a 32-bit value chosen at random by the client.
   When preparing a masked frame, the client MUST pick a fresh masking
   key from the set of allowed 32-bit values.  The masking key needs to
   be unpredictable; thus, the masking key MUST be derived from a strong
   source of entropy, and the masking key for a given frame MUST NOT
   make it simple for a server/proxy to predict the masking key for a
   subsequent frame."

"A Pong frame sent in response to a Ping frame must have identical
   "Application data" as found in the message body of the Ping frame
   being replied to.

   If an endpoint receives a Ping frame and has not yet sent Pong
   frame(s) in response to previous Ping frame(s), the endpoint MAY
   elect to send a Pong frame for only the most recently processed Ping
   frame."

"A Pong frame MAY be sent unsolicited.  This serves as a
   unidirectional heartbeat.  A response to an unsolicited Pong frame is
   not expected."

   "Servers MAY close the WebSocket connection whenever desired.  Clients
   SHOULD NOT close the WebSocket connection arbitrarily."

"A |wss| URI identifies a WebSocket server and resource name and
   indicates that traffic over that connection is to be protected via
   TLS (including standard benefits of TLS such as data confidentiality
   and integrity and endpoint authentication)."

https://tools.ietf.org/html/rfc8441

https://medium.com/@pgjones/http-2-websockets-81ae3aab36dd

https://stackoverflow.com/questions/33250207/why-are-websockets-masked
not necessarily essential for websockets over tls, but interesting rep, has to do with proxies maybe accidentally doing

https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form

https://tools.ietf.org/html/rfc5234

https://tools.ietf.org/html/rfc6202
https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events
https://github.com/mozilla/webowonder-demos/tree/master/demos/friends%20timeline
https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
https://www.w3.org/TR/websockets/

https://tools.ietf.org/html/rfc1459

"The two most common server-push mechanisms are HTTP long polling and
   HTTP streaming:

   HTTP Long Polling:  The server attempts to "hold open" (not
      immediately reply to) each HTTP request, responding only when
      there are events to deliver.  In this way, there is always a
      pending request to which the server can reply for the purpose of
      delivering events as they occur, thereby minimizing the latency in
      message delivery.

   HTTP Streaming:  The server keeps a request open indefinitely; that
      is, it never terminates the request or closes the connection, even
      after it pushes data to the client."

One problem with http streaming (doesn't terminate connection, long and short polling do) "There is no requirement for an intermediary to immediately forward
      a partial response, and it is legal for the intermediary to buffer
      the entire response before sending any data to the client (e.g.,
      caching transparent proxies)."

SPANNING TREE SHORTEST PATH

https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4

for irc client can only send one message every two seconds without being penalized

https://medium.com/factory-mind/websocket-node-js-express-step-by-step-using-typescript-725114ad5fe4

zulip