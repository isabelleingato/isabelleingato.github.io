import React from "react"
import { Link } from "gatsby"
import layoutStyles from "./layout.module.scss"

const ListLink = props => (
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
          <ListLink to="/recommendations/">Reviews &#38; Recommendations</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/cssbattles/">My CSS Battles Submissions</ListLink>
        </ul>
      </header>
      {children}
      <footer>Check out the <a href="https://github.com/isabelleingato/isabelleingato.github.io" target="_blank">repo</a> for this site.</footer>
    </div>
  )
}