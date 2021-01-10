import React from "react";
import Layout from "../components/layout";

const Recommendation = (props) => (
  <li className="fade animated">
    <i>{props.title}</i> by {props.author}
  </li>
);

export default function Recommendations() {
  // TODO: Use markdown / graphql to make extensible
  return (
    <Layout>
      <section>
        <h2>Books</h2>
        <h3>Tech</h3>
        <ul>
          <Recommendation
            title="Code"
            author="Charles Petzold"
          ></Recommendation>
          <Recommendation
            title="The Pragmatic Programmer"
            author="Andrew Hunt and David Thomas"
          ></Recommendation>
          <Recommendation
            title="Learning JavaScript Design Patterns"
            author="Addy Osmani"
          ></Recommendation>
        </ul>
        <h3>Fiction</h3>
        <ul>
          <Recommendation
            title="Freedom"
            author="Jonathan Franzen"
          ></Recommendation>
          <Recommendation
            title="Loving Day"
            author="Mat Johnson"
          ></Recommendation>
          <Recommendation
            title="Tunneling to the Center of the Earth"
            author="Kevin Wilson"
          ></Recommendation>
        </ul>
        <h3>Nonfiction</h3>
        <ul>
          <Recommendation
            title="The Anatomy of Story"
            author="John Truby"
          ></Recommendation>
          <Recommendation
            title="Ada's Algorithm"
            author="James Essinger"
          ></Recommendation>
        </ul>
      </section>
    </Layout>
  );
}
