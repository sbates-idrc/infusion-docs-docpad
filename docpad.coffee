docpadConfig = {
    renderSingleExtensions: true
    templateData:
        rewriteUrls: (content) ->
            content.replace(/(<a\s[^>]*href="[\w]+)\.md"/gm, '$1.html"')
}

module.exports = docpadConfig
