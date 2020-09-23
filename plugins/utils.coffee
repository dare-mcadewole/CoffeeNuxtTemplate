import Log from '~/utils/log.util'

export default ({ store, app }, inject) ->
    inject 'empty', (val) -> (val ? '').trim().length is 0

    # safe console logger
    inject 'Log', Log

    # inject Local Storage only in client mode
    if process.client
        inject 'storage', window.localStorage

    # Toast helpers
    inject 'Toast', {
    }