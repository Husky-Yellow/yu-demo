import Mock from 'mockjs'

/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1] || '').replace(/\+/g, ' ')
  return Object.fromEntries(search.split('&').map(item => item.split('=')))
}


import auth from './module/auth'
import dept from './module/dept'
import dictData from './module/dict-data'
import menu from './module/menu'
import notifyMessage from './module/notify-message'
import role from './module/role'
import tenant from './module/tenant'
import user from './module/user'
import data from './module/data'

export const mocks = [
  ...auth,
  ...menu,
  ...dept,
  ...dictData,
  ...notifyMessage,
  ...role,
  ...tenant,
  ...user,
  ...data
]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
export function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    // eslint-disable-next-line prefer-rest-params
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  mocks.forEach(mock => {
    Mock.mock(new RegExp(mock.url), mock.type || 'get', XHR2ExpressReqWrap(mock.response))
  })
}
