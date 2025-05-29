/**
 * 表单设计器类型定义
 */

// 选项
export interface FormDesignerOption {
  value: string | number | boolean
  label: string
  disabled?: boolean
}

// 表单项属性
export interface FormDesignerFormItemProps {
  options?: FormDesignerOption[]
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  size?: 'large' | 'default' | 'small'
  clearable?: boolean
  label?: string
  required?: boolean
  [key: string]: unknown
}

// 组件类型
export type FormDesignerComponentType = 'input' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'date' | 'time' | 'number'

// 表单项
export interface FormDesignerFormItem {
  label?: string
  type: FormDesignerComponentType
  props: FormDesignerFormItemProps
  placeholder?: string
  isGrid?: boolean
  id?: string
  required?: boolean
}

// 选项组件类型
export type FormDesignerOptionComponentType = 'select' | 'radio' | 'checkbox'

// 组件配置
export interface FormDesignerComponentConfig {
  type: FormDesignerComponentType
  label: string
  icon: any
  props: FormDesignerFormItemProps
}

// 事件
export interface FormDesignerEvents {
  select: [item: FormDesignerFormItem]
  remove: [index: number]
}

// 选项渲染器属性
export interface FormDesignerOptionsRendererProps {
  type: FormDesignerOptionComponentType
  options: FormDesignerOption[]
}