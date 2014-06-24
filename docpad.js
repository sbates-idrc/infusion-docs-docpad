var rewriteUrls = function (content) {
    return content.replace(/(<a\s[^>]*href="[\w-/\.]+)\.md(["#])/gm, '$1.html$2');
};

module.exports = {
    renderSingleExtensions: true,
    plugins: {
        handlebars: {
            helpers: {
                rewriteUrls: rewriteUrls
            }
        }
    }
}
