---
title: "Working with Worklets"
date: "2020-12-23"
---

The other day I came across the term "worklet" for the first time. I guessed it was maybe a synonym for [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API). (Reasonable but ultimately incorrect guess!)
<br><br>
If you're new to worklets as well, I recommend reading directly from the [spec](https://html.spec.whatwg.org/multipage/worklets.html) for an introduction (a recommendation that holds for pretty much anything I write about on here). The spec will explain things in a more comprehensive and clear way than I ever could in a short blog post. But if you're just looking for a quick gist to determine if these "worklets" might be relevant to you, keep on reading.

## What is a worklet?
Let's take a look at a concrete example: the **[paintWorklet](https://drafts.css-houdini.org/css-paint-api/#paint-worklet)**. The paintWorklet enables developers to _extend CSS_ and improve efficiency by providing (higher level) access to the CSS Paint API via a `registerPaint` function that will instruct the browser's rendering engine to directly draw _images_ on the canvas based on the `paint()` instructions ([read more](https://github.com/w3c/css-houdini-drafts/blob/master/css-paint-api/EXPLAINER.md) and see [example](https://github.com/w3c/css-houdini-drafts/blob/master/css-paint-api/circle/index.html)). Notice that the paintWorklet isn't defined by the general developer; rather, the paint function is.
<br><br>
Essentially, a [worklet](https://developer.mozilla.org/en-US/docs/Web/API/Worklet) is an _extension_ to a browser's [rendering pipeline](https://docs.google.com/document/d/1wYNK2q_8vQuhVSWyUHZMVPGELzI0CYJ07gTPWP1V1us/edit#heading=h.6cdy1o585rsa) with restrictions that _maintain_ the guarantees held by rendering path phases. Unlike web workers, they aren't necessarily run in a separate thread and, accordingly, have additional restrictions on them. Worklets are experimental technologies and are not yet supported in Safari and IE.
