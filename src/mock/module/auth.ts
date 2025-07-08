export default [
  {
    url: '/admin-api/system/auth/login',
    type: 'post',
    response: {
      code: 0,
      data: {
        userId: 1,
        accessToken: 'f70daeafac574fff93a4471985db593b',
        refreshToken: '7deba5e9919f487c954bf40ea952a43b',
        expiresTime: 1748225442769
      },
      msg: ''
    }
  },
  {
    url: '/admin-api/system/auth/get-permission-info',
    type: 'get',
    response: {
        "code": 0,
        "data": {
            "user": {
                "id": 1,
                "nickname": "芋道源码",
                "avatar": "http://test.governance.iocoder.cn/test/20250502/avatar_1746154660449.png",
                "deptId": 103,
                "username": "admin",
                "email": "11aoteman@126.com"
            },
            "roles": [
                "super_admin"
            ],
            "permissions": [
                "",
                "SystemJob",
                " system:user:list",
                "system:dict:create",
                "system:dict:delete",
                "system:dict:query",
                "system:dict:export",
                "system:dict:update"
            ],
            "menus": [
                {
                    "id": 1,
                    "parentId": 0,
                    "name": "系统管理",
                    "path": "/system",
                    "component": null,
                    "componentName": null,
                    "icon": "ep:tools",
                    "visible": true,
                    "keepAlive": true,
                    "alwaysShow": true,
                    "children": [
                        {
                            "id": "1930877489578242052",
                            "parentId": 1,
                            "name": "组织架构",
                            "path": "organization",
                            "component": "",
                            "componentName": "",
                            "icon": "ep:add-location",
                            "visible": true,
                            "keepAlive": true,
                            "alwaysShow": true,
                            "children": [
                                {
                                    "id": "1930877489578242053",
                                    "parentId": "1930877489578242052",
                                    "name": "用户管理",
                                    "path": "subscriber",
                                    "component": "system/subscriber/index",
                                    "componentName": "SystemSubscriber",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1930877489578242054",
                                    "parentId": "1930877489578242052",
                                    "name": "岗位管理",
                                    "path": "job",
                                    "component": "system/job/index",
                                    "componentName": "SystemJob",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": false,
                                    "children": [
                                        {
                                            "id": "1939565518595346434",
                                            "parentId": "1930877489578242054",
                                            "name": "岗位管理",
                                            "path": "list",
                                            "component": "system/job/index",
                                            "componentName": "SystemJobIndex",
                                            "icon": "ep:add-location",
                                            "visible": true,
                                            "keepAlive": true,
                                            "alwaysShow": true,
                                            "children": null
                                        },
                                        {
                                            "id": "1939564770662862849",
                                            "parentId": "1930877489578242054",
                                            "name": "岗位详情",
                                            "path": "system/organization/job/detail",
                                            "component": "/system/job/detail",
                                            "componentName": "SystemJobDetail",
                                            "icon": "ep:add-location",
                                            "visible": false,
                                            "keepAlive": true,
                                            "alwaysShow": true,
                                            "children": null
                                        }
                                    ]
                                },
                                {
                                    "id": "1930877489578242055",
                                    "parentId": "1930877489578242052",
                                    "name": "组织架构",
                                    "path": "organization",
                                    "component": "system/organization/index",
                                    "componentName": "SystemOrganization",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "id": "1930877489578242056",
                            "parentId": 1,
                            "name": "权限配置",
                            "path": "permissions",
                            "component": "",
                            "componentName": "",
                            "icon": "ep:add-location",
                            "visible": true,
                            "keepAlive": true,
                            "alwaysShow": true,
                            "children": [
                                {
                                    "id": "1930877489578242057",
                                    "parentId": "1930877489578242056",
                                    "name": "角色管理",
                                    "path": "persona",
                                    "component": "system/persona/index",
                                    "componentName": "SystemPersona",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1930877489578242058",
                                    "parentId": "1930877489578242056",
                                    "name": "菜单管理",
                                    "path": "hierarchy",
                                    "component": "system/hierarchy/index",
                                    "componentName": "SystemHierarchy",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "id": "1930877489578242059",
                            "parentId": 1,
                            "name": "系统配置",
                            "path": "systemlog",
                            "component": "",
                            "componentName": "",
                            "icon": "ep:add-location",
                            "visible": true,
                            "keepAlive": true,
                            "alwaysShow": true,
                            "children": [
                                {
                                    "id": "1930877489578242060",
                                    "parentId": "1930877489578242059",
                                    "name": "登录日志",
                                    "path": "enterLog",
                                    "component": "system/enterLog/index",
                                    "componentName": "SystemEnterLog",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1930877489578242061",
                                    "parentId": "1930877489578242059",
                                    "name": "操作日志",
                                    "path": "handleLog",
                                    "component": "system/handleLog/index",
                                    "componentName": "SystemHandleLog",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1930877489578242062",
                                    "parentId": "1930877489578242059",
                                    "name": "敏感日志",
                                    "path": "sensitiveLog",
                                    "component": "system/sensitiveLog/index",
                                    "componentName": "SystemSensitiveLog",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "id": "1930877489578242063",
                            "parentId": 1,
                            "name": "标签管理",
                            "path": "label",
                            "component": "",
                            "componentName": "",
                            "icon": "ep:add-location",
                            "visible": true,
                            "keepAlive": true,
                            "alwaysShow": false,
                            "children": [
                                {
                                    "id": "1932732686457724930",
                                    "parentId": "1930877489578242063",
                                    "name": "标签管理",
                                    "path": "list",
                                    "component": "/system/label/index",
                                    "componentName": "SystemLabelList",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1930877489578242064",
                                    "parentId": "1930877489578242063",
                                    "name": "自定义标签",
                                    "path": "custom",
                                    "component": "/system/label/custom/index",
                                    "componentName": "SystemCustomLabel",
                                    "icon": "ep:add-location",
                                    "visible": false,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1930877489578242065",
                                    "parentId": "1930877489578242063",
                                    "name": "自定义标签详情",
                                    "path": "customDetail",
                                    "component": "system/label/custom/detail/index",
                                    "componentName": "SystemCustomLabelDetail",
                                    "icon": "ep:add-location",
                                    "visible": false,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                }
                            ]
                        },
                        {
                            "id": 105,
                            "parentId": 1,
                            "name": "字典管理",
                            "path": "dict",
                            "component": "system/dict/index",
                            "componentName": "SystemDictType",
                            "icon": "ep:collection",
                            "visible": true,
                            "keepAlive": true,
                            "alwaysShow": true,
                            "children": null
                        }
                    ]
                },
                {
                    "id": "1939891937186779137",
                    "parentId": 0,
                    "name": "基层治理",
                    "path": "/basic",
                    "component": "",
                    "componentName": "",
                    "icon": "ep:add-location",
                    "visible": true,
                    "keepAlive": true,
                    "alwaysShow": true,
                    "children": [
                        {
                            "id": "1939892075393290241",
                            "parentId": "1939891937186779137",
                            "name": "人口管理",
                            "path": "people",
                            "component": "",
                            "componentName": "",
                            "icon": "ep:add-location",
                            "visible": true,
                            "keepAlive": true,
                            "alwaysShow": true,
                            "children": [
                                {
                                    "id": "1940957454371733505",
                                    "parentId": "1939892075393290241",
                                    "name": "编辑",
                                    "path": "create",
                                    "component": "Exhibition/create",
                                    "componentName": "ExhibitionCreate",
                                    "icon": "ep:caret-right",
                                    "visible": false,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1939892414574071809",
                                    "parentId": "1939892075393290241",
                                    "name": "实有人口",
                                    "path": "label",
                                    "component": "Exhibition/index",
                                    "componentName": "ExhibitionList",
                                    "icon": "ep:add-location",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1939979306553389057",
                                    "parentId": "1939892075393290241",
                                    "name": "详情",
                                    "path": "detail",
                                    "component": "Exhibition/detail",
                                    "componentName": "ExhibitionDetail",
                                    "icon": "ep:calendar",
                                    "visible": false,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1942514868976377857",
                                    "parentId": "1939892075393290241",
                                    "name": "我的新增",
                                    "path": "myAdd",
                                    "component": "Exhibition/people/MyAdd/index",
                                    "componentName": "ExhibitionPeopleMyAdd",
                                    "icon": "ep:apple",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1942515793719746561",
                                    "parentId": "1939892075393290241",
                                    "name": "我的删除",
                                    "path": "myDelete",
                                    "component": "Exhibition/people/MyDelete/index",
                                    "componentName": "ExhibitionPeopleMyDelete",
                                    "icon": "ep:apple",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                },
                                {
                                    "id": "1942516074079608833",
                                    "parentId": "1939892075393290241",
                                    "name": "删除人员",
                                    "path": "userDelete",
                                    "component": "Exhibition/people/UserDelete/index",
                                    "componentName": "ExhibitionPeopleUserDelete",
                                    "icon": "ep:apple",
                                    "visible": true,
                                    "keepAlive": true,
                                    "alwaysShow": true,
                                    "children": null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "msg": ""
    }
  }
]