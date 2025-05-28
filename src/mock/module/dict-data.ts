export default [
  {
    url: '/admin-api/system/dict-data/simple-list',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            dictType: 'ai_generate_mode',
            value: '1',
            label: '歌词模式',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_generate_mode',
            value: '2',
            label: '描述模式',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_image_status',
            value: '10',
            label: '进行中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'ai_image_status',
            value: '20',
            label: '已完成',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'ai_image_status',
            value: '30',
            label: '已失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'ai_model_type',
            value: '1',
            label: '聊天',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_model_type',
            value: '2',
            label: '图像',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_model_type',
            value: '3',
            label: '音频',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_model_type',
            value: '4',
            label: '视频',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_model_type',
            value: '5',
            label: '向量',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_model_type',
            value: '6',
            label: '重排',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_music_status',
            value: '10',
            label: '进行中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'ai_music_status',
            value: '20',
            label: '已完成',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'ai_music_status',
            value: '30',
            label: '已失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'OpenAI',
            label: 'OpenAI',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'AzureOpenAI',
            label: 'OpenAI 微软',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'Ollama',
            label: 'Ollama',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'YiYan',
            label: '文心一言',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'XingHuo',
            label: '讯飞星火',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'TongYi',
            label: '通义千问',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'StableDiffusion',
            label: 'StableDiffusion',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'Midjourney',
            label: 'Midjourney',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'Suno',
            label: 'Suno',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'DeepSeek',
            label: 'DeepSeek',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'DouBao',
            label: '字节豆包',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'HunYuan',
            label: '腾讯混元',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'SiliconFlow',
            label: '硅基流动',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'ZhiPu',
            label: '智谱',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'MiniMax',
            label: 'MiniMax',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'Moonshot',
            label: '月之暗灭',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_platform',
            value: 'BaiChuan',
            label: '百川智能',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '1',
            label: '自动',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '2',
            label: '电子邮件',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '3',
            label: '消息',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '4',
            label: '评论',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '5',
            label: '段落',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '5',
            label: '段落',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '6',
            label: '文章',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '7',
            label: '博客文章',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '8',
            label: '想法',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_format',
            value: '9',
            label: '大纲',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_language',
            value: '1',
            label: '自动',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_language',
            value: '2',
            label: '中文',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_language',
            value: '3',
            label: '英文',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_language',
            value: '4',
            label: '韩语',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_language',
            value: '5',
            label: '日语',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_length',
            value: '1',
            label: '自动',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_length',
            value: '2',
            label: '短',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_length',
            value: '3',
            label: '中等',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_length',
            value: '4',
            label: '长',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_length',
            value: '4',
            label: '长',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '1',
            label: '自动',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '2',
            label: '友善',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '3',
            label: '随意',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '4',
            label: '友好',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '5',
            label: '专业',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '6',
            label: '诙谐',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '7',
            label: '有趣',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_tone',
            value: '8',
            label: '正式',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_type',
            value: '1',
            label: '撰写',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'ai_write_type',
            value: '2',
            label: '回复',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_form_type',
            value: '10',
            label: '流程表单',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_form_type',
            value: '20',
            label: '业务表单',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_type',
            value: '10',
            label: 'BPMN 设计器',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_model_type',
            value: '20',
            label: 'SIMPLE 设计器',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_oa_leave_type',
            value: '1',
            label: '病假',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_oa_leave_type',
            value: '2',
            label: '事假',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_oa_leave_type',
            value: '3',
            label: '婚假',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_status',
            value: '1',
            label: '审批中',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_status',
            value: '2',
            label: '审批通过',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_status',
            value: '3',
            label: '审批不通过',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_instance_status',
            value: '4',
            label: '已取消',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_listener_type',
            value: 'execution',
            label: '执行监听器',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_listener_type',
            value: 'task',
            label: '任务监听器',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_listener_value_type',
            value: 'class',
            label: 'Java 类',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_listener_value_type',
            value: 'expression',
            label: '表达式',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_process_listener_value_type',
            value: 'delegateExpression',
            label: '代理表达式',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '10',
            label: '角色',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '20',
            label: '部门的成员',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '21',
            label: '部门的负责人',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '22',
            label: '岗位',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '30',
            label: '用户',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '35',
            label: '发起人自选',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '40',
            label: '用户组',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_candidate_strategy',
            value: '60',
            label: '流程表达式',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '0',
            label: '待审批',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '1',
            label: '审批中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '2',
            label: '审批通过',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '3',
            label: '审批不通过',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '4',
            label: '已取消',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '5',
            label: '已退回',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '6',
            label: '委派中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'bpm_task_status',
            value: '7',
            label: '审批通过中',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bank_name',
            value: '0',
            label: '工商银行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bank_name',
            value: '1',
            label: '建设银行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bank_name',
            value: '2',
            label: '农业银行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bank_name',
            value: '3',
            label: '中国银行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bank_name',
            value: '4',
            label: '交通银行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bank_name',
            value: '5',
            label: '招商银行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bind_mode',
            value: '1',
            label: '首次绑定',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bind_mode',
            value: '2',
            label: '注册绑定',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_bind_mode',
            value: '3',
            label: '覆盖绑定',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_enabled_condition',
            value: '1',
            label: '人人分销',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_enabled_condition',
            value: '2',
            label: '指定分销',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_record_biz_type',
            value: '1',
            label: '订单返佣',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_record_biz_type',
            value: '2',
            label: '申请提现',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_record_biz_type',
            value: '3',
            label: '申请提现驳回',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_record_status',
            value: '0',
            label: '待结算',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_record_status',
            value: '1',
            label: '已结算',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_record_status',
            value: '2',
            label: '已取消',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_status',
            value: '0',
            label: '审核中',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_status',
            value: '10',
            label: '审核通过',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_status',
            value: '11',
            label: '提现成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_status',
            value: '20',
            label: '审核不通过',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_status',
            value: '21',
            label: '提现失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_type',
            value: '1',
            label: '钱包',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_type',
            value: '2',
            label: '银行卡',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_type',
            value: '3',
            label: '微信收款码',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_type',
            value: '4',
            label: '支付宝收款码',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_type',
            value: '5',
            label: '微信零钱',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'brokerage_withdraw_type',
            value: '6',
            label: '支付宝余额',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'common_status',
            value: '0',
            label: '开启',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'common_status',
            value: '1',
            label: '关闭',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'crm_audit_status',
            value: '0',
            label: '未提交',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_audit_status',
            value: '10',
            label: '审批中',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_audit_status',
            value: '20',
            label: '审核通过',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_audit_status',
            value: '30',
            label: '审核不通过',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_audit_status',
            value: '40',
            label: '已取消',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_business_end_status_type',
            value: '1',
            label: '赢单',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'crm_business_end_status_type',
            value: '2',
            label: '输单',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'crm_business_end_status_type',
            value: '3',
            label: '无效',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '1',
            label: 'IT',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '2',
            label: '金融业',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '3',
            label: '房地产',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '4',
            label: '商业服务',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '5',
            label: '运输/物流',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '6',
            label: '生产',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '7',
            label: '政府',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_industry',
            value: '8',
            label: '文化传媒',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_level',
            value: '1',
            label: 'A （重点客户）',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_level',
            value: '2',
            label: 'B （普通客户）',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_level',
            value: '3',
            label: 'C （非优先客户）',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '1',
            label: '促销',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '2',
            label: '搜索引擎',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '3',
            label: '广告',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '4',
            label: '转介绍',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '5',
            label: '线上注册',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '6',
            label: '线上咨询',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '7',
            label: '预约上门',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '8',
            label: '陌拜',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '9',
            label: '电话咨询',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_customer_source',
            value: '10',
            label: '邮件咨询',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_follow_up_type',
            value: '1',
            label: '打电话',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_follow_up_type',
            value: '2',
            label: '发短信',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_follow_up_type',
            value: '3',
            label: '上门拜访',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_follow_up_type',
            value: '4',
            label: '微信沟通',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_permission_level',
            value: '1',
            label: '负责人',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_permission_level',
            value: '2',
            label: '只读',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_permission_level',
            value: '3',
            label: '读写',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_status',
            value: '0',
            label: '下架',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'crm_product_status',
            value: '1',
            label: '上架',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '1',
            label: '个',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '2',
            label: '块',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '3',
            label: '只',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '4',
            label: '把',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '5',
            label: '枚',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '6',
            label: '瓶',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '7',
            label: '盒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '8',
            label: '台',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '9',
            label: '吨',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '10',
            label: '千克',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '11',
            label: '米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '12',
            label: '箱',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_product_unit',
            value: '13',
            label: '套',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '1',
            label: '支票',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '2',
            label: '现金',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '3',
            label: '邮政汇款',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '4',
            label: '电汇',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '5',
            label: '网上转账',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '6',
            label: '支付宝',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '7',
            label: '微信支付',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'crm_receivable_return_type',
            value: '8',
            label: '其他',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'date_interval',
            value: '1',
            label: '天',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'date_interval',
            value: '2',
            label: '周',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'date_interval',
            value: '3',
            label: '月',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'date_interval',
            value: '4',
            label: '季度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'date_interval',
            value: '5',
            label: '年',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_audit_status',
            value: '10',
            label: '未审核',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'erp_audit_status',
            value: '20',
            label: '已审核',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '10',
            label: '其它入库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '11',
            label: '其它入库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '20',
            label: '其它出库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '21',
            label: '其它出库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '30',
            label: '调拨入库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '31',
            label: '调拨入库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '32',
            label: '调拨出库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '33',
            label: '调拨出库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '40',
            label: '盘盈入库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '41',
            label: '盘盈入库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '42',
            label: '盘亏出库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '43',
            label: '盘亏出库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '50',
            label: '销售出库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '51',
            label: '销售出库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '60',
            label: '销售退货入库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '61',
            label: '销售退货入库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '70',
            label: '采购入库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '71',
            label: '采购入库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '80',
            label: '采购退货出库',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'erp_stock_record_biz_type',
            value: '81',
            label: '采购退货出库（作废）',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_api_error_log_process_status',
            value: '0',
            label: '未处理',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_api_error_log_process_status',
            value: '1',
            label: '已处理',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'infra_api_error_log_process_status',
            value: '2',
            label: '已忽略',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_boolean_string',
            value: 'true',
            label: '是',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_boolean_string',
            value: 'false',
            label: '否',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_front_type',
            value: '10',
            label: 'Vue2 Element UI 标准模版',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_front_type',
            value: '20',
            label: 'Vue3 Element Plus 标准模版',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_front_type',
            value: '30',
            label: 'Vben2.0 Ant Design Schema 模版',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_front_type',
            value: '40',
            label: 'Vben5.0 Ant Design Schema 模版',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_scene',
            value: '1',
            label: '管理后台',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_scene',
            value: '2',
            label: '用户 APP',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '1',
            label: '单表（增删改查）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '2',
            label: '树表（增删改查）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '10',
            label: '主表（标准模式）',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '11',
            label: '主表（ERP 模式）',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '12',
            label: '主表（内嵌模式）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'infra_codegen_template_type',
            value: '15',
            label: '子表',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_config_type',
            value: '1',
            label: '系统内置',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_config_type',
            value: '2',
            label: '自定义',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '1',
            label: '数据库',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '10',
            label: '本地磁盘',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '11',
            label: 'FTP 服务器',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '12',
            label: 'SFTP 服务器',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_file_storage',
            value: '20',
            label: 'S3 对象存储',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_job_log_status',
            value: '0',
            label: '运行中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_job_log_status',
            value: '1',
            label: '成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'infra_job_log_status',
            value: '2',
            label: '失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'infra_job_status',
            value: '0',
            label: '初始化中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_job_status',
            value: '1',
            label: '正常',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'infra_job_status',
            value: '2',
            label: '暂停',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '0',
            label: '其它',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '1',
            label: '查询',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '2',
            label: '新增',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '3',
            label: '修改',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '4',
            label: '删除',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '5',
            label: '导出',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'infra_operate_type',
            value: '6',
            label: '导入',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_direction_enum',
            value: '1',
            label: '输入',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_direction_enum',
            value: '2',
            label: '输出',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '1',
            label: 'HTTP',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '2',
            label: 'TCP',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '3',
            label: 'WEBSOCKET',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '10',
            label: 'MQTT',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '20',
            label: 'DATABASE',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '21',
            label: 'REDIS_STREAM',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '30',
            label: 'ROCKETMQ',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '31',
            label: 'RABBITMQ',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_bridge_type_enum',
            value: '32',
            label: 'KAFKA',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'iot_data_format',
            value: '0',
            label: '标准数据格式（JSON）',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_data_format',
            value: '1',
            label: '透传/自定义',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_device_state',
            value: '0',
            label: '未激活',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_device_state',
            value: '1',
            label: '在线',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_device_state',
            value: '2',
            label: '离线',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_net_type',
            value: '0',
            label: 'Wi-Fi',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_net_type',
            value: '1',
            label: '蜂窝（2G / 3G / 4G / 5G）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_net_type',
            value: '2',
            label: '以太网',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_net_type',
            value: '3',
            label: '其他',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_plugin_deploy_type',
            value: '0',
            label: 'JAR 部署',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_plugin_deploy_type',
            value: '1',
            label: '独立部署',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_plugin_status',
            value: '0',
            label: '停止',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'iot_plugin_status',
            value: '1',
            label: '运行',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_plugin_type',
            value: '0',
            label: '普通插件',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_plugin_type',
            value: '1',
            label: '设备插件',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_product_device_type',
            value: '0',
            label: '直连设备',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_product_device_type',
            value: '1',
            label: '网关子设备',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_product_device_type',
            value: '2',
            label: '网关设备',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_product_status',
            value: '0',
            label: '开发中',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'iot_product_status',
            value: '1',
            label: '已发布',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'iot_protocol_type',
            value: '0',
            label: '自定义',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_protocol_type',
            value: '1',
            label: 'Modbus',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_protocol_type',
            value: '2',
            label: 'OPC UA',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_protocol_type',
            value: '3',
            label: 'ZigBee',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_protocol_type',
            value: '4',
            label: 'BLE',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_type',
            value: '1',
            label: '属性',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_type',
            value: '2',
            label: '服务',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_type',
            value: '3',
            label: '事件',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'L/min',
            label: '升每分钟',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mg/kg',
            label: '毫克每千克',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'NTU',
            label: '浊度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'pH',
            label: 'PH值',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'dS/m',
            label: '土壤EC值',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'W/㎡',
            label: '太阳总辐射',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mm/hour',
            label: '降雨量',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'var',
            label: '乏',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'cP',
            label: '厘泊',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'aw',
            label: '饱和度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'pcs',
            label: '个',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'cst',
            label: '厘斯',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'bar',
            label: '巴',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'ppt',
            label: '纳克每升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'ppb',
            label: '微克每升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'uS/cm',
            label: '微西每厘米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'N/C',
            label: '牛顿每库仑',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'V/m',
            label: '伏特每米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'ml/min',
            label: '滴速',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mmHg',
            label: '毫米汞柱',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mmol/L',
            label: '血糖',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mm/s',
            label: '毫米每秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'turn/m',
            label: '转每分钟',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'count',
            label: '次',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'gear',
            label: '档',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'stepCount',
            label: '步',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Nm3/h',
            label: '标准立方米每小时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kV',
            label: '千伏',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kVA',
            label: '千伏安',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kVar',
            label: '千乏',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'uw/cm2',
            label: '微瓦每平方厘米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '只',
            label: '只',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '%RH',
            label: '相对湿度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'm³/s',
            label: '立方米每秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kg/s',
            label: '公斤每秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'r/min',
            label: '转每分钟',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 't/h',
            label: '吨每小时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'KCL/h',
            label: '千卡每小时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'L/s',
            label: '升每秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Mpa',
            label: '兆帕',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'm³/h',
            label: '立方米每小时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kvarh',
            label: '千乏时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μg/L',
            label: '微克每升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kcal',
            label: '千卡路里',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'GB',
            label: '吉字节',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'MB',
            label: '兆字节',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'KB',
            label: '千字节',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'B',
            label: '字节',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μg/(d㎡·d)',
            label: '微克每平方分米每天',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '',
            label: '无',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'ppm',
            label: '百万分率',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'pixel',
            label: '像素',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Lux',
            label: '照度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'grav',
            label: '重力加速度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'dB',
            label: '分贝',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '%',
            label: '百分比',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'lm',
            label: '流明',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'bit',
            label: '比特',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'g/mL',
            label: '克每毫升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'g/L',
            label: '克每升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mg/L',
            label: '毫克每升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μg/m³',
            label: '微克每立方米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mg/m³',
            label: '毫克每立方米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'g/m³',
            label: '克每立方米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kg/m³',
            label: '千克每立方米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'nF',
            label: '纳法',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'pF',
            label: '皮法',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μF',
            label: '微法',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'F',
            label: '法拉',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Ω',
            label: '欧姆',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μA',
            label: '微安',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mA',
            label: '毫安',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kA',
            label: '千安',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'A',
            label: '安培',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mV',
            label: '毫伏',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'V',
            label: '伏特',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'ms',
            label: '毫秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 's',
            label: '秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'min',
            label: '分钟',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'h',
            label: '小时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'day',
            label: '日',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'week',
            label: '周',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'month',
            label: '月',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'year',
            label: '年',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kn',
            label: '节',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'km/h',
            label: '千米每小时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'm/s',
            label: '米每秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '″',
            label: '秒',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '′',
            label: '分',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '°',
            label: '度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'rad',
            label: '弧度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Hz',
            label: '赫兹',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μW',
            label: '微瓦',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mW',
            label: '毫瓦',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kW',
            label: '千瓦特',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'W',
            label: '瓦特',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'cal',
            label: '卡路里',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kW·h',
            label: '千瓦时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Wh',
            label: '瓦时',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'eV',
            label: '电子伏',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kJ',
            label: '千焦',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'J',
            label: '焦耳',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '℉',
            label: '华氏度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'K',
            label: '开尔文',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 't',
            label: '吨',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '°C',
            label: '摄氏度',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mPa',
            label: '毫帕',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'hPa',
            label: '百帕',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kPa',
            label: '千帕',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'Pa',
            label: '帕斯卡',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mg',
            label: '毫克',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'g',
            label: '克',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'kg',
            label: '千克',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'N',
            label: '牛',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mL',
            label: '毫升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'L',
            label: '升',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mm³',
            label: '立方毫米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'cm³',
            label: '立方厘米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'km³',
            label: '立方千米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'm³',
            label: '立方米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'h㎡',
            label: '公顷',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'c㎡',
            label: '平方厘米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'm㎡',
            label: '平方毫米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'k㎡',
            label: '平方千米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: '㎡',
            label: '平方米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'nm',
            label: '纳米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'μm',
            label: '微米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'mm',
            label: '毫米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'cm',
            label: '厘米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'dm',
            label: '分米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'km',
            label: '千米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_thing_model_unit',
            value: 'm',
            label: '米',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_validate_type',
            value: '0',
            label: '弱校验',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'iot_validate_type',
            value: '1',
            label: '免校验',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '0',
            label: '管理员调整',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '1',
            label: '邀新奖励',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '4',
            label: '签到奖励',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '5',
            label: '抽奖奖励',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '11',
            label: '下单奖励',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '12',
            label: '下单奖励（整单取消）',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'member_experience_biz_type',
            value: '13',
            label: '下单奖励（单个退款）',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '1',
            label: '签到',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '2',
            label: '管理员修改',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '11',
            label: '订单积分抵扣',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '12',
            label: '订单积分抵扣（整单取消）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '13',
            label: '订单积分抵扣（单个退款）',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '21',
            label: '订单积分奖励',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '22',
            label: '订单积分奖励（整单取消）',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'member_point_biz_type',
            value: '23',
            label: '订单积分奖励（单个退款）',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_auto_reply_request_match',
            value: '1',
            label: '完全匹配',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'mp_auto_reply_request_match',
            value: '2',
            label: '半匹配',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'text',
            label: '文本',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'image',
            label: '图片',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'voice',
            label: '语音',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'video',
            label: '视频',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'shortvideo',
            label: '小视频',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'news',
            label: '图文',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'music',
            label: '音乐',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'location',
            label: '地理位置',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'link',
            label: '链接',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'mp_message_type',
            value: 'event',
            label: '事件',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'wx_wap',
            label: '微信 Wap 网站支付',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'wx_app',
            label: '微信 App 支付',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'wx_native',
            label: '微信扫码支付',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'wx_bar',
            label: '微信条码支付',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'alipay_pc',
            label: '支付宝 PC 网站支付',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'alipay_wap',
            label: '支付宝 Wap 网站支付',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'alipay_app',
            label: '支付宝 App 支付',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'alipay_bar',
            label: '支付宝条码支付',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'alipay_qr',
            label: '支付宝扫码支付',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'mock',
            label: '模拟支付',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'pay_channel_code',
            value: 'wallet',
            label: '钱包',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_status',
            value: '0',
            label: '等待通知',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_status',
            value: '10',
            label: '通知成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_status',
            value: '20',
            label: '通知失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_status',
            value: '21',
            label: '请求成功，但是结果失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_status',
            value: '22',
            label: '请求失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_type',
            value: '1',
            label: '支付单',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'pay_notify_type',
            value: '2',
            label: '退款单',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '0',
            label: '等待支付',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '10',
            label: '支付成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '20',
            label: '已退款',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_order_status',
            value: '30',
            label: '支付关闭',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_status',
            value: '0',
            label: '等待退款',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_status',
            value: '10',
            label: '退款成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_refund_status',
            value: '20',
            label: '退款失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'pay_transfer_status',
            value: '0',
            label: '等待转账',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'pay_transfer_status',
            value: '5',
            label: '转账进行中',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'pay_transfer_status',
            value: '10',
            label: '转账成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'pay_transfer_status',
            value: '20',
            label: '转账失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'product_spu_status',
            value: '0',
            label: '仓库中',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'product_spu_status',
            value: '-1',
            label: '回收站',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'product_spu_status',
            value: '1',
            label: '销售中',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '10',
            label: '未开始',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '20',
            label: '进行中',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '30',
            label: '已结束',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'promotion_activity_status',
            value: '40',
            label: '已关闭',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_banner_position',
            value: '5',
            label: '满减送页',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_banner_position',
            value: '4',
            label: '限时折扣页',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_banner_position',
            value: '3',
            label: '砍价活动页',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_banner_position',
            value: '2',
            label: '秒杀活动页',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_banner_position',
            value: '1',
            label: '首页',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_bargain_record_status',
            value: '1',
            label: '砍价中',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_bargain_record_status',
            value: '2',
            label: '砍价成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_bargain_record_status',
            value: '3',
            label: '砍价失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_combination_record_status',
            value: '0',
            label: '拼团中',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'promotion_combination_record_status',
            value: '1',
            label: '拼团成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_combination_record_status',
            value: '2',
            label: '拼团失败',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'promotion_condition_type',
            value: '10',
            label: '满 N 元',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_condition_type',
            value: '20',
            label: '满 N 件',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_status',
            value: '1',
            label: '未使用',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_status',
            value: '2',
            label: '已使用',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_status',
            value: '3',
            label: '已过期',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_take_type',
            value: '1',
            label: '直接领取',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_take_type',
            value: '2',
            label: '指定发放',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_take_type',
            value: '3',
            label: '新人券',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_template_validity_type',
            value: '1',
            label: '固定日期',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_coupon_template_validity_type',
            value: '2',
            label: '领取之后',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_discount_type',
            value: '1',
            label: '满减',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'promotion_discount_type',
            value: '2',
            label: '折扣',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'promotion_product_scope',
            value: '1',
            label: '通用劵',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_product_scope',
            value: '2',
            label: '商品劵',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'promotion_product_scope',
            value: '3',
            label: '品类劵',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '1',
            label: '全部数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '2',
            label: '指定部门数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '3',
            label: '本部门数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '4',
            label: '本部门及以下数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_data_scope',
            value: '5',
            label: '仅本人数据权限',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '0',
            label: '成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '10',
            label: '账号或密码不正确',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '20',
            label: '用户被禁用',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '30',
            label: '验证码不存在',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '31',
            label: '验证码不正确',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_login_result',
            value: '100',
            label: '未知异常',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '100',
            label: '账号登录',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '101',
            label: '社交登录',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '103',
            label: '短信登录',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '200',
            label: '主动登出',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_login_type',
            value: '202',
            label: '强制登出',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '0',
            label: '初始化',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '10',
            label: '发送成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '20',
            label: '发送失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_mail_send_status',
            value: '30',
            label: '不发送',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_menu_type',
            value: '1',
            label: '目录',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_menu_type',
            value: '2',
            label: '菜单',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_menu_type',
            value: '3',
            label: '按钮',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_notice_type',
            value: '1',
            label: '通知',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_notice_type',
            value: '2',
            label: '公告',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_notify_template_type',
            value: '1',
            label: '通知公告',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_notify_template_type',
            value: '2',
            label: '系统消息',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'password',
            label: 'password',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'authorization_code',
            label: 'authorization_code',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'implicit',
            label: 'implicit',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'client_credentials',
            label: 'client_credentials',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'system_oauth2_grant_type',
            value: 'refresh_token',
            label: 'refresh_token',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_role_type',
            value: '1',
            label: '内置',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_role_type',
            value: '2',
            label: '自定义',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'DEBUG_DING_TALK',
            label: '调试(钉钉)',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'ALIYUN',
            label: '阿里云',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'TENCENT',
            label: '腾讯云',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'HUAWEI',
            label: '华为云',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_sms_channel_code',
            value: 'QINIU',
            label: '七牛云',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_sms_receive_status',
            value: '0',
            label: '等待结果',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_receive_status',
            value: '10',
            label: '接收成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_sms_receive_status',
            value: '20',
            label: '接收失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '0',
            label: '初始化',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '10',
            label: '发送成功',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '20',
            label: '发送失败',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_sms_send_status',
            value: '30',
            label: '不发送',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'system_sms_template_type',
            value: '3',
            label: '营销',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'system_sms_template_type',
            value: '1',
            label: '验证码',
            colorType: 'warning',
            cssClass: ''
          },
          {
            dictType: 'system_sms_template_type',
            value: '2',
            label: '通知',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'system_social_type',
            value: '10',
            label: 'Gitee',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_social_type',
            value: '20',
            label: '钉钉',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_social_type',
            value: '30',
            label: '企业微信',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_social_type',
            value: '31',
            label: '微信公众平台',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_social_type',
            value: '32',
            label: '微信开放平台',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_social_type',
            value: '34',
            label: '微信小程序',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'system_user_sex',
            value: '1',
            label: '男',
            colorType: 'default',
            cssClass: 'A'
          },
          {
            dictType: 'system_user_sex',
            value: '2',
            label: '女',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '20',
            label: 'H5 网页',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '31',
            label: '苹果 App',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'terminal',
            value: '32',
            label: '安卓 App',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '10',
            label: '申请售后',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '20',
            label: '商品待退货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '30',
            label: '商家待收货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '40',
            label: '等待退款',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '50',
            label: '退款成功',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '61',
            label: '买家取消',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '62',
            label: '商家拒绝',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_status',
            value: '63',
            label: '商家拒收货',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_type',
            value: '10',
            label: '售中退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_type',
            value: '20',
            label: '售后退款',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_way',
            value: '10',
            label: '仅退款',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_after_sale_way',
            value: '20',
            label: '退货退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_delivery_express_charge_mode',
            value: '1',
            label: '按件',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'trade_delivery_express_charge_mode',
            value: '2',
            label: '按重量',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'trade_delivery_express_charge_mode',
            value: '3',
            label: '按体积',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'trade_delivery_type',
            value: '1',
            label: '快递发货',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'trade_delivery_type',
            value: '2',
            label: '用户自提',
            colorType: '',
            cssClass: ''
          },
          {
            dictType: 'trade_order_item_after_sale_status',
            value: '0',
            label: '未售后',
            colorType: 'info',
            cssClass: ''
          },
          {
            dictType: 'trade_order_item_after_sale_status',
            value: '10',
            label: '售后中',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_order_item_after_sale_status',
            value: '20',
            label: '已退款',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '0',
            label: '待支付',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '10',
            label: '待发货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '20',
            label: '已发货',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '30',
            label: '已完成',
            colorType: 'success',
            cssClass: ''
          },
          {
            dictType: 'trade_order_status',
            value: '40',
            label: '已取消',
            colorType: 'danger',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '0',
            label: '普通订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '1',
            label: '秒杀订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '2',
            label: '砍价订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'trade_order_type',
            value: '3',
            label: '拼团订单',
            colorType: 'default',
            cssClass: ''
          },
          {
            dictType: 'user_type',
            value: '1',
            label: '会员',
            colorType: 'primary',
            cssClass: ''
          },
          {
            dictType: 'user_type',
            value: '2',
            label: '管理员',
            colorType: 'success',
            cssClass: ''
          }
        ],
        msg: ''
      }
    }
  },
]