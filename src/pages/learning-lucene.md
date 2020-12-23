---
title: "Starting to Learn Lucene: An Engineer's Search"
date: "2020-12-11"
---

I've had some (pretty minimal) secondary exposure to [Apache Solr](https://lucene.apache.org/solr/) and [ElasticSearch](https://www.elastic.co/), but, to be honest, it wasn't until this week, when working through both of their intro tutorials, that I learned they are _both_ built on the [Apache Lucene](https://lucene.apache.org/) indexer. As an engineer, my thoughts on these kinds of occurrences can pretty much be summarized as: abstractions are great simplifications, but man can they generate deja vu if you dig too deep! So to clear up a few things, I headed over to db-engines.com to use their great, high-level comparison tool to visualize the stats on Solr v. ElasticSearch v. MongoDB, the final being a third contender for certain subsets of text-based search functionality, although it isn't really in the same class as the former two. Take a look at their [comparison table](https://db-engines.com/en/system/Elasticsearch%3BMongoDB%3BSolr) for yourself.
<br><br>
Some quick things I noted:
1. ElasticSearch, released four years later, is quite a bit more popular today than Solr, according to the [db-engines.com ranking](https://db-engines.com/en/ranking).
2. Since both ElasticSearch and Solr are based on Lucene, they offer much of the same [queryparser functionality](https://github.com/apache/lucene-solr/tree/master/lucene/queryparser/src/java/org/apache/lucene/queryparser), including [dismax](https://lucene.apache.org/solr/guide/7_6/the-dismax-query-parser.html#the-dismax-query-parser), as well as features like dynamic field mapping
3. Although Lucene also offers some [machine learning functionality](https://lucene.apache.org/solr/guide/7_5/machine-learning.html), anomaly detection along with some other robust [machine learning features](https://www.elastic.co/guide/en/machine-learning/7.10/ml-overview.html) seem to give ElasticSearch an edge in some cases (see also [Kibana](https://www.elastic.co/kibana))

## Additional Resources and Readings:
* https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html
* https://www.quora.com/What-are-the-main-differences-between-ElasticSearch-and-NoSQL-DBs-like-MongoDB-Do-you-think-these-two-technologies-products-would-have-more-similarities-than-differences-in-the-near-future
* https://lucene.apache.org/solr/guide/8_7/overview-of-searching-in-solr.html
* https://docs.mongodb.com/manual/reference/operator/query/regex/
