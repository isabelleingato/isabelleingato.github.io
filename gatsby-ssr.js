const React = require("react");

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents();
    // TODO: Alternatively consider using react-helmet
    // Site-wide meta tags
    const title = <title>Isabelle Ingato</title>;
    const description = <meta name="description" content="Personal website for Isabelle Ingato"></meta>;
    // TODO: Add favicon
    const favicon = <link rel="icon" type="image/png" href="src/assets/logo.png"></link>;
    const metaTags = [title, description, favicon];
    // https://github.com/daneden/animate.css
	// const animateCss = <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>;
    replaceHeadComponents([...headComponents, ...metaTags])
}