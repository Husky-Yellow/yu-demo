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

  {
    url: '/admin-api/data/count-conf/list',
    type: 'get',
    response: {
      "code": 0,
      "data": [
          {
              "id": 1750830011638,
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": null,
              "name": "1",
              "filterType": 1,
              "data": null,
              "sort": 0,
              "createTime": 1750830021000
          },
          {
              "id": "1935951343050633217",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": null,
              "name": "姓名",
              "filterType": 1,
              "data": null,
              "sort": 1,
              "createTime": 1750831634000
          },
          {
              "id": "1937322832972832770",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": null,
              "name": "名字",
              "filterType": 1,
              "data": null,
              "sort": 2,
              "createTime": 1750830723000
          },
          {
              "id": "1937754856944619521",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": null,
              "name": "DUOHAN",
              "filterType": 1,
              "data": null,
              "sort": 3,
              "createTime": 1750831734000
          },
          {
              "id": "1937758864534982657",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": null,
              "name": "姓名",
              "filterType": 1,
              "data": null,
              "sort": 0,
              "createTime": 1750832690000
          }
      ],
      "msg": ""
  }
  }
]
