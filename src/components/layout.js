import React from "react";
import { Link } from "gatsby";
import Warning from "./warning";
import layoutStyles from "./layout.module.scss";

const ListLink = (props) => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default function Layout({ children }) {
  return (
    <div style={{ margin: `5vmin` }}>
      <header>
        <h1>Isabelle Ingato</h1>
        <ul role="navigation" className={layoutStyles.navLinks}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          {/*<ListLink to="/blog/">Blog</ListLink>*/}
          {/*<ListLink to="/opensource">Open Source Contributions</ListLink>*/}
          <ListLink to="/bookmarks/">My Bookmarks</ListLink>
          <ListLink to="/cssbattles/">My CSS Battles Submissions</ListLink>
          <ListLink to="/recommendations/">
            Reviews &#38; Recommendations
          </ListLink>
        </ul>
      </header>
      {children}
      <footer>
        Check out the{" "}
        <a
          href="https://github.com/isabelleingato/isabelleingato.github.io"
          target="_blank"
        >
          repo
        </a>{" "}
        for this site.
      </footer>
      <Warning></Warning>
    </div>
  );
}
