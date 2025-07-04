<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle" width="30%" @close="handleClose">
    <el-form ref="fieldForm" :model="formData" label-width="100px" :rules="formRules">
      <el-form-item label="证件类型" prop="type">
        <!-- 下拉框 -->
        <el-select v-if="dialogType === 'people'" v-model="formData.type" placeholder="请选择证件类型">
          <el-option label="身份证" value="1" />
          <el-option label="护照" value="2" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="dialogType === 'people'" label="证件号码" prop="idCard">
        <!-- 输入框 -->
        <el-input v-model="formData.idCard" placeholder="请输入证件号码" />
      </el-form-item>
      <!-- 该人口未入库 / 该人口已入库 -->

      <el-form-item v-if="dialogType === 'house'" label="标准地址">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item v-if="dialogType === 'house'" label="房号">
        <el-select v-model="formData.type" />
      </el-form-item>
      <!-- 会提示该房间已入库 /  该房屋未入库 -->
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <!-- 人口： 该人口未入库  添加（跳转新建）、暂不添加（关闭弹窗） -->
        <!-- 人口： 该人口已入库  编辑人口信息 （跳转编辑页面） -->
        <!-- 房屋：添加（跳转新建）、暂不添加（关闭弹窗）、 编辑房信息（编辑页面） -->
        <el-button @click="handleClose()">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 认</el-button>
      </span>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { FormRules } from 'element-plus'

const emit = defineEmits(['submit'])

const dialogVisible = ref(false) // 弹窗显示状态
const dialogTitle = ref('') // 弹窗标题
const dialogType = ref<'people' | 'house' | 'check' | undefined>(undefined) // 弹窗类型
const fieldForm = ref<any>(null) // 表单引用
const isStored = ref(false) // 是否入库
const formData = ref<any>({
  type: '', // 证件类型
  idCard: '', // 证件号码
  address: '', // 标准地址
  roomId: '', // 房号
  roomName: '' // 房号名称
}) // 表单数据

const titleMap = {
  check: '校验证件',
  people: '校验证件',
  house: '校验证件'
}

const validateIdCard = (_rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入证件号码'))
  }
  // 这里调用你的接口
  apiCheckIdCard(value).then(res => {
    if (res.valid) {
      callback()
      isStored.value = true
    } else {
      callback(new Error(res.message || '证件号码校验失败'))
      isStored.value = false
    }
  }).catch(e => {
    callback(new Error('校验接口异常'))
  })
}

async function apiCheckIdCard(idCard: string) {
  // 这里用伪代码，实际用你的请求方法
  // return await axios.post('/api/check-idcard', { idCard })
  // 假设返回 { valid: true/false, message: 'xxx' }
  return { valid: true, message: '' }
}



const formRules = reactive<FormRules>({
  idCard: [
    { required: true, message: '请输入证件号码', trigger: 'blur' },
    { validator: validateIdCard, trigger: 'blur' }
  ]
})



// 重置表单
const resetForm = () => {
  ;(fieldForm.value as any)?.resetFields()
  formData.value = null
}

// 关闭弹窗
const handleClose = () => {
  resetForm()
  dialogVisible.value = false
}

const handleSubmit = () => {
  console.log('提交')
  fieldForm.value.validate((valid: boolean) => {
    if (valid) {
      console.log('表单数据', formData.value)
      emit('submit', {
        type: dialogType.value,
        data: formData.value
      })
    } else {
      console.log('表单验证失败')
    }
  })
}

// 打开弹窗（支持回显）
const open = async (type: 'people' | 'house' | 'check', row?: any) => {
  console.log('打开弹窗', type, row)
  dialogTitle.value = titleMap[type]
  dialogType.value = type
  dialogVisible.value = true
  // todo zhaokun 这里好像要调接口获取下数据
}

defineExpose({ open })
</script>
