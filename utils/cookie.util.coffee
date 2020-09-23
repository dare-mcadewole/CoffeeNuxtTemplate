import JSCookie from 'js-cookie'
import cookie from 'cookie'

export default class Cookie
    @parse: (reqCookie, key) -> cookie.parse(reqCookie)[key]

    @set: (key, value) -> JSCookie.set key, value

    @get: (key) -> JSCookie.get key

    @remove: (key) -> JSCookie.remove key
