// src/mock/index.ts
import Mock from 'mockjs'

function param2Obj(url: string) {
  const search = decodeURIComponent(url.split('?')[1] || '').replace(/\+/g, ' ')
  return Object.fromEntries(search.split('&').map(item => item.split('=')))
}

// 自动导入所有 mock 模块
const modules = import.meta.glob('./module/*.ts', { eager: true });
export const mocks = Object.values(modules).flatMap((mod: any) => mod.default || mod);

export function mockXHR() {
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false
      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond: any) {
    return function(options: any) {
      let result = null
      if (typeof respond === 'function') {
        const { body, type, url } = options
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

  mocks.forEach((mock: any) => {
    Mock.mock(new RegExp(mock.url), mock.type || 'get', XHR2ExpressReqWrap(mock.response))
  })
}