<template>
  <ContentWrap>
    <!-- 流程设计器，负责绘制流程等 -->
    流程图删掉了
  </ContentWrap>
</template>

<script lang="ts" setup>
import * as ModelApi from '@/api/bpm/model'
import { BpmModelFormType } from '@/utils/constants'
import * as FormApi from '@/api/bpm/form'

defineOptions({ name: 'BpmModelEditor' })

defineProps<{
  modelId?: string
  modelKey: string
  modelName: string
  value?: string
}>()

const emit = defineEmits(['success', 'init-finished'])
const message = useMessage() // 国际化

// 表单信息
const formFields = ref<string[]>([])
// 表单类型，暂仅限流程表单
const formType = ref(BpmModelFormType.NORMAL)
provide('formFields', formFields)
provide('formType', formType)

// 注入流程数据
const xmlString = inject('processData') as Ref
// 注入模型数据
const modelData = inject('modelData') as Ref

const modeler = shallowRef() // BPMN Modeler
const processDesigner = ref()
const controlForm = ref({
  simulation: true,
  labelEditing: false,
  labelVisible: false,
  prefix: 'flowable',
  headerButtonSize: 'mini',
  additionalModel: []
})
const model = ref<ModelApi.ModelVO>() // 流程模型的信息

/** 初始化 modeler */
const initModeler = async (item: any) => {
  // 先初始化模型数据
  model.value = modelData.value
  modeler.value = item
}

/** 添加/修改模型 */
const save = async (bpmnXml: string) => {
  try {
    xmlString.value = bpmnXml
    emit('success', bpmnXml)
  } catch (error) {
    console.error('保存失败:', error)
    message.error('保存失败')
  }
}

/** 监听表单 ID 变化，加载表单数据 */
watch(
  () => modelData.value.formId,
  async (newFormId) => {
    if (newFormId && modelData.value.formType === BpmModelFormType.NORMAL) {
      const data = await FormApi.getForm(newFormId)
      formFields.value = data.fields
    } else {
      formFields.value = []
    }
  },
  { immediate: true }
)

// 在组件卸载时清理
onBeforeUnmount(() => {
  modeler.value = null
  // 清理全局实例
  const w = window as any
  if (w.bpmnInstances) {
    w.bpmnInstances = null
  }
})
</script>
<style lang="scss">
.process-panel__container {
  position: absolute;
  top: 172px;
  right: 70px;
}
</style>
