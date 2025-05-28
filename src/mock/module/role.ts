export default [
  {
    url: '/admin-api/system/role/page',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: {
          list: [
            {
              id: 101,
              name: '测试账号',
              code: 'test',
              sort: 0,
              status: 0,
              type: 2,
              remark: '123',
              dataScope: 1,
              dataScopeDeptIds: [],
              createTime: 1609912175000
            },
            {
              id: 1,
              name: '超级管理员',
              code: 'super_admin',
              sort: 1,
              status: 0,
              type: 1,
              remark: '超级管理员',
              dataScope: 1,
              dataScopeDeptIds: null,
              createTime: 1609837428000
            },
            {
              id: 159,
              name: '系统管理',
              code: 'a',
              sort: 1,
              status: 0,
              type: 2,
              remark: '',
              dataScope: 1,
              dataScopeDeptIds: null,
              createTime: 1747971616000
            },
            {
              id: 2,
              name: '普通角色',
              code: 'common',
              sort: 2,
              status: 0,
              type: 1,
              remark: '普通角色',
              dataScope: 2,
              dataScopeDeptIds: null,
              createTime: 1609837428000
            },
            {
              id: 3,
              name: 'CRM 管理员',
              code: 'crm_admin',
              sort: 2,
              status: 0,
              type: 1,
              remark: 'CRM 专属角色',
              dataScope: 1,
              dataScopeDeptIds: null,
              createTime: 1708743073000
            },
            {
              id: 155,
              name: '测试数据权限',
              code: 'test-dp',
              sort: 3,
              status: 0,
              type: 2,
              remark: '',
              dataScope: 2,
              dataScopeDeptIds: [100, 102, 103, 104, 105, 108],
              createTime: 1743404286000
            },
            {
              id: 158,
              name: '2',
              code: '3',
              sort: 4,
              status: 0,
              type: 2,
              remark: null,
              dataScope: 1,
              dataScopeDeptIds: null,
              createTime: 1744891688000
            },
            {
              id: 160,
              name: '杨浩_test',
              code: 'test2',
              sort: 5,
              status: 0,
              type: 2,
              remark: '',
              dataScope: 3,
              dataScopeDeptIds: [],
              createTime: 1747971725000
            }
          ],
          total: 8
        },
        msg: ''
      }
    }
  },
]