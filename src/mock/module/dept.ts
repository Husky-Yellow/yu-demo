export default [
  {
    url: '/admin-api/system/dept/list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: 100,
          name: '芋道源码',
          parentId: 0,
          sort: 0,
          leaderUserId: 1,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 101,
          name: '深圳总公司',
          parentId: 100,
          sort: 1,
          leaderUserId: 104,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 103,
          name: '研发部门',
          parentId: 101,
          sort: 1,
          leaderUserId: 1,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 108,
          name: '市场部门',
          parentId: 102,
          sort: 1,
          leaderUserId: null,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 102,
          name: '长沙分公司',
          parentId: 100,
          sort: 2,
          leaderUserId: null,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 104,
          name: '市场部门',
          parentId: 101,
          sort: 2,
          leaderUserId: null,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 109,
          name: '财务部门',
          parentId: 102,
          sort: 2,
          leaderUserId: null,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 105,
          name: '测试部门',
          parentId: 101,
          sort: 3,
          leaderUserId: null,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 113,
          name: '支持部门',
          parentId: 102,
          sort: 3,
          leaderUserId: 104,
          phone: null,
          email: null,
          status: 1,
          createTime: 1701481658000
        },
        {
          id: 106,
          name: '财务部门',
          parentId: 101,
          sort: 4,
          leaderUserId: 103,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 107,
          name: '运维部门',
          parentId: 101,
          sort: 5,
          leaderUserId: 1,
          phone: '15888888888',
          email: 'ry@qq.com',
          status: 0,
          createTime: 1609837427000
        },
        {
          id: 112,
          name: '产品部门',
          parentId: 101,
          sort: 100,
          leaderUserId: 1,
          phone: null,
          email: null,
          status: 1,
          createTime: 1701481513000
        }
      ],
      msg: ''
    }
  },
  {
    url: '/admin-api/system/dept/simple-list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: 100,
          name: '芋道源码',
          parentId: 0
        },
        {
          id: 101,
          name: '深圳总公司',
          parentId: 100
        },
        {
          id: 103,
          name: '研发部门',
          parentId: 101
        },
        {
          id: 108,
          name: '市场部门',
          parentId: 102
        },
        {
          id: 102,
          name: '长沙分公司',
          parentId: 100
        },
        {
          id: 104,
          name: '市场部门',
          parentId: 101
        },
        {
          id: 109,
          name: '财务部门',
          parentId: 102
        },
        {
          id: 105,
          name: '测试部门',
          parentId: 101
        },
        {
          id: 106,
          name: '财务部门',
          parentId: 101
        },
        {
          id: 107,
          name: '运维部门',
          parentId: 101
        }
      ],
      msg: ''
    }
  },
]