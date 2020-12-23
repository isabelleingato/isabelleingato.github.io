import React from "react";
import Layout from "../components/layout";

const Bookmark = (props) => (
  <li className="fade animated">
    <a href={props.link} target="_blank">
      {props.title}
    </a>
  </li>
);

export default function OpenSource() {
  // TODO: Use markdown / graphql to make extensible
  return (
    <Layout>
      <h2>Bookmarks</h2>
      <p>
        An ever-growing list of the key (mostly primary) sources I wish I had
        bookmarked when I started as a developer and which I look to now
        frequently...
      </p>
      <ul>
        <Bookmark
          link="https://html.spec.whatwg.org/multipage/references.html"
          title="HTML Spec Reference"
        ></Bookmark>
        <Bookmark
          link="https://dxr.mozilla.org/mozilla-central/source/"
          title="Firefox Source"
        ></Bookmark>
        <Bookmark
          link="https://www.chromium.org/developers/how-tos/getting-around-the-chrome-source-code"
          title="Chromium Source Reference"
        ></Bookmark>
        <Bookmark
          link="https://github.com/chromium/chromium"
          title="Chromium Source"
        ></Bookmark>
        <Bookmark link="https://webkit.org/" title="Webkit"></Bookmark>
        <Bookmark link="https://github.com/v8/v8" title="v8 Source"></Bookmark>
        <Bookmark
          link="https://caniuse.com/"
          title="CanIUse Browser Compatibility Tables"
        ></Bookmark>
        <Bookmark
          link="https://docs.google.com/document/d/1aitSOucL0VHZa9Z2vbRJSyAIsAz24kX8LFByQ5xQnUg/edit"
          title="Blink"
        ></Bookmark>
        <Bookmark link="https://css-tricks.com/" title="CssTricks"></Bookmark>
        <Bookmark
          link="https://www.w3.org/TR/css-2020/"
          title="CSS Spec"
        ></Bookmark>
        <Bookmark
          link="https://tools.ietf.org/rfc/index"
          title="RFCs"
        ></Bookmark>
        <Bookmark
          link="https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model"
          title="Event Loop Explanation"
        ></Bookmark>
        <Bookmark
          link="https://developer.mozilla.org/en-US/docs/Web/HTTP"
          title="HTTP MDN Reference"
        ></Bookmark>
        <Bookmark
          link="https://html.spec.whatwg.org/multipage/webstorage.html"
          title="WebStorage Spec"
        ></Bookmark>
      </ul>
    </Layout>
  );
}
