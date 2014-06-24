docpadConfig = {
    renderSingleExtensions: true
    plugins:
        handlebars:
            helpers:
                rewriteUrls: (content) ->
                    content.replace(/(<a\s[^>]*href="[\w-/\.]+)\.md(["#])/gm, '$1.html$2')
}

module.exports = docpadConfig
