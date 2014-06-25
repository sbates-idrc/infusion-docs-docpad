var rewriteUrls = function (content) {
    return content.replace(/(<a\s[^>]*href="[\w-/\.]+)\.md(["#])/gm, "$1.html$2");
};

var githubLocation = function () {
    // in case we're on Windows, replace "\" in the path with "/"
    var relativePath = this.document.relativePath.replace(/\\/g, "/");
    return "https://github.com/fluid-project/infusion-docs/blob/master/" + relativePath;
}

module.exports = {
    renderSingleExtensions: true,
    plugins: {
        handlebars: {
            helpers: {
                githubLocation: githubLocation,
                rewriteUrls: rewriteUrls
            }
        }
    }
}
