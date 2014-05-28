# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
    templateData:
        partialBlock: (fn) ->
            obj = JSON.parse(fn())
            @partial(obj.partialName, obj)
}

# Export the DocPad Configuration
module.exports = docpadConfig
