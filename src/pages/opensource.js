import React from "react";
import Layout from "../components/layout";

const Contribution = (props) => (
  <li className="fade animated">
    <a href={props.link}>{props.title}</a>
  </li>
);

export default function OpenSource() {
  // TODO: Use markdown / graphql to make extensible
  return (
    <Layout>
      <ul>{/*<Contribution link="" title=""></Contribution>*/}</ul>
    </Layout>
  );
}
