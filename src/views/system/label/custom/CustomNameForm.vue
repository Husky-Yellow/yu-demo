<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-form-item label="标签名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入标签名称" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import * as LabelApi from '@/api/system/label'
import { SUCCESS_MESSAGES } from '@/utils/constants'
import { FormRules } from 'element-plus'
import { BooleanEnum } from '@/config/constants/enums/label'

defineOptions({ name: 'SystemLabelCustomNameForm' })

// 定义弹窗类型和对应的标题映射为常量
const DIALOG_TYPE_TITLES: { [key: string]: string } = {
  edit: '编辑',
  create: '新增',
  addChild: '增加子节点'
};

const message = useMessage() // 消息弹窗
const { query } = useRoute() // 查询参数

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  name: undefined,
  type: BooleanEnum.FALSE,
  parentId: 0,
  labelId: query.id
})
const formRules = reactive<FormRules>({
  name: [{ required: true, message: '部门名称不能为空', trigger: 'blur' }],
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, row: any) => {
  // 检查传入的类型是否有效
  if (!DIALOG_TYPE_TITLES[type]) {
    console.error(`无效的弹窗类型: ${type}`);
    return;
  }

  // 设置弹窗可见和标题
  dialogVisible.value = true;
  dialogTitle.value = DIALOG_TYPE_TITLES[type];
  formType.value = type;

  resetForm()

  try {
    formLoading.value = true
    // 根据不同类型设置表单数据
    switch (type) {
      case 'addChild':
        formData.value = {
          ...row,
          name: undefined,
          id: '',
          parentId: row.id
        };
        break;
      case 'create':
        formData.value = {
          id: undefined,
          name: undefined,
          parentId: 0,
          type: BooleanEnum.FALSE,
          labelId: query.id
        };
        break;
      default:
        formData.value = { ...row };
    }
  } catch (error) {
    console.error('设置表单数据时出错:', error);
  } finally {
    // 隐藏表单加载状态
    formLoading.value = false;
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调


// 提取表单提交的逻辑到一个单独的函数，提高代码的复用性和可测试性
const submitFormData = async (formType, data) => {
  if (formType === 'create' || formType === 'addChild') {
    return await LabelApi.postLabelManageCreate(data);
  }
  return await LabelApi.putLabelManageUpdate(data);
};

const submitForm = async () => {
  // 校验表单引用是否存在
  if (!formRef) {
    console.error('表单引用不存在');
    return;
  }

  try {
    // 校验表单
    const valid = await formRef.value.validate();
    if (!valid) {
      console.error('表单校验不通过');
      return;
    }

    // 开始提交表单，显示加载状态
    formLoading.value = true;

    const data = formData.value;
    const currentFormType = formType.value;

    // 调用单独的表单提交函数
    await submitFormData(currentFormType, data);

    // 根据表单类型显示相应的成功消息
    const successMessage = SUCCESS_MESSAGES[currentFormType] || SUCCESS_MESSAGES.update;
    message.success(successMessage);

    // 关闭弹窗
    dialogVisible.value = false;

    // 发送操作成功的事件
    emit('success');
  } catch (error) {
    // 统一处理请求错误
    console.error('表单提交失败:', error);
    message.error('表单提交失败，请稍后重试');
  } finally {
    // 无论请求成功还是失败，都隐藏加载状态
    formLoading.value = false;
  }
};

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    name: undefined,
    type: BooleanEnum.FALSE,
    parentId: 0,
    labelId: query.id
  }
  formRef.value?.resetFields()
}

</script>
