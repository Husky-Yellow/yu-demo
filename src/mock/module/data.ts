export default [
  {
    url: '/admin-api/data/label-manage/page',
    type: 'get',
    response: {
      code: 200,
      data: {
        list: [
          {
            id: 1
          }
        ]
      }
    }
  },
  {
    url: '/data/field-conf/list',
    type: 'get',
    response: {
      code: 0,
      data: [
        {
          id: '1935951343050633217',
          manageId: '1935524876651073537',
          code: 'name',
          name: '姓名',
          remark: 'dolore',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 55,
          encFlag: 0,
          addFlag: 1,
          editFlag: 1,
          appViewFlag: 1,
          pcViewFlag: 1,
          sort: 1,
          version: 1,
          createTime: 1750401743000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1935951343205822465',
          manageId: '1935524876651073537',
          code: 'date',
          name: '开始时间',
          remark: 'dolore',
          fieldType: 6,
          bizType: '0',
          encType: 0,
          length: 0,
          encFlag: 0,
          addFlag: 1,
          editFlag: 1,
          appViewFlag: 1,
          pcViewFlag: 1,
          sort: 2,
          version: 1,
          createTime: 1750401743000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1937322832972832770',
          manageId: '1935524876651073537',
          code: 'code',
          name: '名字',
          remark: '名字',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 1,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 3,
          version: null,
          createTime: 1750728732000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1937323471031328770',
          manageId: '1935524876651073537',
          code: 'name',
          name: 'name',
          remark: 'name',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 1,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 4,
          version: null,
          createTime: 1750728884000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1937388100895928322',
          manageId: '1935524876651073537',
          code: 'textarea',
          name: '多行文本',
          remark: '多行文本',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 10,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 5,
          version: null,
          createTime: 1750744293000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1937389476501811201',
          manageId: '1935524876651073537',
          code: 'TREXT',
          name: 'DUOHAN',
          remark: 'DUOHAN',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 88,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 6,
          version: null,
          createTime: 1750744621000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1937390336233467906',
          manageId: '1935524876651073537',
          code: 'textaer',
          name: '文本域',
          remark: '文本域',
          fieldType: 1,
          bizType: '0',
          encType: 0,
          length: 10,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 7,
          version: null,
          createTime: 1750744826000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1937720177109540865',
          manageId: '1935524876651073537',
          code: 'date1',
          name: '时间',
          remark: 'dolore',
          fieldType: 5,
          bizType: '0',
          encType: 0,
          length: 55,
          encFlag: 0,
          addFlag: 1,
          editFlag: 1,
          appViewFlag: 1,
          pcViewFlag: 1,
          sort: 8,
          version: 1,
          createTime: 1750823466000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1938080677846671362',
          manageId: '1935524876651073537',
          code: 'radio',
          name: '单选',
          remark: '单选',
          fieldType: 3,
          bizType: '0',
          encType: 0,
          length: 1,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 9,
          version: null,
          createTime: 1750909416000,
          parentCode: '0',
          fieldConfExtDOList: null
        },
        {
          id: '1938080677905391617',
          manageId: '1935524876651073537',
          code: 'undefined_parent_code',
          name: '查看层级_parent_name',
          remark: '单选',
          fieldType: 3,
          bizType: '0',
          encType: 0,
          length: 1,
          encFlag: 0,
          addFlag: 0,
          editFlag: 0,
          appViewFlag: 0,
          pcViewFlag: 0,
          sort: 10,
          version: null,
          createTime: 1750909416000,
          parentCode: '0',
          fieldConfExtDOList: null
        }
      ],
      msg: ''
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
  }
]
