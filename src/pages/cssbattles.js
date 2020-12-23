import React from "react";
import Layout from "../components/layout";
import "./cssbattle.css";

// TODO Battle 5: Could shorten by putting divs inside each other to create new z-index
// https://shripadk.github.io/react/docs/jsx-gotchas.html
export default function CssBattles() {
  return (
    <Layout>
      <h2>
        My{" "}
        <a href="https://cssbattle.dev/" target="_blank">
          CSS Battles
        </a>{" "}
        Submissions
      </h2>
      <ul>
        <li>
          <label>Battle 3 (203 chars - Score 597.79)</label>
          <div className="display-plus-code-container">
            <div id="battle3" className="wrapper">
              <div></div>
            </div>
            <div className="code">
              &lt;div&gt;&lt;/div&gt;&lt;div style="transform:rotate(180deg)
              translate(-100px,100px)"&gt;&lt;/div&gt;&lt;div
              style="left:250"&gt;&lt;style&gt;body{"{"}background:#62306D{"}"}
              div{"{"}background:#F7EC7D;border-radius:0 0 50px
              50px;width:100;height:100;position:absolute;left:50;bottom:50{"}"}
            </div>
          </div>
        </li>
        <li>
          <label>Battle 4 (240 chars - Score 640.61)</label>
          <div className="display-plus-code-container">
            <div id="battle4" className="wrapper">
              <div></div>
              <div
                style={{ transform: "rotate(180deg) translate(-100px,100px)" }}
              ></div>
              <div style={{ left: "250px" }}></div>
            </div>
            <div></div>
          </div>
        </li>
        <li>
          <label>Battle 5 (312 chars - Score 620.45)</label>
          <div className="display-plus-code-container">
            <div id="battle5" className="wrapper">
              <div></div>
              <div
                style={{
                  background: "#998235",
                  transform: "translate(60px,-60px)",
                  zIndex: "-1",
                }}
              ></div>
              <div
                style={{
                  borderRadius: "50%",
                  transform: "translate(120px,-120px)",
                  zIndex: "-2",
                }}
              ></div>
            </div>
            <div></div>
          </div>
        </li>
      </ul>
    </Layout>
  );
}
