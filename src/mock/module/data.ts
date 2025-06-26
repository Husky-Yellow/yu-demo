export default [
  {
    url: '/admin-api/data/label-manage/page',
    type: 'get',
    response: {
      code: 200,
      data: {
        list: [
          {
            id: 1,
          }
        ]
      }
    }
  },
  {
    url: '/data/field-conf/list',
    type: 'get',
    response: {
      code: 200,
      data: [
        {
          "uuid": "1a2b3c4d",
          "id": "101",
          "manageId": "M001",
          "code": "username",
          "name": "用户名",
          "remark": "用户登录名",
          "fieldType": 1,
          "bizType": 1,
          "length": 20,
          "encFlag": 0,
          "encType": 0,
          "addFlag": 1,
          "editFlag": 1,
          "appViewFlag": 1,
          "pcViewFlag": 1,
          "fieldConfExtDOList": [
            {
              "optionsJson": [],
              "value": null,
              "name": "无"
            }
          ],
          "parentCode": ""
        },
        {
          "uuid": "2b3c4d5e",
          "id": "102",
          "manageId": "M001",
          "code": "age",
          "name": "年龄",
          "remark": "用户年龄",
          "fieldType": 2,
          "bizType": 1,
          "length": 3,
          "encFlag": 0,
          "encType": 0,
          "addFlag": 1,
          "editFlag": 1,
          "appViewFlag": 1,
          "pcViewFlag": 1,
          "fieldConfExtDOList": [
            {
              "optionsJson": [],
              "value": null,
              "name": "无"
            }
          ],
          "parentCode": ""
        },
        {
          "uuid": "3c4d5e6f",
          "id": "103",
          "manageId": "M001",
          "code": "gender",
          "name": "性别",
          "remark": "用户性别",
          "fieldType": 3,
          "bizType": 1,
          "length": 1,
          "encFlag": 0,
          "encType": 0,
          "addFlag": 1,
          "editFlag": 1,
          "appViewFlag": 1,
          "pcViewFlag": 1,
          "fieldConfExtDOList": [
            {
              "optionsJson": [
                { "label": "男", "value": "M" },
                { "label": "女", "value": "F" }
              ],
              "value": null,
              "name": "性别选项"
            }
          ],
          "parentCode": ""
        },
        {
          "uuid": "4d5e6f7g",
          "id": "104",
          "manageId": "M001",
          "code": "hobby",
          "name": "兴趣爱好",
          "remark": "用户兴趣",
          "fieldType": 4,
          "bizType": 1,
          "length": 50,
          "encFlag": 0,
          "encType": 0,
          "addFlag": 1,
          "editFlag": 1,
          "appViewFlag": 1,
          "pcViewFlag": 1,
          "fieldConfExtDOList": [
            {
              "optionsJson": [
                { "label": "阅读", "value": "reading" },
                { "label": "运动", "value": "sports" },
                { "label": "音乐", "value": "music" }
              ],
              "value": null,
              "name": "兴趣选项"
            }
          ],
          "parentCode": ""
        },
        {
          "uuid": "5e6f7g8h",
          "id": "105",
          "manageId": "M001",
          "code": "id_card",
          "name": "身份证号",
          "remark": "用户身份证号码",
          "fieldType": 1,
          "bizType": 0,
          "length": 18,
          "encFlag": 1,
          "encType": 1,
          "addFlag": 1,
          "editFlag": 0,
          "appViewFlag": 0,
          "pcViewFlag": 1,
          "fieldConfExtDOList": [
            {
              "optionsJson": [],
              "value": null,
              "name": "无"
            }
          ],
          "parentCode": ""
        },
        {
          "uuid": "6e7f8g9h",
          "id": "106",
          "manageId": "M001",
          "code": "attachment",
          "name": "身份证号",
          "remark": "用户身份证号码",
          "fieldType": 10,
          "bizType": 0,
          "length": 18,
          "encFlag": 1,
          "encType": 1,
          "addFlag": 1,
          "editFlag": 0,
          "appViewFlag": 0,
          "pcViewFlag": 1,
          "fieldConfExtDOList": [
            {
              "optionsJson": [],
              "value": null,
              "name": "无"
            }
          ],
          "parentCode": ""
        }
      ]
    }
  },
  {
    url: '/admin-api/data/view-form-conf/get',
    type: 'get',
    response: {
      code: 200,
      data: {}
    }
  },
  {
    url: '/admin-api/data/field-conf/get',
    type: 'get',
    response: () => {
      // 随机生成LabelFieldConfig数据
      const randomId = Math.floor(Math.random() * 10000).toString();
      const randomFieldType = Math.ceil(Math.random() * 10);
      const randomBizType = Math.round(Math.random());
      const randomBoolean = () => Math.round(Math.random());
      const fieldTypeOptions = {
        3: [
          {
            optionsJson: [
              { label: '男', value: 'M' },
              { label: '女', value: 'F' }
            ],
            value: null,
            name: '性别选项'
          }
        ],
        4: [
          {
            optionsJson: [
              { label: '阅读', value: 'reading' },
              { label: '运动', value: 'sports' },
              { label: '音乐', value: 'music' }
            ],
            value: null,
            name: '兴趣选项'
          }
        ],
        default: [
          {
            optionsJson: [],
            value: null,
            name: '无'
          }
        ]
      };
      return {
        code: 200,
        data: {
          uuid: randomId + '-uuid',
          id: randomId,
          manageId: 'M' + randomId,
          code: 'field_' + randomId,
          name: '字段' + randomId,
          remark: '这是字段' + randomId + '的备注',
          fieldType: randomFieldType,
          bizType: randomBizType,
          length: Math.floor(Math.random() * 50) + 1,
          encFlag: randomBoolean(),
          encType: randomBoolean(),
          addFlag: randomBoolean(),
          editFlag: randomBoolean(),
          appViewFlag: randomBoolean(),
          pcViewFlag: randomBoolean(),
          fieldConfExtDOList:
            fieldTypeOptions[randomFieldType] || fieldTypeOptions.default,
          parentCode:
            randomFieldType === 3 || randomFieldType === 4
              ? 'parent_' + randomId
              : ''
        }
      };
    }
  }
]