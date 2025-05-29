export default [
  // user login


  


  {
    url: '/admin-api/system/tenant/simple-list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: 1,
          name: '芋道源码',
          contactName: null,
          contactMobile: null,
          status: null,
          website: null,
          packageId: null,
          expireTime: null,
          accountCount: null,
          createTime: null
        },
        {
          id: 121,
          name: '小租户',
          contactName: null,
          contactMobile: null,
          status: null,
          website: null,
          packageId: null,
          expireTime: null,
          accountCount: null,
          createTime: null
        },
        {
          id: 122,
          name: '测试租户',
          contactName: null,
          contactMobile: null,
          status: null,
          website: null,
          packageId: null,
          expireTime: null,
          accountCount: null,
          createTime: null
        }
      ],
      msg: ''
    }
  },



  {
    url: '/admin-api/system/tenant/get-id-by-name',
    type: 'get',
    response: {
      code: 0,
      data: 1,
      msg: ''
    }
  },
 

]
