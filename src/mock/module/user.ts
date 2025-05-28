export default [
  {
    url: '/admin-api/system/user/simple-list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: 1,
          nickname: '芋道源码',
          deptId: 103,
          deptName: '研发部门'
        },
        {
          id: 100,
          nickname: '芋道',
          deptId: 104,
          deptName: '市场部门'
        },
        {
          id: 103,
          nickname: '源码',
          deptId: 106,
          deptName: '财务部门'
        },
        {
          id: 104,
          nickname: '测试号',
          deptId: 107,
          deptName: '运维部门'
        },
        {
          id: 112,
          nickname: '新对象',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 114,
          nickname: 'hr 小姐姐',
          deptId: null,
          deptName: null
        },
        {
          id: 115,
          nickname: '阿呆',
          deptId: 102,
          deptName: '长沙分公司'
        },
        {
          id: 117,
          nickname: '测试号02',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 118,
          nickname: '狗蛋',
          deptId: 103,
          deptName: '研发部门'
        },
        {
          id: 131,
          nickname: '呵呵',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 139,
          nickname: '小秃头',
          deptId: null,
          deptName: null
        },
        {
          id: 141,
          nickname: '新用户',
          deptId: null,
          deptName: null
        },
        {
          id: 142,
          nickname: 'yangh',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 143,
          nickname: 'zhengdl',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 144,
          nickname: 'zhangzk',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 145,
          nickname: 'lixh',
          deptId: 100,
          deptName: '芋道源码'
        },
        {
          id: 146,
          nickname: 'yanghao',
          deptId: 103,
          deptName: '研发部门'
        }
      ],
      msg: ''
    }
  },
  
  {
    url: '/admin-api/system/user/page',
    type: 'get',
    response: {
      code: 0,
      data: {
        list: [
          {
            id: 146,
            username: 'yanghao',
            nickname: 'yanghao',
            remark: '',
            deptId: 103,
            deptName: '研发部门',
            postIds: [4],
            email: '',
            mobile: '',
            sex: 0,
            avatar: '',
            status: 0,
            loginIp: '',
            loginDate: null,
            createTime: 1747971800000
          },
          {
            id: 145,
            username: 'lixh',
            nickname: 'lixh',
            remark: '',
            deptId: 100,
            deptName: '芋道源码',
            postIds: [1],
            email: '',
            mobile: '',
            sex: 0,
            avatar: '',
            status: 0,
            loginIp: '0:0:0:0:0:0:0:1',
            loginDate: 1747971175000,
            createTime: 1747971060000
          },
          {
            id: 144,
            username: 'zhangzk',
            nickname: 'zhangzk',
            remark: '',
            deptId: 100,
            deptName: '芋道源码',
            postIds: [1],
            email: '',
            mobile: '',
            sex: 0,
            avatar: '',
            status: 0,
            loginIp: '',
            loginDate: null,
            createTime: 1747971042000
          },
          {
            id: 143,
            username: 'zhengdl',
            nickname: 'zhengdl',
            remark: '',
            deptId: 100,
            deptName: '芋道源码',
            postIds: [1],
            email: '',
            mobile: '',
            sex: 0,
            avatar: '',
            status: 0,
            loginIp: '',
            loginDate: null,
            createTime: 1747971026000
          },
          {
            id: 142,
            username: 'yangh',
            nickname: 'yangh',
            remark: '',
            deptId: 100,
            deptName: '芋道源码',
            postIds: [1],
            email: '',
            mobile: '',
            sex: 0,
            avatar: '',
            status: 0,
            loginIp: '',
            loginDate: null,
            createTime: 1747970998000
          },
          {
            id: 141,
            username: 'admin1',
            nickname: '新用户',
            remark: null,
            deptId: null,
            deptName: null,
            postIds: null,
            email: '',
            mobile: '',
            sex: 0,
            avatar: '',
            status: 0,
            loginIp: '0:0:0:0:0:0:0:1',
            loginDate: 1744088947000,
            createTime: 1744088947000
          },
          {
            id: 139,
            username: 'wwbwwb',
            nickname: '小秃头',
            remark: null,
            deptId: null,
            deptName: null,
            postIds: null,
            email: '',
            mobile: '',
            sex: 0,
            avatar: null,
            status: 0,
            loginIp: '0:0:0:0:0:0:0:1',
            loginDate: 1725973438000,
            createTime: 1725973438000
          },
          {
            id: 131,
            username: 'hh',
            nickname: '呵呵',
            remark: null,
            deptId: 100,
            deptName: '芋道源码',
            postIds: [],
            email: '777@qq.com',
            mobile: '15601882312',
            sex: 1,
            avatar: null,
            status: 0,
            loginIp: '',
            loginDate: null,
            createTime: 1714178756000
          },
          {
            id: 118,
            username: 'goudan',
            nickname: '狗蛋',
            remark: null,
            deptId: 103,
            deptName: '研发部门',
            postIds: [1],
            email: '',
            mobile: '15601691239',
            sex: 1,
            avatar: null,
            status: 0,
            loginIp: '0:0:0:0:0:0:0:1',
            loginDate: 1710637827000,
            createTime: 1657359883000
          },
          {
            id: 117,
            username: 'admin123',
            nickname: '测试号02',
            remark: '1111',
            deptId: 100,
            deptName: '芋道源码',
            postIds: [2],
            email: '',
            mobile: '15601691234',
            sex: 1,
            avatar: null,
            status: 0,
            loginIp: '0:0:0:0:0:0:0:1',
            loginDate: 1727835380000,
            createTime: 1657359626000
          }
        ],
        total: 17
      },
      msg: ''
    }
  },
]