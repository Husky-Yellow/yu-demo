export default [
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
                  "flag": "11100000",
                  "createTime": 1750300066000,
                  "children": [
                      {
                          "id": "1938148648965181441",
                          "labelId": "1932725509586165761",
                          "parentId": "1935524876651073537",
                          "rootId": "1935524876651073537",
                          "linkMsg": "0,1935524876651073537",
                          "num": "lab007",
                          "name": "李四",
                          "type": 0,
                          "flag": "11000000",
                          "createTime": 1750925622000,
                          "children": []
                      },
                      {
                          "id": "1938148823779577857",
                          "labelId": "1932725509586165761",
                          "parentId": "1935524876651073537",
                          "rootId": 0,
                          "linkMsg": "0,",
                          "num": "lab008",
                          "name": "qweqwe",
                          "type": 0,
                          "flag": "11100000",
                          "createTime": 1750925663000,
                          "children": []
                      },
                      {
                          "id": "1938148839818596353",
                          "labelId": "1932725509586165761",
                          "parentId": "1935524876651073537",
                          "rootId": 0,
                          "linkMsg": "0,",
                          "num": "lab009",
                          "name": "qweqwe",
                          "type": 0,
                          "flag": "11100000",
                          "createTime": 1750925667000,
                          "children": []
                      }
                  ]
              }
          ],
          "total": 1
      },
      "msg": ""
  }
  },
  {
    url: '/data/field-conf/list',
    type: 'get',
    response: {
      "code": 0,
      "data": [
          {
              "id": "1938148839881510914",
              "manageId": "1938148839818596353",
              "code": "id",
              "name": "编码",
              "remark": null,
              "fieldType": 2,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 1,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1938148839881510915",
              "manageId": "1938148839818596353",
              "code": "label",
              "name": "系统标签",
              "remark": null,
              "fieldType": 9,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 2,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1938148839881510916",
              "manageId": "1938148839818596353",
              "code": "create_time",
              "name": "创建时间",
              "remark": null,
              "fieldType": 5,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 3,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1938148839881510917",
              "manageId": "1938148839818596353",
              "code": "update_time",
              "name": "更新时间",
              "remark": null,
              "fieldType": 5,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 4,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1938148839881510918",
              "manageId": "1938148839818596353",
              "code": "deleted",
              "name": "是否删除",
              "remark": null,
              "fieldType": 1,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 5,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1938148839881510919",
              "manageId": "1938148839818596353",
              "code": "creator",
              "name": "创建者",
              "remark": null,
              "fieldType": 1,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 6,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1938148839881510920",
              "manageId": "1938148839818596353",
              "code": "updater",
              "name": "更新者",
              "remark": null,
              "fieldType": 1,
              "bizType": "0",
              "encType": null,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 7,
              "version": null,
              "createTime": 1750925667000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1940674274209079298",
              "manageId": "1938148839818596353",
              "code": "name",
              "name": "姓名",
              "remark": "输入姓名",
              "fieldType": 1,
              "bizType": "0",
              "encType": 0,
              "length": 10,
              "encFlag": 0,
              "addFlag": 1,
              "editFlag": 1,
              "appViewFlag": 1,
              "pcViewFlag": 1,
              "sort": 8,
              "version": null,
              "createTime": 1751527778000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1940687680404234241",
              "manageId": "1938148839818596353",
              "code": "Idcard",
              "name": "身份证",
              "remark": "身份证号",
              "fieldType": 1,
              "bizType": "0",
              "encType": 0,
              "length": 20,
              "encFlag": 0,
              "addFlag": 1,
              "editFlag": 1,
              "appViewFlag": 1,
              "pcViewFlag": 1,
              "sort": 9,
              "version": null,
              "createTime": 1751530974000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1940700568388911106",
              "manageId": "1938148839818596353",
              "code": "timearea",
              "name": "时间段",
              "remark": "时间段",
              "fieldType": 6,
              "bizType": "0",
              "encType": 0,
              "length": 20,
              "encFlag": 0,
              "addFlag": 1,
              "editFlag": 1,
              "appViewFlag": 1,
              "pcViewFlag": 1,
              "sort": 10,
              "version": null,
              "createTime": 1751534047000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1940968735346536450",
              "manageId": "1938148839818596353",
              "code": "time",
              "name": "时间",
              "remark": "时间",
              "fieldType": 5,
              "bizType": "0",
              "encType": 0,
              "length": 11,
              "encFlag": 0,
              "addFlag": 1,
              "editFlag": 1,
              "appViewFlag": 1,
              "pcViewFlag": 1,
              "sort": 11,
              "version": null,
              "createTime": 1751597983000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1941042518682001410",
              "manageId": "1938148839818596353",
              "code": "test",
              "name": "test",
              "remark": "test",
              "fieldType": 1,
              "bizType": "0",
              "encType": 0,
              "length": 111,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 12,
              "version": null,
              "createTime": 1751615574000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1942099392298754049",
              "manageId": "1938148839818596353",
              "code": "textarea",
              "name": "多行文本",
              "remark": "多行文本",
              "fieldType": 1,
              "bizType": "0",
              "encType": 0,
              "length": 20,
              "encFlag": 0,
              "addFlag": 1,
              "editFlag": 1,
              "appViewFlag": 1,
              "pcViewFlag": 1,
              "sort": 13,
              "version": null,
              "createTime": 1751867552000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          },
          {
              "id": "1942120909715808257",
              "manageId": "1938148839818596353",
              "code": "zhengze",
              "name": "正则校验",
              "remark": "正则校验",
              "fieldType": 1,
              "bizType": "0",
              "encType": 0,
              "length": 20,
              "encFlag": 0,
              "addFlag": 1,
              "editFlag": 1,
              "appViewFlag": 1,
              "pcViewFlag": 1,
              "sort": 14,
              "version": null,
              "createTime": 1751872682000,
              "parentCode": "0",
              "fieldConfExtDOList": null
          }
      ],
      "msg": ""
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
      const randomId = Math.floor(Math.random() * 10000).toString()
      const randomFieldType = Math.ceil(Math.random() * 10)
      const randomBizType = Math.round(Math.random())
      const randomBoolean = () => Math.round(Math.random())
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
      }
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
          fieldConfExtDOList: fieldTypeOptions[randomFieldType] || fieldTypeOptions.default,
          parentCode: randomFieldType === 3 || randomFieldType === 4 ? 'parent_' + randomId : ''
        }
      }
    }
  },
  {
    url: '/data/query-conf/list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: '1939964280471855106',
          manageId: '1935524876651073537',
          fieldIds: '1935951343050633217',
          fieldCodes: 'name',
          hint: '1',
          queryType: 0,
          defaultValue: '1',
          sort: 0,
          createTime: 1751358502000
        }
      ],
      msg: ''
    }
  },
  {
    url: '/data/business-data/page',
    type: 'get',
    response: {
      code: 0,
      data: []
    }
  },
  {
    url: '/data/operate-conf/list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: '1932726818544558081',
          manageId: '1935524876651073537',
          operateName: '添加',
          operateType: 0,
          showFlag: 0,
          sort: 0,
          createTime: 1749632957000
        },
        {
          id: '1932726880922247170',
          manageId: '1935524876651073537',
          operateName: '编辑',
          operateType: 1,
          showFlag: 0,
          sort: 1,
          createTime: 1749632971000
        },
        {
          id: '1932726927856508929',
          manageId: '1935524876651073537',
          operateName: '删除',
          operateType: 2,
          showFlag: 0,
          sort: 2,
          createTime: 1749632983000
        },
        {
          id: '1932726958261018625',
          manageId: '1935524876651073537',
          operateName: '导入',
          operateType: 3,
          showFlag: 0,
          sort: 3,
          createTime: 1749632990000
        },
        {
          id: '1932726998052380673',
          manageId: '1935524876651073537',
          operateName: '导出',
          operateType: 4,
          showFlag: 0,
          sort: 4,
          createTime: 1749632999000
        }
      ],
      msg: ''
    }
  },
  {
    url: '/data/label-manage/tree',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: '1935524876651073537',
          parentId: 0,
          name: '实有人口',
          childList: [
            {
              id: '1938148648965181441',
              parentId: '1935524876651073537',
              name: '李四',
              childList: null
            },
            {
              id: '1938148823779577857',
              parentId: '1935524876651073537',
              name: 'qweqwe',
              childList: null
            },
            {
              id: '1938148839818596353',
              parentId: '1935524876651073537',
              name: 'qweqwe',
              childList: null
            }
          ]
        }
      ],
      msg: ''
    }
  },
  {
    url: '/data/conf/list',
    type: 'get',
    response: {
      "code": 0,
      "data": [
          {
              "id": "1937786492331507715",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": "1935951343205822465",
              "fieldCode": null,
              "type": 2,
              "rule": 1,
              "customJson": null,
              "createTime": 1750839277000
          },
          {
              "id": "1938149476572663810",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": "1937390336233467906",
              "fieldCode": null,
              "type": 2,
              "rule": 1,
              "customJson": null,
              "createTime": 1750925819000
          }
      ],
      "msg": ""
  }
  },
  {
    url: '/data/sort-conf/list',
    type: 'get',
    response: {
      "code": 0,
      "data": [
          {
              "id": "1937786492331507715",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": "1935951343205822465",
              "fieldCode": null,
              "type": 2,
              "rule": 1,
              "customJson": null,
              "createTime": 1750839277000
          },
          {
              "id": "1938149476572663810",
              "manageId": "1935524876651073537",
              "formId": null,
              "fieldId": "1937390336233467906",
              "fieldCode": null,
              "type": 2,
              "rule": 1,
              "customJson": null,
              "createTime": 1750925819000
          }
      ],
      "msg": ""
  }
  },{
    url: '/data/view-form-conf/get',
    type: 'post',
    response: {
      "code": 0,
      "data": {
          "id": "1940674340323893249",
          "manageId": "1938148839818596353",
          "formType": 1,
          "formJson": "[{\"id\": \"1940674274209079298\", \"fields\": [{\"id\": \"1940674274209079298\", \"code\": \"name\", \"name\": \"姓名\", \"sort\": 8, \"length\": 10, \"remark\": \"输入姓名\", \"addFlag\": 1, \"bizType\": \"0\", \"encFlag\": 0, \"encType\": 0, \"linkage\": {\"effect\": \"show\", \"enabled\": false, \"condition\": \"equals\", \"targetFieldId\": null, \"targetFieldValue\": null}, \"version\": null, \"editFlag\": 1, \"manageId\": \"1938148839818596353\", \"required\": true, \"fieldType\": 1, \"createTime\": 1751527778000, \"parentCode\": \"0\", \"pcViewFlag\": 1, \"appViewFlag\": 1, \"placeholder\": \"\", \"fieldConfExtObj\": {\"value\": \"0\"}, \"fieldConfExtDOList\": [{\"id\": \"1940674278269165569\", \"code\": null, \"name\": \"textType\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940674274209079298\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751527779000, \"updateTime\": 1751527779000, \"optionsJson\": \"{\\\"0\\\": \\\"single\\\", \\\"1\\\": \\\"multi\\\"}\"}, {\"id\": \"1940674278336274434\", \"code\": null, \"name\": \"duplicateCheck\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940674274209079298\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751527779000, \"updateTime\": 1751527779000, \"optionsJson\": \"{\\\"0\\\": \\\"check\\\", \\\"1\\\": \\\"noCheck\\\"}\"}, {\"id\": \"1940674278336274435\", \"code\": null, \"name\": \"dataValidation\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940674274209079298\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751527779000, \"updateTime\": 1751527779000, \"optionsJson\": \"{\\\"0\\\": \\\"none\\\", \\\"1\\\": \\\"custom\\\", \\\"2\\\": \\\"idCard\\\", \\\"3\\\": \\\"creditCode\\\", \\\"4\\\": \\\"mobile\\\", \\\"5\\\": \\\"phone\\\"}\"}, {\"id\": \"1940674278336274436\", \"code\": null, \"name\": \"regex\", \"type\": 1, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940674274209079298\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751527779000, \"updateTime\": 1751527779000, \"optionsJson\": \"{}\"}, {\"id\": \"1940674278336274437\", \"code\": null, \"name\": \"prompt\", \"type\": 1, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940674274209079298\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751527779000, \"updateTime\": 1751527779000, \"optionsJson\": \"{}\"}]}], \"showPlaceholder\": false}, {\"id\": \"1940687680404234241\", \"fields\": [{\"id\": \"1940687680404234241\", \"code\": \"Idcard\", \"name\": \"身份证\", \"sort\": 9, \"length\": 20, \"remark\": \"身份证号\", \"addFlag\": 1, \"bizType\": \"0\", \"encFlag\": 0, \"encType\": 0, \"linkage\": {\"effect\": \"show\", \"enabled\": false, \"condition\": \"equals\", \"targetFieldId\": null, \"targetFieldValue\": null}, \"version\": null, \"editFlag\": 1, \"manageId\": \"1938148839818596353\", \"required\": false, \"fieldType\": 1, \"createTime\": 1751530974000, \"parentCode\": \"0\", \"pcViewFlag\": 1, \"appViewFlag\": 1, \"placeholder\": \"\", \"fieldConfExtObj\": {\"value\": \"0\"}, \"fieldConfExtDOList\": [{\"id\": \"1940687684137164801\", \"code\": null, \"name\": \"textType\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940687680404234241\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751530975000, \"updateTime\": 1751530975000, \"optionsJson\": \"{\\\"0\\\": \\\"single\\\", \\\"1\\\": \\\"multi\\\"}\"}, {\"id\": \"1940687684137164802\", \"code\": null, \"name\": \"duplicateCheck\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940687680404234241\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751530975000, \"updateTime\": 1751530975000, \"optionsJson\": \"{\\\"0\\\": \\\"check\\\", \\\"1\\\": \\\"noCheck\\\"}\"}, {\"id\": \"1940687684137164803\", \"code\": null, \"name\": \"dataValidation\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940687680404234241\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751530975000, \"updateTime\": 1751530975000, \"optionsJson\": \"{\\\"0\\\": \\\"none\\\", \\\"1\\\": \\\"custom\\\", \\\"2\\\": \\\"idCard\\\", \\\"3\\\": \\\"creditCode\\\", \\\"4\\\": \\\"mobile\\\", \\\"5\\\": \\\"phone\\\"}\"}, {\"id\": \"1940687684137164804\", \"code\": null, \"name\": \"regex\", \"type\": 1, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940687680404234241\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751530975000, \"updateTime\": 1751530975000, \"optionsJson\": \"{}\"}, {\"id\": \"1940687684137164805\", \"code\": null, \"name\": \"prompt\", \"type\": 1, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940687680404234241\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751530975000, \"updateTime\": 1751530975000, \"optionsJson\": \"{}\"}]}], \"showPlaceholder\": false}, {\"id\": \"1940968735346536450\", \"fields\": [{\"id\": \"1940968735346536450\", \"code\": \"time\", \"name\": \"时间\", \"sort\": 11, \"length\": 11, \"remark\": \"时间\", \"addFlag\": 1, \"bizType\": \"0\", \"encFlag\": 0, \"encType\": 0, \"linkage\": {\"effect\": \"show\", \"enabled\": false, \"condition\": \"equals\", \"targetFieldId\": null, \"targetFieldValue\": null}, \"version\": null, \"editFlag\": 1, \"manageId\": \"1938148839818596353\", \"required\": false, \"fieldType\": 5, \"createTime\": 1751597983000, \"parentCode\": \"0\", \"pcViewFlag\": 1, \"appViewFlag\": 1, \"placeholder\": \"\", \"fieldConfExtObj\": {}, \"fieldConfExtDOList\": [{\"id\": \"1940968739465342978\", \"code\": null, \"name\": \"datePrecision\", \"type\": 2, \"value\": \"2\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940968735346536450\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 5, \"createTime\": 1751597984000, \"updateTime\": 1751597984000, \"optionsJson\": \"\\\"{\\\\\\\"0\\\\\\\":\\\\\\\"选至年例：YYYY\\\\\\\",\\\\\\\"1\\\\\\\":\\\\\\\"选至月例：YYYY/MM\\\\\\\",\\\\\\\"2\\\\\\\":\\\\\\\"选至日例：YYYY/MM/DD\\\\\\\",\\\\\\\"3\\\\\\\":\\\\\\\"选至时例：YYYY/MM/DD HH:00\\\\\\\",\\\\\\\"4\\\\\\\":\\\\\\\"选至分例：YYYY/MM/DD HH:mm\\\\\\\",\\\\\\\"5\\\\\\\":\\\\\\\"选至秒例：YYYY/MM/DD HH:mm:ss\\\\\\\"}\\\"\"}, {\"id\": \"1940968739465342979\", \"code\": null, \"name\": \"code2\", \"type\": 1, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1940968735346536450\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 5, \"createTime\": 1751597984000, \"updateTime\": 1751597984000, \"optionsJson\": \"\\\"{\\\\\\\"0\\\\\\\":\\\\\\\"选至年例：YYYY\\\\\\\",\\\\\\\"1\\\\\\\":\\\\\\\"选至月例：YYYY/MM\\\\\\\",\\\\\\\"2\\\\\\\":\\\\\\\"选至日例：YYYY/MM/DD\\\\\\\",\\\\\\\"3\\\\\\\":\\\\\\\"选至时例：YYYY/MM/DD HH:00\\\\\\\",\\\\\\\"4\\\\\\\":\\\\\\\"选至分例：YYYY/MM/DD HH:mm\\\\\\\",\\\\\\\"5\\\\\\\":\\\\\\\"选至秒例：YYYY/MM/DD HH:mm:ss\\\\\\\"}\\\"\"}]}, {\"id\": \"1940700568388911106\", \"code\": \"timearea\", \"name\": \"时间段\", \"addFlag\": 1, \"bizType\": \"0\", \"linkage\": {\"effect\": \"show\", \"enabled\": false, \"condition\": \"equals\", \"targetFieldId\": null, \"targetFieldValue\": null}, \"editFlag\": 1, \"manageId\": \"1938148839818596353\", \"required\": false, \"fieldType\": 6, \"pcViewFlag\": 1, \"placeholder\": \"\"}], \"showPlaceholder\": false}, {\"id\": \"1942099392298754049\", \"fields\": [{\"id\": \"1942099392298754049\", \"code\": \"textarea\", \"name\": \"多行文本\", \"sort\": 13, \"length\": 20, \"remark\": \"多行文本\", \"addFlag\": 1, \"bizType\": \"0\", \"encFlag\": 0, \"encType\": 0, \"linkage\": {\"effect\": \"show\", \"enabled\": false, \"condition\": \"equals\", \"targetFieldId\": null, \"targetFieldValue\": null}, \"version\": null, \"editFlag\": 1, \"manageId\": \"1938148839818596353\", \"required\": false, \"fieldType\": 1, \"createTime\": 1751867552000, \"parentCode\": \"0\", \"pcViewFlag\": 1, \"appViewFlag\": 1, \"placeholder\": \"\", \"fieldConfExtObj\": {\"value\": \"1\"}, \"fieldConfExtDOList\": [{\"id\": \"1942099394257494018\", \"code\": null, \"name\": \"textType\", \"type\": 2, \"value\": \"1\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{\\\"0\\\": \\\"single\\\", \\\"1\\\": \\\"multi\\\"}\"}, {\"id\": \"1942099394257494019\", \"code\": null, \"name\": \"duplicateCheck\", \"type\": 2, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{\\\"0\\\": \\\"check\\\", \\\"1\\\": \\\"noCheck\\\"}\"}, {\"id\": \"1942099394324602882\", \"code\": null, \"name\": \"dataValidation\", \"type\": 2, \"value\": \"4\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{\\\"0\\\": \\\"none\\\", \\\"1\\\": \\\"custom\\\", \\\"2\\\": \\\"idCard\\\", \\\"3\\\": \\\"creditCode\\\", \\\"4\\\": \\\"mobile\\\", \\\"5\\\": \\\"phone\\\"}\"}, {\"id\": \"1942099394324602883\", \"code\": null, \"name\": \"regex\", \"type\": 1, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394324602884\", \"code\": null, \"name\": \"prompt\", \"type\": 1, \"value\": \"手机号不符合规范\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394324602885\", \"code\": null, \"name\": \"numberType\", \"type\": null, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394324602886\", \"code\": null, \"name\": \"decimalPlaces\", \"type\": null, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394324602887\", \"code\": null, \"name\": \"datePrecision\", \"type\": null, \"value\": \"0\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394324602888\", \"code\": null, \"name\": \"code2\", \"type\": null, \"value\": \"\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394324602889\", \"code\": null, \"name\": \"sizeLimit\", \"type\": null, \"value\": \"1\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394412683265\", \"code\": null, \"name\": \"countLimit\", \"type\": null, \"value\": \"1\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}, {\"id\": \"1942099394412683266\", \"code\": null, \"name\": \"allowedTypes\", \"type\": null, \"value\": \"jpeg,bmp,jpg,png,pdf\", \"creator\": \"1\", \"deleted\": false, \"fieldId\": \"1942099392298754049\", \"updater\": \"1\", \"parentId\": null, \"tenantId\": 1, \"checkType\": null, \"fieldType\": 1, \"createTime\": 1751867553000, \"updateTime\": 1751867553000, \"optionsJson\": \"{}\"}]}], \"showPlaceholder\": false}]",
          "createTime": 1751527793000
      },
      "msg": ""
  }
  },
  {
    url: '/data/field-conf/list-base',
    type: 'GET',
    response: {
      "code": 0,
      "data": [
          {
              "id": "1943563868319539201",
              "manageId": "1943559705967841281",
              "code": "姓名",
              "name": "name",
              "remark": "请输入姓名",
              "fieldType": 1,
              "bizType": "1",
              "encType": 0,
              "length": 20,
              "encFlag": 0,
              "addFlag": 0,
              "editFlag": 0,
              "appViewFlag": 0,
              "pcViewFlag": 0,
              "sort": 8,
              "version": null,
              "createTime": 1752216711000,
              "parentCode": "0",
              "fieldConfExtDOList": []
          }
      ],
      "msg": ""
    }
  },
]
