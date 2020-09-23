"""
    Log Utility to log info, warn or error messages
    to the console only in DEVELOPMENT MODE
"""
export default
    info: ->
        if process.env.NODE_ENV is 'development'
            console.log '[INFO] >>> ', arguments...

    warn: ->
        if process.env.NODE_ENV is 'development'
            console.warn '[WARNING] >>> ', arguments...

    error: ->
        if process.env.NODE_ENV is 'development'
            console.error '[ERROR] >>> ', arguments...
