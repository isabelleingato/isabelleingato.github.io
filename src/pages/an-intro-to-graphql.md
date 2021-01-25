---
title: "A Walk Through GraphQL Examples"
date: "2020-11-28"
---

## Example 1
Below is the GraphQL query (that uses the [Gatsby Transformer Remark plugin](https://www.gatsbyjs.com/plugins/gatsby-transformer-remark/) ([official repo](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-transformer-remark))) for retrieving and sorting the posts on this blog in chronological order (see also: [remark parser](https://github.com/remarkjs/remark) and official Gatsby [tutorial](https://www.gatsbyjs.org/tutorial/)). What can you extract just by glancing over the below query? You probably notice a lot of nesting... Arguments, including an argument with nested fields and its own argument for sorting the data... Some keys including "edges", "frontmatter", and "node", all of which are located within the "allMarkdownRemark" substructure, so maybe they're just specific to the plugin one might guess...? What about this "totalCount" key which seems to be an aggregate value...?
<br><br>
```
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
```
Things are probably a bit hazy still. Now, let's take a look at a sample (subset of a) response to that query.
<br><br>
<small>Note: I won't include it anywhere here because it just adds extra complexity, but I also have a `gatsby-node.js` file in the root of the project for this blog that looks like [this](https://www.gatsbyjs.org/tutorial/part-seven/#creating-slugs-for-pages); we use it to generate the slugs for our page, so just ignore that field for now.</small>
```
{
  "data": {
    "allMarkdownRemark": {
      "totalCount": 6,
      "edges": [
        ...,
        {
          "node": {
            "id": "0cabb4e7-4bf2-5a09-b69f-7a43fb99a1de",
            "frontmatter": {
              "title": "A Super Brief Intro to GraphQL via Examples",
              "date": "28 November, 2020"
            },
            "fields": {
              "slug": "/an-intro-to-graphql/"
            },
            "excerpt": "Below is the GraphQL query (that uses the Gatsby Transformer Remark plugin) for retrieving and sorting the posts on this blog in…"
          }
        },
        ...
      ]
    }
  },
  "extensions": {}
}
```
Any clearer? Well the shape at least looks quite like that of the query structure above, except for the addition of an "extensions" key on the end there. In other words, we got _exactly_ what we asked for! And speaking of the shape, you might also notice that, if you were going to parse this data with JS after retrieving it, it would be pretty simple, since related fields are nested/grouped together!
<br><br>
<small>To be clear, GraphQL is _language agnostic_, but I'll mostly make mention to the [JS client](https://github.com/graphql/graphql-js) in this post.</small>
<br><br>
Great, so we have a query and a response, but how did we go from one to the other? Since the context of the above example is Gatsby, the [high-level answer](https://github.com/gatsbyjs/gatsby/blob/ab0339376983cc5adfd257322fe1f473241647a5/docs/docs/recipes/sourcing-data.md) in this case is that the previously-mentioned plugin does the "data sourcing" for us (more info and options on that [here](https://www.gatsbyjs.com/docs/content-and-data/)).
<br><br>
The deeper, more general answer though is the _schema_ and its _resolvers_.
<br><br>
Let's dive into the plugin's source [here](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/on-node-create.js) and [here](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/extend-node-type.js). Read those files over for me before reading on. (You'll notice these rely further on [gray-matter](https://developer.aliyun.com/mirror/npm/package/gray-matter) for parsing of frontmatter generally, but don't feel like you have to go that deep.)
<br><br>
By this point we should have gained a better understanding of how the data is mapped, now let's review what we first noticed about this example and what we know now. "frontmatter" is a key defined by the plugin (see [this line of code](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/on-node-create.js#L53)). "allMarkdownRemark" is the main substructure of the query and what it does is pull _all_ nodes of internal _type_ "MarkdownRemark" (see [this line of code](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/on-node-create.js#L49)). "node" and "edges" are generic terms of the GraphQL SDL to describe the graph-like structure of results ([more here](https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#the-node-interface)). Finally, "totalCount" is not specific to the plugin but to GraphQL itself (read more [here](https://graphql.org/learn/pagination/) and [here](https://github.com/graphql/graphql-js/blob/607345275f60e07dba1b7156a23b9ddf8b086fc9/benchmark/github-schema.graphql#L1009)). Read more about the [extensions](https://spec.graphql.org/June2018/#sec-Schema-Extension) keyword and [how sorting works](https://www.gatsbyjs.com/docs/graphql-reference/#sort).
<br><br>
## Example 2
The above example both simplified and obscured things a bit because it used a [Gatsby](https://www.gatsbyjs.com/) plugin. To get a better sense of what GraphQL provides us with on its own, take a look at this [Star Wars schema example](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsSchema.js) from the official GraphQL JS repo. (Take a peek at the rest of the folder too, especially the [data file](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsData.js) and one of the [test](https://github.com/graphql/graphql-js/blob/master/src/__tests__/starWarsQuery-test.js) files). Pay particular attention to what the resolvers do, and note that they will be called in BFS ([breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)) order. Nikolas Burk's blog post [here](https://www.prisma.io/blog/graphql-server-basics-demystifying-the-info-argument-in-graphql-resolvers-6f26249f613a) offers a great pictorial demonstrating this.
<br><br>
Hopefully, this post helped clarify some of the mystique of GraphQL for you so that you feel more comfortable considering it for your next projects.
<br><br>
## Additional Resources and Readings:
* [Official Spec](http://spec.graphql.org/June2018/)
* https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/
* https://github.com/graphql/graphql-js
* https://graphql.org/learn/execution/#root-fields-resolvers
* https://jacobwgillespie.com/2015-10-09-from-rest-to-graphql/#.tag7nzkrb
* https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2#.ovn0y19k4
* https://hasura.io/blog/architecture-of-a-high-performance-graphql-to-sql-server-58d9944b8a87/
* https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#setting-default-field-values
* https://github.com/gatsbyjs/gatsby/blob/fcb22eb363d7f667c3048c75693c80b0e4e9a982/docs/docs/query-execution.md#save-query-results-to-redux-and-disk
* https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-transformer-remark/src/utils/time-to-read.js -- highly recommend if you're interested in how the plugin determines the time to read
