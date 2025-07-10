<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="80px"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户姓名" prop="nickname">
            <el-input v-model="formData.nickname" placeholder="请输入用户姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所属组织" prop="deptId">
            <el-tree-select
              v-model="formData.deptId"
              :data="deptList"
              :props="defaultProps"
              check-strictly
              node-key="id"
              placeholder="请选择所属组织"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="登录账号" prop="username">
            <el-input v-model="formData.username" maxlength="11" placeholder="请输入登录账号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="登录密码" prop="password">
            <el-input
              v-model="formData.password"
              placeholder="请输入登录密码"
              show-password
              type="password"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="手机号码" prop="mobile">
            <el-input v-model="formData.mobile" maxlength="11" placeholder="请输入手机号码" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="敏感密码" prop="sensitivePwd">
            <el-input
              v-model="formData.sensitivePwd"
              placeholder="请输入敏感密码"
              show-password
              type="password"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="联系邮箱" prop="email">
            <el-input v-model="formData.email" maxlength="50" placeholder="请输入邮箱" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注" prop="remark">
            <el-input
              v-model="formData.remark"
              maxlength="50"
              placeholder="请输入备注"
              type="textarea"
              :rows="1"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="所属岗位">
            <div class="display-block">
              <el-button type="primary" text @click="openForm"> 所属岗位 </el-button>
              <el-row>
                <el-col v-for="id in formData.postIds" :key="id" :span="24">
                  <el-tag @close="handleClose(id)" closable>
                    {{ seePath(id) }}
                  </el-tag>
                </el-col>
              </el-row>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- todo 这个功能迟早得调整 -->
    <SubPositionForm
      ref="subPositionFormRef"
      @success="setPosition"
      :post-ids="formData.postIds || []"
    />
    <template #footer>
      <el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script lang="ts" setup>
import { CommonStatusEnum } from '@/utils/constants'
import { defaultProps, handleTree, findLinkPath } from '@/utils/tree'
import SubPositionForm from './SubPositionForm.vue'
import * as PostApi from '@/api/system/post'
import * as DeptApi from '@/api/system/dept'
import * as UserApi from '@/api/system/user'
import { FormRules } from 'element-plus'

defineOptions({ name: 'SystemSubscriberSubForm' })

const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const baseUserInfo = ref<Partial<UserApi.UserResp>>({}) // 存储数据，用于判断密码是否修改
const formData = ref<Partial<UserApi.UserResp>>({
  id: undefined,
  nickname: undefined,
  deptId: undefined,
  username: undefined,
  password: undefined,
  mobile: undefined,
  sensitivePwd: undefined,
  email: undefined,
  remark: undefined,
  postIds: [],
  status: CommonStatusEnum.ENABLE
})
const formRules = reactive<FormRules>({
  nickname: [{ required: true, message: '用户名称不能为空', trigger: 'blur' }],
  deptId: [{ required: true, message: '用户名称不能为空', trigger: 'blur' }],
  username: [{ required: true, message: '用户昵称不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '用户密码不能为空', trigger: 'blur' }],
  sensitivePwd: [{ required: true, message: '用户密码不能为空', trigger: 'blur' }],
  email: [
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ],
  mobile: [
    {
      required: true,
      pattern: /^(?:(?:\+|00)86)?1(?:3[\d]|4[5-79]|5[0-35-9]|6[5-7]|7[0-8]|8[\d]|9[189])\d{8}$/,
      message: '请输入正确的手机号码',
      trigger: 'blur'
    }
  ]
})
const formRef = ref() // 表单 Ref
const deptList = ref<Tree[]>([]) // 树形结构
const deptTree = ref<DeptApi.DeptNode[]>([])
const postList = ref([] as PostApi.PostVO[]) // 岗位列表

const handleClose = (id: number) => {
  formData.value.postIds = formData.value?.postIds?.filter((item) => item !== id)
}

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = '新增'
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      const userInfo = await UserApi.getUser(id)
      formData.value = userInfo
      baseUserInfo.value = userInfo
    } finally {
      formLoading.value = false
    }
  }
  // 加载部门树
  deptList.value = handleTree(await DeptApi.getSimpleDeptList())
  // 加载岗位列表
  postList.value = await PostApi.getSimplePostList()

  const deptTreeData = await DeptApi.getDeptTreeWithPost()
  deptTree.value = deptTreeData
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  if (!formRef) return
  const valid = await formRef.value.validate()
  if (!valid) return
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as UserApi.UserResp
    if (formType.value === 'create') {
      await UserApi.createUser(data)
      message.success('新增成功')
    } else {
      // 判断密码有没有修改， 没有修改就删掉 sensitivePwd password
      if (baseUserInfo.value.password === data.password) {
        delete data.password
      }
      if (baseUserInfo.value.sensitivePwd === data.sensitivePwd) {
        delete data.sensitivePwd
      }
      await UserApi.updateUser(data)
      message.success('修改成功')
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

const setPosition = (val) => {
  formData.value.postIds = val
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    nickname: undefined,
    deptId: undefined,
    username: undefined,
    password: undefined,
    mobile: undefined,
    sensitivePwd: undefined,
    email: undefined,
    remark: undefined,
    postIds: [],
    status: CommonStatusEnum.ENABLE
  }
  formRef.value?.resetFields()
}

/** 添加/修改操作 */
const subPositionFormRef = ref()
const openForm = () => {
  subPositionFormRef.value.open()
}

const seePath = (id: number) => {
  const node = findLinkPath(deptTree.value, id)
  return node?.map((item) => item.name).join(' > ')
}
</script>
