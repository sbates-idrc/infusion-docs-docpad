docpadConfig = {
    renderSingleExtensions: true
    templateData:
        partialBlock: (fn) ->
            obj = JSON.parse(fn())
            @partial(obj.partialName, obj)
        rewriteUrls: (content) ->
            content.replace(/(<a\s[^>]*href="[\w]+)\.md"/gm, '$1.html"')
}

module.exports = docpadConfig
