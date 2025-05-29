export default [
  {
    url: '/admin-api/system/notify-message/get-unread-count',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: 0,
        msg: ''
      }
    }
  },
]