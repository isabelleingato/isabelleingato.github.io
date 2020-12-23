import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default function Blog({ data }) {
  return (
    <Layout>
      <h2 id="page-title">Blog Posts ({data.allMarkdownRemark.totalCount})</h2>
      <p>
        A dedicated space for random musings, notes, and interesting finds...
      </p>
      <div role="list" aria-labelledby="page-title">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div role="listitem" key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title} <span>- {node.frontmatter.date}</span>
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

// Credit: https://www.gatsbyjs.org/tutorial/part-six/#create-a-list-of-your-sites-markdown-files-in-srcpagesindexjs
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
