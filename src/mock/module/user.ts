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
      "code": 0,
      "data": {
          "list": [
              {
                  "id": "1930501802547679233",
                  "username": "lixh002",
                  "nickname": "lixh002-1",
                  "remark": "我是一个用户",
                  "deptId": 103,
                  "deptName": "研发部门",
                  "postIds": null,
                  "email": "",
                  "mobile": "15888888888",
                  "sex": 1,
                  "avatar": "",
                  "status": 0,
                  "loginIp": "",
                  "loginDate": null,
                  "createTime": 1749102471000
              },
              {
                  "id": 142,
                  "username": "lixh001",
                  "nickname": "lixh数据权限测试用户",
                  "remark": "",
                  "deptId": 103,
                  "deptName": "研发部门",
                  "postIds": null,
                  "email": "",
                  "mobile": "",
                  "sex": 0,
                  "avatar": "",
                  "status": 1,
                  "loginIp": "192.168.135.98",
                  "loginDate": 1749712311000,
                  "createTime": 1749022372000
              },
              {
                  "id": 139,
                  "username": "wwbwwb",
                  "nickname": "小秃头",
                  "remark": null,
                  "deptId": null,
                  "deptName": null,
                  "postIds": null,
                  "email": "",
                  "mobile": "",
                  "sex": 0,
                  "avatar": null,
                  "status": 1,
                  "loginIp": "0:0:0:0:0:0:0:1",
                  "loginDate": 1725973438000,
                  "createTime": 1725973438000
              },
              {
                  "id": 131,
                  "username": "hh",
                  "nickname": "呵呵",
                  "remark": null,
                  "deptId": 100,
                  "deptName": "芋道源码",
                  "postIds": null,
                  "email": "777@qq.com",
                  "mobile": "15601882312",
                  "sex": 1,
                  "avatar": null,
                  "status": 0,
                  "loginIp": "",
                  "loginDate": null,
                  "createTime": 1714178756000
              },
              {
                  "id": 118,
                  "username": "goudan",
                  "nickname": "狗蛋",
                  "remark": null,
                  "deptId": 103,
                  "deptName": "研发部门",
                  "postIds": null,
                  "email": "",
                  "mobile": "15601691239",
                  "sex": 1,
                  "avatar": null,
                  "status": 0,
                  "loginIp": "0:0:0:0:0:0:0:1",
                  "loginDate": 1710637827000,
                  "createTime": 1657359883000
              },
              {
                  "id": 117,
                  "username": "admin123",
                  "nickname": "测试号02",
                  "remark": "1111",
                  "deptId": 100,
                  "deptName": "芋道源码",
                  "postIds": null,
                  "email": "",
                  "mobile": "15601691234",
                  "sex": 1,
                  "avatar": null,
                  "status": 0,
                  "loginIp": "0:0:0:0:0:0:0:1",
                  "loginDate": 1727835380000,
                  "createTime": 1657359626000
              },
              {
                  "id": 115,
                  "username": "aotemane",
                  "nickname": "阿呆",
                  "remark": "11222",
                  "deptId": 102,
                  "deptName": "长沙分公司",
                  "postIds": null,
                  "email": "7648@qq.com",
                  "mobile": "15601691229",
                  "sex": 2,
                  "avatar": null,
                  "status": 0,
                  "loginIp": "",
                  "loginDate": null,
                  "createTime": 1651258543000
              },
              {
                  "id": 114,
                  "username": "hrmgr",
                  "nickname": "hr 小姐姐",
                  "remark": null,
                  "deptId": null,
                  "deptName": null,
                  "postIds": null,
                  "email": "",
                  "mobile": "15601691236",
                  "sex": 1,
                  "avatar": null,
                  "status": 0,
                  "loginIp": "0:0:0:0:0:0:0:1",
                  "loginDate": 1711290065000,
                  "createTime": 1647697858000
              },
              {
                  "id": 104,
                  "username": "test",
                  "nickname": "测试号",
                  "remark": null,
                  "deptId": 107,
                  "deptName": "运维部门",
                  "postIds": null,
                  "email": "111@qq.com",
                  "mobile": "15601691200",
                  "sex": 1,
                  "avatar": null,
                  "status": 1,
                  "loginIp": "0:0:0:0:0:0:0:1",
                  "loginDate": 1743163276000,
                  "createTime": 1611166433000
              },
              {
                  "id": 103,
                  "username": "yuanma",
                  "nickname": "源码",
                  "remark": null,
                  "deptId": 106,
                  "deptName": "财务部门",
                  "postIds": null,
                  "email": "yuanma@iocoder.cn",
                  "mobile": "15601701300",
                  "sex": 0,
                  "avatar": null,
                  "status": 1,
                  "loginIp": "0:0:0:0:0:0:0:1",
                  "loginDate": 1723369692000,
                  "createTime": 1610553035000
              }
          ],
          "total": 12
      },
      "msg": ""
  }
  },
  {
    url: '/admin-api/data/label-manage/page',
    type: 'get',
    response: {
      "code": 0,
      "data": {
          "list": [
              {
                  "id": "1935524876651073537",
                  "labelId": "1932725509586165761",
                  "parentId": 0,
                  "rootId": 0,
                  "linkMsg": "0,",
                  "num": "lab001",
                  "name": "实有人口",
                  "type": 0,
                  "flag": "10000000",
                  "createTime": 1750300066000,
                  "children": []
              }
          ],
          "total": 1
      },
      "msg": ""
  }
  }
]