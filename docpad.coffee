docpadConfig = {
    renderSingleExtensions: true
    templateData:
        rewriteUrls: (content) ->
            content.replace(/(<a\s[^>]*href="[\w]+)\.md(["#])/gm, '$1.html$2')
}

module.exports = docpadConfig
