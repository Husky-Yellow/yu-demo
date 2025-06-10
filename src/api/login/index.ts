import request from '@/config/axios'
import type { RegisterVO, UserLoginVO } from './types'

export interface SmsCodeVO {
  mobile: string
  scene: number
}

export interface SmsLoginVO {
  mobile: string
  code: string
}

// 登录
export const login = (data: UserLoginVO) => {
  return request.post({ url: '/system/auth/login', data })
}

// 注册
export const register = (data: RegisterVO) => {
  return request.post({ url: '/system/auth/register', data })
}

// 使用租户名，获得租户编号
export const getTenantIdByName = (name: string) => {
  return request.get({ url: '/system/tenant/get-id-by-name?name=' + name })
}

// 使用租户域名，获得租户信息
// export const getTenantByWebsite = (website: string) => {
//   return request.get({ url: '/system/tenant/get-by-website?website=' + website })
// }

// 登出
export const loginOut = () => {
  return request.post({ url: '/system/auth/logout' })
}

/**
 * 获取用户权限信息
 * 
 * @public
 * @since 1.0.0 - 接口自 1.0.0 版本引入
 * @see {@link updateUserProfile} - 关联的更新用户信息接口
 * @note 此接口正在线上业务中使用，修改前需评估影响
 * @returns {Promise<ProfileVO>} 用户个人信息
 */
export const getInfo = () => {
  return request.get({ url: '/system/auth/get-permission-info' })
}

//获取登录验证码
export const sendSmsCode = (data: SmsCodeVO) => {
  return request.post({ url: '/system/auth/send-sms-code', data })
}

// 短信验证码登录
export const smsLogin = (data: SmsLoginVO) => {
  return request.post({ url: '/system/auth/sms-login', data })
}

// 社交快捷登录，使用 code 授权码
export function socialLogin(type: string, code: string, state: string) {
  return request.post({
    url: '/system/auth/social-login',
    data: {
      type,
      code,
      state
    }
  })
}

// 社交授权的跳转
export const socialAuthRedirect = (type: number, redirectUri: string) => {
  return request.get({
    url: '/system/auth/social-auth-redirect?type=' + type + '&redirectUri=' + redirectUri
  })
}
// 获取验证图片以及 token
export const getCode = (data: any) => {
  return request.postOriginal({ url: 'system/captcha/get', data })
}

/**
 * 验证码校验接口
 * 
 * @public
 * @param {Object} data - 验证码校验参数
 * @param {string} data.captchaType - 验证码类型（如：blockPuzzle-滑块拼图，clickWord-点选文字）
 * @param {string} data.pointJson - 滑动轨迹或点击位置的加密数据（根据不同验证码类型生成）
 * @param {string} data.token - 验证码唯一标识（由获取验证码接口返回）
 * @returns {Promise<AxiosResponse>} 包含校验结果的响应对象
 */
export const reqCheck = (data: {
  captchaType: string;
  pointJson: string;
  token: string;
}) => {
  return request.postOriginal({ url: 'system/captcha/check', data });
};

// 通过短信重置密码
export const smsResetPassword = (data: any) => {
  return request.post({ url: '/system/auth/reset-password', data })
}
