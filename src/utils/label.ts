export const generateOperationMock = (manageId: string) => {
  return [
    {
        manageId,
        operateName: "添加",
        operateType: 0,
        showFlag: 0,
        sort: 0,
    },
    {
        manageId,
        "operateName": "编辑",
        "operateType": 1,
        "showFlag": 0,
        "sort": 0,
    },
    {
        manageId,
        "operateName": "删除",
        "operateType": 2,
        "showFlag": 0,
        "sort": 0,
    },
    {
        manageId,
        "operateName": "导入",
        "operateType": 3,
        "showFlag": 0,
        "sort": 0,
    },
    {
        manageId,
        "operateName": "导出",
        "operateType": 4,
        "showFlag": 0,
        "sort": 0,
    }
]
}