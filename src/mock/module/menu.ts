export default [
  {
    url: '/admin-api/system/menu/simple-list',
    type: 'get',
    response: () => {
      return {
        code: 0,
        data: [
          {
            id: 1094,
            name: '短信渠道',
            parentId: 1093,
            type: 2
          },
          {
            id: 1118,
            name: '请假查询',
            parentId: 5,
            type: 2
          },
          {
            id: 1138,
            name: '租户列表',
            parentId: 1224,
            type: 2
          },
          {
            id: 1224,
            name: '租户管理',
            parentId: 1,
            type: 2
          },
          {
            id: 1225,
            name: '租户套餐',
            parentId: 1224,
            type: 2
          },
          {
            id: 1237,
            name: '文件配置',
            parentId: 1243,
            type: 2
          },
          {
            id: 1263,
            name: '应用管理',
            parentId: 1261,
            type: 2
          },
          {
            id: 2088,
            name: '查询账号',
            parentId: 2085,
            type: 3
          },
          {
            id: 2094,
            name: '查询标签',
            parentId: 2093,
            type: 3
          },
          {
            id: 2100,
            name: '查询粉丝',
            parentId: 2099,
            type: 3
          },
          {
            id: 2111,
            name: '查询草稿',
            parentId: 2108,
            type: 3
          },
          {
            id: 2121,
            name: '查询回复',
            parentId: 2120,
            type: 3
          },
          {
            id: 2125,
            name: '查询菜单',
            parentId: 2119,
            type: 3
          },
          {
            id: 2128,
            name: '查询消息',
            parentId: 2103,
            type: 3
          },
          {
            id: 2131,
            name: '邮箱账号',
            parentId: 2130,
            type: 2
          },
          {
            id: 2136,
            name: '邮件模版',
            parentId: 2130,
            type: 2
          },
          {
            id: 2141,
            name: '邮件记录',
            parentId: 2130,
            type: 2
          },
          {
            id: 2145,
            name: '模板管理',
            parentId: 2144,
            type: 2
          },
          {
            id: 2151,
            name: '消息记录',
            parentId: 2144,
            type: 2
          },
          {
            id: 2156,
            name: '查询项目',
            parentId: 2153,
            type: 3
          },
          {
            id: 2165,
            name: '快递发货',
            parentId: 2164,
            type: 1
          },
          {
            id: 2167,
            name: '快递公司',
            parentId: 2165,
            type: 2
          },
          {
            id: 2275,
            name: '会员配置',
            parentId: 2262,
            type: 2
          },
          {
            id: 2317,
            name: '会员管理',
            parentId: 2262,
            type: 2
          },
          {
            id: 2342,
            name: '交易配置',
            parentId: 2072,
            type: 2
          },
          {
            id: 2346,
            name: '分销用户',
            parentId: 2345,
            type: 2
          },
          {
            id: 2377,
            name: '文章分类',
            parentId: 2387,
            type: 2
          },
          {
            id: 2516,
            name: '客户公海配置',
            parentId: 2524,
            type: 2
          },
          {
            id: 2565,
            name: '产品信息',
            parentId: 2564,
            type: 2
          },
          {
            id: 2584,
            name: '仓库信息',
            parentId: 2583,
            type: 2
          },
          {
            id: 2701,
            name: '待办事项',
            parentId: 2397,
            type: 2
          },
          {
            id: 2702,
            name: 'ERP 首页',
            parentId: 2563,
            type: 2
          },
          {
            id: 2712,
            name: '客户分析',
            parentId: 2560,
            type: 2
          },
          {
            id: 2720,
            name: '发起流程',
            parentId: 1200,
            type: 2
          },
          {
            id: 2761,
            name: 'API 密钥',
            parentId: 2760,
            type: 2
          },
          {
            id: 2767,
            name: '模型配置',
            parentId: 2760,
            type: 2
          },
          {
            id: 2773,
            name: '聊天角色',
            parentId: 2760,
            type: 2
          },
          {
            id: 2920,
            name: '工具管理',
            parentId: 2760,
            type: 2
          },
          {
            id: 4051,
            name: '数据桥梁',
            parentId: 4048,
            type: 2
          },
          {
            id: 100,
            name: '用户管理',
            parentId: 1,
            type: 2
          },
          {
            id: 111,
            name: 'MySQL 监控',
            parentId: 2740,
            type: 2
          },
          {
            id: 115,
            name: '代码生成',
            parentId: 2,
            type: 2
          },
          {
            id: 500,
            name: '操作日志',
            parentId: 108,
            type: 2
          },
          {
            id: 1001,
            name: '用户查询',
            parentId: 100,
            type: 3
          },
          {
            id: 1008,
            name: '角色查询',
            parentId: 101,
            type: 3
          },
          {
            id: 1013,
            name: '菜单查询',
            parentId: 102,
            type: 3
          },
          {
            id: 1017,
            name: '部门查询',
            parentId: 103,
            type: 3
          },
          {
            id: 1021,
            name: '岗位查询',
            parentId: 104,
            type: 3
          },
          {
            id: 1026,
            name: '字典查询',
            parentId: 105,
            type: 3
          },
          {
            id: 1031,
            name: '配置查询',
            parentId: 106,
            type: 3
          },
          {
            id: 1036,
            name: '公告查询',
            parentId: 107,
            type: 3
          },
          {
            id: 1040,
            name: '操作查询',
            parentId: 500,
            type: 3
          },
          {
            id: 1043,
            name: '登录查询',
            parentId: 501,
            type: 3
          },
          {
            id: 1046,
            name: '令牌列表',
            parentId: 109,
            type: 3
          },
          {
            id: 1066,
            name: '获得 Redis 监控信息',
            parentId: 113,
            type: 3
          },
          {
            id: 1070,
            name: '代码生成案例',
            parentId: 2,
            type: 1
          },
          {
            id: 1078,
            name: '访问日志',
            parentId: 1083,
            type: 2
          },
          {
            id: 1087,
            name: '任务查询',
            parentId: 110,
            type: 3
          },
          {
            id: 1088,
            name: '日志查询',
            parentId: 1078,
            type: 3
          },
          {
            id: 1089,
            name: '日志查询',
            parentId: 1084,
            type: 3
          },
          {
            id: 1091,
            name: '文件查询',
            parentId: 1090,
            type: 3
          },
          {
            id: 1093,
            name: '短信管理',
            parentId: 2739,
            type: 1
          },
          {
            id: 1095,
            name: '短信渠道查询',
            parentId: 1094,
            type: 3
          },
          {
            id: 1100,
            name: '短信模板',
            parentId: 1093,
            type: 2
          },
          {
            id: 1101,
            name: '短信模板查询',
            parentId: 1100,
            type: 3
          },
          {
            id: 1108,
            name: '短信日志查询',
            parentId: 1107,
            type: 3
          },
          {
            id: 1119,
            name: '请假申请查询',
            parentId: 1118,
            type: 3
          },
          {
            id: 1126,
            name: '应用信息',
            parentId: 1117,
            type: 2
          },
          {
            id: 1127,
            name: '支付应用信息查询',
            parentId: 1126,
            type: 3
          },
          {
            id: 1133,
            name: '支付商户信息查询',
            parentId: 1132,
            type: 3
          },
          {
            id: 1139,
            name: '租户查询',
            parentId: 1138,
            type: 3
          },
          {
            id: 1162,
            name: '退款订单查询',
            parentId: 1161,
            type: 3
          },
          {
            id: 1174,
            name: '支付订单查询',
            parentId: 1173,
            type: 3
          },
          {
            id: 1188,
            name: '表单查询',
            parentId: 1187,
            type: 3
          },
          {
            id: 1193,
            name: '流程模型',
            parentId: 1186,
            type: 2
          },
          {
            id: 1194,
            name: '模型查询',
            parentId: 1193,
            type: 3
          },
          {
            id: 1201,
            name: '我的流程',
            parentId: 1200,
            type: 2
          },
          {
            id: 1202,
            name: '流程实例的查询',
            parentId: 1201,
            type: 3
          },
          {
            id: 1210,
            name: '用户组查询',
            parentId: 1209,
            type: 3
          },
          {
            id: 1221,
            name: '流程任务的查询',
            parentId: 1207,
            type: 3
          },
          {
            id: 1226,
            name: '租户套餐查询',
            parentId: 1225,
            type: 3
          },
          {
            id: 1238,
            name: '文件配置查询',
            parentId: 1237,
            type: 3
          },
          {
            id: 1255,
            name: '数据源配置',
            parentId: 2,
            type: 2
          },
          {
            id: 1256,
            name: '数据源配置查询',
            parentId: 1255,
            type: 3
          },
          {
            id: 1264,
            name: '客户端查询',
            parentId: 1263,
            type: 3
          },
          {
            id: 1282,
            name: '报表设计器',
            parentId: 1281,
            type: 2
          },
          {
            id: 2003,
            name: '分类查询',
            parentId: 2002,
            type: 3
          },
          {
            id: 2009,
            name: '品牌查询',
            parentId: 2008,
            type: 3
          },
          {
            id: 2014,
            name: '商品列表',
            parentId: 2000,
            type: 2
          },
          {
            id: 2015,
            name: '商品查询',
            parentId: 2014,
            type: 3
          },
          {
            id: 2020,
            name: '规格查询',
            parentId: 2019,
            type: 3
          },
          {
            id: 2026,
            name: 'Banner查询',
            parentId: 2025,
            type: 3
          },
          {
            id: 2032,
            name: '优惠劵列表',
            parentId: 2365,
            type: 2
          },
          {
            id: 2033,
            name: '优惠劵模板查询',
            parentId: 2032,
            type: 3
          },
          {
            id: 2039,
            name: '优惠劵查询',
            parentId: 2038,
            type: 3
          },
          {
            id: 2042,
            name: '满减送活动查询',
            parentId: 2041,
            type: 3
          },
          {
            id: 2048,
            name: '限时折扣活动查询',
            parentId: 2047,
            type: 3
          },
          {
            id: 2060,
            name: '秒杀活动查询',
            parentId: 2059,
            type: 3
          },
          {
            id: 2066,
            name: '秒杀时段',
            parentId: 2209,
            type: 2
          },
          {
            id: 2067,
            name: '秒杀时段查询',
            parentId: 2066,
            type: 3
          },
          {
            id: 2074,
            name: '售后查询',
            parentId: 2073,
            type: 3
          },
          {
            id: 2076,
            name: '订单列表',
            parentId: 2072,
            type: 2
          },
          {
            id: 2085,
            name: '账号管理',
            parentId: 2084,
            type: 2
          },
          {
            id: 2086,
            name: '新增账号',
            parentId: 2085,
            type: 3
          },
          {
            id: 2095,
            name: '新增标签',
            parentId: 2093,
            type: 3
          },
          {
            id: 2101,
            name: '修改粉丝',
            parentId: 2099,
            type: 3
          },
          {
            id: 2105,
            name: '查询发布列表',
            parentId: 2104,
            type: 3
          },
          {
            id: 2109,
            name: '新建草稿',
            parentId: 2108,
            type: 3
          },
          {
            id: 2114,
            name: '上传临时素材',
            parentId: 2113,
            type: 3
          },
          {
            id: 2122,
            name: '新增回复',
            parentId: 2120,
            type: 3
          },
          {
            id: 2126,
            name: '保存菜单',
            parentId: 2119,
            type: 3
          },
          {
            id: 2129,
            name: '发送消息',
            parentId: 2103,
            type: 3
          },
          {
            id: 2132,
            name: '账号查询',
            parentId: 2131,
            type: 3
          },
          {
            id: 2137,
            name: '模版查询',
            parentId: 2136,
            type: 3
          },
          {
            id: 2142,
            name: '日志查询',
            parentId: 2141,
            type: 3
          },
          {
            id: 2146,
            name: '站内信模板查询',
            parentId: 2145,
            type: 3
          },
          {
            id: 2152,
            name: '站内信消息查询',
            parentId: 2151,
            type: 3
          },
          {
            id: 2154,
            name: '创建项目',
            parentId: 2153,
            type: 3
          },
          {
            id: 2159,
            name: 'Boot 开发文档',
            parentId: 0,
            type: 1
          },
          {
            id: 2166,
            name: '门店自提',
            parentId: 2164,
            type: 1
          },
          {
            id: 2168,
            name: '快递公司查询',
            parentId: 2167,
            type: 3
          },
          {
            id: 2173,
            name: '运费模版',
            parentId: 2165,
            type: 2
          },
          {
            id: 2174,
            name: '快递运费模板查询',
            parentId: 2173,
            type: 3
          },
          {
            id: 2179,
            name: '门店管理',
            parentId: 2166,
            type: 2
          },
          {
            id: 2180,
            name: '自提门店查询',
            parentId: 2179,
            type: 3
          },
          {
            id: 2276,
            name: '会员配置查询',
            parentId: 2275,
            type: 3
          },
          {
            id: 2282,
            name: '积分签到规则查询',
            parentId: 2281,
            type: 3
          },
          {
            id: 2288,
            name: '用户积分记录查询',
            parentId: 2287,
            type: 3
          },
          {
            id: 2294,
            name: '用户签到积分查询',
            parentId: 2293,
            type: 3
          },
          {
            id: 2302,
            name: '支付通知查询',
            parentId: 2301,
            type: 3
          },
          {
            id: 2304,
            name: '拼团商品',
            parentId: 2303,
            type: 2
          },
          {
            id: 2305,
            name: '拼团活动查询',
            parentId: 2304,
            type: 3
          },
          {
            id: 2311,
            name: '砍价商品',
            parentId: 2310,
            type: 2
          },
          {
            id: 2312,
            name: '砍价活动查询',
            parentId: 2311,
            type: 3
          },
          {
            id: 2318,
            name: '会员用户查询',
            parentId: 2317,
            type: 3
          },
          {
            id: 2320,
            name: '会员标签',
            parentId: 2262,
            type: 2
          },
          {
            id: 2321,
            name: '会员标签查询',
            parentId: 2320,
            type: 3
          },
          {
            id: 2326,
            name: '会员等级查询',
            parentId: 2325,
            type: 3
          },
          {
            id: 2331,
            name: '用户分组查询',
            parentId: 2330,
            type: 3
          },
          {
            id: 2337,
            name: '评论查询',
            parentId: 2336,
            type: 3
          },
          {
            id: 2343,
            name: '交易中心配置查询',
            parentId: 2342,
            type: 3
          },
          {
            id: 2347,
            name: '分销用户查询',
            parentId: 2346,
            type: 3
          },
          {
            id: 2353,
            name: '佣金记录',
            parentId: 2345,
            type: 2
          },
          {
            id: 2354,
            name: '佣金记录查询',
            parentId: 2353,
            type: 3
          },
          {
            id: 2356,
            name: '佣金提现查询',
            parentId: 2355,
            type: 3
          },
          {
            id: 2360,
            name: '交易统计查询',
            parentId: 2359,
            type: 3
          },
          {
            id: 2367,
            name: '砍价记录查询',
            parentId: 2366,
            type: 3
          },
          {
            id: 2375,
            name: '会员统计查询',
            parentId: 2374,
            type: 3
          },
          {
            id: 2378,
            name: '分类查询',
            parentId: 2377,
            type: 3
          },
          {
            id: 2383,
            name: '文章管理查询',
            parentId: 2382,
            type: 3
          },
          {
            id: 2387,
            name: '内容管理',
            parentId: 2030,
            type: 1
          },
          {
            id: 2388,
            name: '商城首页',
            parentId: 2362,
            type: 2
          },
          {
            id: 2392,
            name: '客户查询',
            parentId: 2391,
            type: 3
          },
          {
            id: 2399,
            name: '合同查询',
            parentId: 2398,
            type: 3
          },
          {
            id: 2405,
            name: '线索查询',
            parentId: 2404,
            type: 3
          },
          {
            id: 2411,
            name: '商机查询',
            parentId: 2410,
            type: 3
          },
          {
            id: 2417,
            name: '联系人查询',
            parentId: 2416,
            type: 3
          },
          {
            id: 2423,
            name: '回款管理查询',
            parentId: 2422,
            type: 3
          },
          {
            id: 2429,
            name: '回款计划查询',
            parentId: 2428,
            type: 3
          },
          {
            id: 2436,
            name: '装修模板',
            parentId: 2435,
            type: 2
          },
          {
            id: 2437,
            name: '装修模板查询',
            parentId: 2436,
            type: 3
          },
          {
            id: 2443,
            name: '装修页面查询',
            parentId: 2442,
            type: 3
          },
          {
            id: 2478,
            name: '单表（增删改查）',
            parentId: 1070,
            type: 2
          },
          {
            id: 2479,
            name: '示例联系人查询',
            parentId: 2478,
            type: 3
          },
          {
            id: 2485,
            name: '示例分类查询',
            parentId: 2484,
            type: 3
          },
          {
            id: 2491,
            name: '学生查询',
            parentId: 2490,
            type: 3
          },
          {
            id: 2517,
            name: '客户公海配置保存',
            parentId: 2516,
            type: 3
          },
          {
            id: 2518,
            name: '客户限制配置',
            parentId: 2524,
            type: 2
          },
          {
            id: 2519,
            name: '客户限制配置查询',
            parentId: 2518,
            type: 3
          },
          {
            id: 2527,
            name: '产品查询',
            parentId: 2526,
            type: 3
          },
          {
            id: 2533,
            name: '产品分类查询',
            parentId: 2532,
            type: 3
          },
          {
            id: 2547,
            name: '订单查询',
            parentId: 2076,
            type: 3
          },
          {
            id: 2549,
            name: '支付&退款案例',
            parentId: 2161,
            type: 2
          },
          {
            id: 2553,
            name: '钱包充值套餐查询',
            parentId: 2552,
            type: 3
          },
          {
            id: 2557,
            name: '钱包余额',
            parentId: 2551,
            type: 2
          },
          {
            id: 2558,
            name: '钱包余额查询',
            parentId: 2557,
            type: 3
          },
          {
            id: 2561,
            name: '排行榜',
            parentId: 2560,
            type: 2
          },
          {
            id: 2566,
            name: '产品查询',
            parentId: 2565,
            type: 3
          },
          {
            id: 2571,
            name: '产品分类',
            parentId: 2564,
            type: 2
          },
          {
            id: 2572,
            name: '分类查询',
            parentId: 2571,
            type: 3
          },
          {
            id: 2578,
            name: '单位查询',
            parentId: 2577,
            type: 3
          },
          {
            id: 2585,
            name: '仓库查询',
            parentId: 2584,
            type: 3
          },
          {
            id: 2590,
            name: '产品库存',
            parentId: 2583,
            type: 2
          },
          {
            id: 2591,
            name: '库存查询',
            parentId: 2590,
            type: 3
          },
          {
            id: 2594,
            name: '库存明细查询',
            parentId: 2593,
            type: 3
          },
          {
            id: 2597,
            name: '其它入库单查询',
            parentId: 2596,
            type: 3
          },
          {
            id: 2604,
            name: '供应商查询',
            parentId: 2603,
            type: 3
          },
          {
            id: 2611,
            name: '其它出库单查询',
            parentId: 2610,
            type: 3
          },
          {
            id: 2619,
            name: '客户查询',
            parentId: 2618,
            type: 3
          },
          {
            id: 2625,
            name: '库存调度单查询',
            parentId: 2624,
            type: 3
          },
          {
            id: 2632,
            name: '库存盘点单查询',
            parentId: 2631,
            type: 3
          },
          {
            id: 2638,
            name: '销售订单',
            parentId: 2617,
            type: 2
          },
          {
            id: 2639,
            name: '销售订单查询',
            parentId: 2638,
            type: 3
          },
          {
            id: 2647,
            name: '结算账户查询',
            parentId: 2646,
            type: 3
          },
          {
            id: 2653,
            name: '销售出库查询',
            parentId: 2652,
            type: 3
          },
          {
            id: 2660,
            name: '销售退货查询',
            parentId: 2659,
            type: 3
          },
          {
            id: 2666,
            name: '采购订单',
            parentId: 2602,
            type: 2
          },
          {
            id: 2667,
            name: '采购订单查询',
            parentId: 2666,
            type: 3
          },
          {
            id: 2674,
            name: '采购入库查询',
            parentId: 2673,
            type: 3
          },
          {
            id: 2681,
            name: '采购退货查询',
            parentId: 2680,
            type: 3
          },
          {
            id: 2687,
            name: '付款单',
            parentId: 2645,
            type: 2
          },
          {
            id: 2688,
            name: '付款单查询',
            parentId: 2687,
            type: 3
          },
          {
            id: 2695,
            name: '收款单查询',
            parentId: 2694,
            type: 3
          },
          {
            id: 2704,
            name: '商机状态查询',
            parentId: 2703,
            type: 3
          },
          {
            id: 2710,
            name: '合同配置更新',
            parentId: 2708,
            type: 3
          },
          {
            id: 2715,
            name: '分类查询',
            parentId: 2714,
            type: 3
          },
          {
            id: 2722,
            name: '流程实例的查询（管理员）',
            parentId: 2721,
            type: 3
          },
          {
            id: 2725,
            name: '流程任务的查询（管理员）',
            parentId: 2724,
            type: 3
          },
          {
            id: 2727,
            name: '流程监听器查询',
            parentId: 2726,
            type: 3
          },
          {
            id: 2732,
            name: '流程表达式查询',
            parentId: 2731,
            type: 3
          },
          {
            id: 2741,
            name: '领取公海客户',
            parentId: 2546,
            type: 3
          },
          {
            id: 2743,
            name: '商品统计查询',
            parentId: 2545,
            type: 3
          },
          {
            id: 2759,
            name: 'AI 对话',
            parentId: 2758,
            type: 2
          },
          {
            id: 2762,
            name: 'API 密钥查询',
            parentId: 2761,
            type: 3
          },
          {
            id: 2768,
            name: '聊天模型查询',
            parentId: 2767,
            type: 3
          },
          {
            id: 2774,
            name: '聊天角色查询',
            parentId: 2773,
            type: 3
          },
          {
            id: 2779,
            name: '会话查询',
            parentId: 2778,
            type: 3
          },
          {
            id: 2785,
            name: '绘画查询',
            parentId: 2784,
            type: 3
          },
          {
            id: 2789,
            name: '音乐查询',
            parentId: 2788,
            type: 3
          },
          {
            id: 2794,
            name: 'AI 写作查询',
            parentId: 2793,
            type: 3
          },
          {
            id: 2800,
            name: '思维导图查询',
            parentId: 2799,
            type: 3
          },
          {
            id: 2802,
            name: '会话查询',
            parentId: 2797,
            type: 3
          },
          {
            id: 2809,
            name: '积分商城活动查询',
            parentId: 2808,
            type: 3
          },
          {
            id: 2916,
            name: 'AI 知识库查询',
            parentId: 2915,
            type: 3
          },
          {
            id: 2921,
            name: '工具查询',
            parentId: 2920,
            type: 3
          },
          {
            id: 4003,
            name: '产品查询',
            parentId: 4002,
            type: 3
          },
          {
            id: 4009,
            name: '设备查询',
            parentId: 4008,
            type: 3
          },
          {
            id: 4014,
            name: '产品分类',
            parentId: 4001,
            type: 2
          },
          {
            id: 4015,
            name: '产品分类查询',
            parentId: 4014,
            type: 3
          },
          {
            id: 4026,
            name: '插件查询',
            parentId: 4025,
            type: 3
          },
          {
            id: 4032,
            name: '设备分组查询',
            parentId: 4031,
            type: 3
          },
          {
            id: 4038,
            name: '产品物模型功能查询',
            parentId: 4037,
            type: 3
          },
          {
            id: 4049,
            name: '场景联动',
            parentId: 4048,
            type: 2
          },
          {
            id: 4050,
            name: 'IoT首页',
            parentId: 4000,
            type: 2
          },
          {
            id: 4052,
            name: 'IoT 数据桥梁查询',
            parentId: 4051,
            type: 3
          },
          {
            id: 5001,
            name: 'AI 工作流查询',
            parentId: 5000,
            type: 3
          },
          {
            id: 5009,
            name: '仪表盘设计器',
            parentId: 1281,
            type: 2
          },
          {
            id: 5011,
            name: '转账订单查询',
            parentId: 2559,
            type: 3
          },
          {
            id: 101,
            name: '角色管理',
            parentId: 1,
            type: 2
          },
          {
            id: 109,
            name: '令牌管理',
            parentId: 1261,
            type: 2
          },
          {
            id: 113,
            name: 'Redis 监控',
            parentId: 2740,
            type: 2
          },
          {
            id: 114,
            name: '表单构建',
            parentId: 2,
            type: 2
          },
          {
            id: 501,
            name: '登录日志',
            parentId: 108,
            type: 2
          },
          {
            id: 1002,
            name: '用户新增',
            parentId: 100,
            type: 3
          },
          {
            id: 1009,
            name: '角色新增',
            parentId: 101,
            type: 3
          },
          {
            id: 1014,
            name: '菜单新增',
            parentId: 102,
            type: 3
          },
          {
            id: 1018,
            name: '部门新增',
            parentId: 103,
            type: 3
          },
          {
            id: 1022,
            name: '岗位新增',
            parentId: 104,
            type: 3
          },
          {
            id: 1027,
            name: '字典新增',
            parentId: 105,
            type: 3
          },
          {
            id: 1032,
            name: '配置新增',
            parentId: 106,
            type: 3
          },
          {
            id: 1037,
            name: '公告新增',
            parentId: 107,
            type: 3
          },
          {
            id: 1042,
            name: '日志导出',
            parentId: 500,
            type: 3
          },
          {
            id: 1048,
            name: '令牌删除',
            parentId: 109,
            type: 3
          },
          {
            id: 1050,
            name: '任务新增',
            parentId: 110,
            type: 3
          },
          {
            id: 1056,
            name: '生成修改',
            parentId: 115,
            type: 3
          },
          {
            id: 1058,
            name: '导入代码',
            parentId: 115,
            type: 3
          },
          {
            id: 1067,
            name: '获得 Redis Key 列表',
            parentId: 113,
            type: 3
          },
          {
            id: 1082,
            name: '日志导出',
            parentId: 1078,
            type: 3
          },
          {
            id: 1084,
            name: '错误日志',
            parentId: 1083,
            type: 2
          },
          {
            id: 1085,
            name: '日志处理',
            parentId: 1084,
            type: 3
          },
          {
            id: 1096,
            name: '短信渠道创建',
            parentId: 1094,
            type: 3
          },
          {
            id: 1102,
            name: '短信模板创建',
            parentId: 1100,
            type: 3
          },
          {
            id: 1107,
            name: '短信日志',
            parentId: 1093,
            type: 2
          },
          {
            id: 1120,
            name: '请假申请创建',
            parentId: 1118,
            type: 3
          },
          {
            id: 1128,
            name: '支付应用信息创建',
            parentId: 1126,
            type: 3
          },
          {
            id: 1134,
            name: '支付商户信息创建',
            parentId: 1132,
            type: 3
          },
          {
            id: 1140,
            name: '租户创建',
            parentId: 1138,
            type: 3
          },
          {
            id: 1173,
            name: '支付订单',
            parentId: 1117,
            type: 2
          },
          {
            id: 1187,
            name: '流程表单',
            parentId: 1186,
            type: 2
          },
          {
            id: 1189,
            name: '表单创建',
            parentId: 1187,
            type: 3
          },
          {
            id: 1195,
            name: '模型创建',
            parentId: 1193,
            type: 3
          },
          {
            id: 1211,
            name: '用户组创建',
            parentId: 1209,
            type: 3
          },
          {
            id: 1219,
            name: '流程实例的创建',
            parentId: 1201,
            type: 3
          },
          {
            id: 1222,
            name: '流程任务的更新',
            parentId: 1207,
            type: 3
          },
          {
            id: 1227,
            name: '租户套餐创建',
            parentId: 1225,
            type: 3
          },
          {
            id: 1239,
            name: '文件配置创建',
            parentId: 1237,
            type: 3
          },
          {
            id: 1257,
            name: '数据源配置创建',
            parentId: 1255,
            type: 3
          },
          {
            id: 1265,
            name: '客户端创建',
            parentId: 1263,
            type: 3
          },
          {
            id: 2002,
            name: '商品分类',
            parentId: 2000,
            type: 2
          },
          {
            id: 2004,
            name: '分类创建',
            parentId: 2002,
            type: 3
          },
          {
            id: 2010,
            name: '品牌创建',
            parentId: 2008,
            type: 3
          },
          {
            id: 2016,
            name: '商品创建',
            parentId: 2014,
            type: 3
          },
          {
            id: 2021,
            name: '规格创建',
            parentId: 2019,
            type: 3
          },
          {
            id: 2027,
            name: 'Banner创建',
            parentId: 2025,
            type: 3
          },
          {
            id: 2034,
            name: '优惠劵模板创建',
            parentId: 2032,
            type: 3
          },
          {
            id: 2038,
            name: '领取记录',
            parentId: 2365,
            type: 2
          },
          {
            id: 2043,
            name: '满减送活动创建',
            parentId: 2041,
            type: 3
          },
          {
            id: 2049,
            name: '限时折扣活动创建',
            parentId: 2047,
            type: 3
          },
          {
            id: 2059,
            name: '秒杀商品',
            parentId: 2209,
            type: 2
          },
          {
            id: 2061,
            name: '秒杀活动创建',
            parentId: 2059,
            type: 3
          },
          {
            id: 2068,
            name: '秒杀时段创建',
            parentId: 2066,
            type: 3
          },
          {
            id: 2073,
            name: '售后退款',
            parentId: 2072,
            type: 2
          },
          {
            id: 2087,
            name: '修改账号',
            parentId: 2085,
            type: 3
          },
          {
            id: 2092,
            name: '数据统计',
            parentId: 2084,
            type: 2
          },
          {
            id: 2096,
            name: '修改标签',
            parentId: 2093,
            type: 3
          },
          {
            id: 2102,
            name: '同步粉丝',
            parentId: 2099,
            type: 3
          },
          {
            id: 2106,
            name: '发布草稿',
            parentId: 2104,
            type: 3
          },
          {
            id: 2110,
            name: '修改草稿',
            parentId: 2108,
            type: 3
          },
          {
            id: 2115,
            name: '上传永久素材',
            parentId: 2113,
            type: 3
          },
          {
            id: 2123,
            name: '修改回复',
            parentId: 2120,
            type: 3
          },
          {
            id: 2127,
            name: '删除菜单',
            parentId: 2119,
            type: 3
          },
          {
            id: 2130,
            name: '邮箱管理',
            parentId: 2739,
            type: 2
          },
          {
            id: 2133,
            name: '账号创建',
            parentId: 2131,
            type: 3
          },
          {
            id: 2138,
            name: '模版创建',
            parentId: 2136,
            type: 3
          },
          {
            id: 2147,
            name: '站内信模板创建',
            parentId: 2145,
            type: 3
          },
          {
            id: 2153,
            name: '大屏设计器',
            parentId: 1281,
            type: 2
          },
          {
            id: 2155,
            name: '更新项目',
            parentId: 2153,
            type: 3
          },
          {
            id: 2160,
            name: 'Cloud 开发文档',
            parentId: 0,
            type: 1
          },
          {
            id: 2169,
            name: '快递公司创建',
            parentId: 2167,
            type: 3
          },
          {
            id: 2175,
            name: '快递运费模板创建',
            parentId: 2173,
            type: 3
          },
          {
            id: 2181,
            name: '自提门店创建',
            parentId: 2179,
            type: 3
          },
          {
            id: 2277,
            name: '会员配置保存',
            parentId: 2275,
            type: 3
          },
          {
            id: 2281,
            name: '签到配置',
            parentId: 2300,
            type: 2
          },
          {
            id: 2283,
            name: '积分签到规则创建',
            parentId: 2281,
            type: 3
          },
          {
            id: 2306,
            name: '拼团活动创建',
            parentId: 2304,
            type: 3
          },
          {
            id: 2313,
            name: '砍价活动创建',
            parentId: 2311,
            type: 3
          },
          {
            id: 2322,
            name: '会员标签创建',
            parentId: 2320,
            type: 3
          },
          {
            id: 2325,
            name: '会员等级',
            parentId: 2262,
            type: 2
          },
          {
            id: 2327,
            name: '会员等级创建',
            parentId: 2325,
            type: 3
          },
          {
            id: 2332,
            name: '用户分组创建',
            parentId: 2330,
            type: 3
          },
          {
            id: 2338,
            name: '添加自评',
            parentId: 2336,
            type: 3
          },
          {
            id: 2341,
            name: '优惠劵发送',
            parentId: 2038,
            type: 3
          },
          {
            id: 2344,
            name: '交易中心配置保存',
            parentId: 2342,
            type: 3
          },
          {
            id: 2348,
            name: '分销用户推广人查询',
            parentId: 2346,
            type: 3
          },
          {
            id: 2355,
            name: '佣金提现',
            parentId: 2345,
            type: 2
          },
          {
            id: 2357,
            name: '佣金提现审核',
            parentId: 2355,
            type: 3
          },
          {
            id: 2361,
            name: '交易统计导出',
            parentId: 2359,
            type: 3
          },
          {
            id: 2365,
            name: '优惠劵',
            parentId: 2030,
            type: 1
          },
          {
            id: 2366,
            name: '砍价记录',
            parentId: 2310,
            type: 2
          },
          {
            id: 2368,
            name: '助力记录查询',
            parentId: 2366,
            type: 3
          },
          {
            id: 2369,
            name: '拼团记录',
            parentId: 2303,
            type: 2
          },
          {
            id: 2374,
            name: '会员统计',
            parentId: 2358,
            type: 2
          },
          {
            id: 2379,
            name: '分类创建',
            parentId: 2377,
            type: 3
          },
          {
            id: 2382,
            name: '文章列表',
            parentId: 2387,
            type: 2
          },
          {
            id: 2384,
            name: '文章管理创建',
            parentId: 2382,
            type: 3
          },
          {
            id: 2389,
            name: '核销订单',
            parentId: 2166,
            type: 2
          },
          {
            id: 2393,
            name: '客户创建',
            parentId: 2391,
            type: 3
          },
          {
            id: 2400,
            name: '合同创建',
            parentId: 2398,
            type: 3
          },
          {
            id: 2406,
            name: '线索创建',
            parentId: 2404,
            type: 3
          },
          {
            id: 2412,
            name: '商机创建',
            parentId: 2410,
            type: 3
          },
          {
            id: 2418,
            name: '联系人创建',
            parentId: 2416,
            type: 3
          },
          {
            id: 2424,
            name: '回款管理创建',
            parentId: 2422,
            type: 3
          },
          {
            id: 2430,
            name: '回款计划创建',
            parentId: 2428,
            type: 3
          },
          {
            id: 2438,
            name: '装修模板创建',
            parentId: 2436,
            type: 3
          },
          {
            id: 2442,
            name: '装修页面',
            parentId: 2435,
            type: 2
          },
          {
            id: 2444,
            name: '装修页面创建',
            parentId: 2442,
            type: 3
          },
          {
            id: 2480,
            name: '示例联系人创建',
            parentId: 2478,
            type: 3
          },
          {
            id: 2484,
            name: '树表（增删改查）',
            parentId: 1070,
            type: 2
          },
          {
            id: 2486,
            name: '示例分类创建',
            parentId: 2484,
            type: 3
          },
          {
            id: 2492,
            name: '学生创建',
            parentId: 2490,
            type: 3
          },
          {
            id: 2520,
            name: '客户限制配置创建',
            parentId: 2518,
            type: 3
          },
          {
            id: 2528,
            name: '产品创建',
            parentId: 2526,
            type: 3
          },
          {
            id: 2534,
            name: '产品分类创建',
            parentId: 2532,
            type: 3
          },
          {
            id: 2548,
            name: '订单更新',
            parentId: 2076,
            type: 3
          },
          {
            id: 2550,
            name: '提现转账案例',
            parentId: 2161,
            type: 2
          },
          {
            id: 2552,
            name: '充值套餐',
            parentId: 2551,
            type: 2
          },
          {
            id: 2554,
            name: '钱包充值套餐创建',
            parentId: 2552,
            type: 3
          },
          {
            id: 2567,
            name: '产品创建',
            parentId: 2565,
            type: 3
          },
          {
            id: 2573,
            name: '分类创建',
            parentId: 2571,
            type: 3
          },
          {
            id: 2577,
            name: '产品单位',
            parentId: 2564,
            type: 2
          },
          {
            id: 2579,
            name: '单位创建',
            parentId: 2577,
            type: 3
          },
          {
            id: 2586,
            name: '仓库创建',
            parentId: 2584,
            type: 3
          },
          {
            id: 2593,
            name: '出入库明细',
            parentId: 2583,
            type: 2
          },
          {
            id: 2598,
            name: '其它入库单创建',
            parentId: 2596,
            type: 3
          },
          {
            id: 2605,
            name: '供应商创建',
            parentId: 2603,
            type: 3
          },
          {
            id: 2612,
            name: '其它出库单创建',
            parentId: 2610,
            type: 3
          },
          {
            id: 2620,
            name: '客户创建',
            parentId: 2618,
            type: 3
          },
          {
            id: 2626,
            name: '库存调度单创建',
            parentId: 2624,
            type: 3
          },
          {
            id: 2633,
            name: '库存盘点单创建',
            parentId: 2631,
            type: 3
          },
          {
            id: 2640,
            name: '销售订单创建',
            parentId: 2638,
            type: 3
          },
          {
            id: 2648,
            name: '结算账户创建',
            parentId: 2646,
            type: 3
          },
          {
            id: 2652,
            name: '销售出库',
            parentId: 2617,
            type: 2
          },
          {
            id: 2654,
            name: '销售出库创建',
            parentId: 2652,
            type: 3
          },
          {
            id: 2661,
            name: '销售退货创建',
            parentId: 2659,
            type: 3
          },
          {
            id: 2668,
            name: '采购订单创建',
            parentId: 2666,
            type: 3
          },
          {
            id: 2673,
            name: '采购入库',
            parentId: 2602,
            type: 2
          },
          {
            id: 2675,
            name: '采购入库创建',
            parentId: 2673,
            type: 3
          },
          {
            id: 2682,
            name: '采购退货创建',
            parentId: 2680,
            type: 3
          },
          {
            id: 2689,
            name: '付款单创建',
            parentId: 2687,
            type: 3
          },
          {
            id: 2694,
            name: '收款单',
            parentId: 2645,
            type: 2
          },
          {
            id: 2696,
            name: '收款单创建',
            parentId: 2694,
            type: 3
          },
          {
            id: 2705,
            name: '商机状态创建',
            parentId: 2703,
            type: 3
          },
          {
            id: 2709,
            name: '客户公海配置查询',
            parentId: 2516,
            type: 3
          },
          {
            id: 2711,
            name: '合同配置查询',
            parentId: 2708,
            type: 3
          },
          {
            id: 2716,
            name: '分类创建',
            parentId: 2714,
            type: 3
          },
          {
            id: 2723,
            name: '流程实例的取消（管理员）',
            parentId: 2721,
            type: 3
          },
          {
            id: 2728,
            name: '流程监听器创建',
            parentId: 2726,
            type: 3
          },
          {
            id: 2733,
            name: '流程表达式创建',
            parentId: 2731,
            type: 3
          },
          {
            id: 2742,
            name: '分配公海客户',
            parentId: 2546,
            type: 3
          },
          {
            id: 2744,
            name: '商品统计导出',
            parentId: 2545,
            type: 3
          },
          {
            id: 2751,
            name: '售后同意',
            parentId: 2073,
            type: 3
          },
          {
            id: 2755,
            name: '删除项目',
            parentId: 2153,
            type: 3
          },
          {
            id: 2763,
            name: 'API 密钥创建',
            parentId: 2761,
            type: 3
          },
          {
            id: 2769,
            name: '聊天模型创建',
            parentId: 2767,
            type: 3
          },
          {
            id: 2775,
            name: '聊天角色创建',
            parentId: 2773,
            type: 3
          },
          {
            id: 2780,
            name: '会话删除',
            parentId: 2778,
            type: 3
          },
          {
            id: 2783,
            name: 'AI 绘画',
            parentId: 2758,
            type: 2
          },
          {
            id: 2787,
            name: '绘图更新',
            parentId: 2784,
            type: 3
          },
          {
            id: 2803,
            name: '会话更新',
            parentId: 2797,
            type: 3
          },
          {
            id: 2810,
            name: '积分商城活动创建',
            parentId: 2808,
            type: 3
          },
          {
            id: 2917,
            name: 'AI 知识库创建',
            parentId: 2915,
            type: 3
          },
          {
            id: 2922,
            name: '工具创建',
            parentId: 2920,
            type: 3
          },
          {
            id: 4001,
            name: '设备接入',
            parentId: 4000,
            type: 1
          },
          {
            id: 4002,
            name: '产品管理',
            parentId: 4001,
            type: 2
          },
          {
            id: 4004,
            name: '产品创建',
            parentId: 4002,
            type: 3
          },
          {
            id: 4010,
            name: '设备创建',
            parentId: 4008,
            type: 3
          },
          {
            id: 4016,
            name: '产品分类创建',
            parentId: 4014,
            type: 3
          },
          {
            id: 4027,
            name: '插件创建',
            parentId: 4025,
            type: 3
          },
          {
            id: 4033,
            name: '设备分组创建',
            parentId: 4031,
            type: 3
          },
          {
            id: 4037,
            name: '产品物模型',
            parentId: 4001,
            type: 2
          },
          {
            id: 4039,
            name: '产品物模型功能创建',
            parentId: 4037,
            type: 3
          },
          {
            id: 4047,
            name: '运维管理',
            parentId: 4000,
            type: 1
          },
          {
            id: 4053,
            name: 'IoT 数据桥梁创建',
            parentId: 4051,
            type: 3
          },
          {
            id: 5002,
            name: 'AI 工作流创建',
            parentId: 5000,
            type: 3
          },
          {
            id: 5012,
            name: '转账订单导出',
            parentId: 2559,
            type: 3
          },
          {
            id: 102,
            name: '菜单管理',
            parentId: 1,
            type: 2
          },
          {
            id: 112,
            name: 'Java 监控',
            parentId: 2740,
            type: 2
          },
          {
            id: 116,
            name: 'API 接口',
            parentId: 2,
            type: 2
          },
          {
            id: 1003,
            name: '用户修改',
            parentId: 100,
            type: 3
          },
          {
            id: 1010,
            name: '角色修改',
            parentId: 101,
            type: 3
          },
          {
            id: 1015,
            name: '菜单修改',
            parentId: 102,
            type: 3
          },
          {
            id: 1019,
            name: '部门修改',
            parentId: 103,
            type: 3
          },
          {
            id: 1023,
            name: '岗位修改',
            parentId: 104,
            type: 3
          },
          {
            id: 1028,
            name: '字典修改',
            parentId: 105,
            type: 3
          },
          {
            id: 1033,
            name: '配置修改',
            parentId: 106,
            type: 3
          },
          {
            id: 1038,
            name: '公告修改',
            parentId: 107,
            type: 3
          },
          {
            id: 1045,
            name: '日志导出',
            parentId: 501,
            type: 3
          },
          {
            id: 1051,
            name: '任务修改',
            parentId: 110,
            type: 3
          },
          {
            id: 1057,
            name: '生成删除',
            parentId: 115,
            type: 3
          },
          {
            id: 1086,
            name: '日志导出',
            parentId: 1084,
            type: 3
          },
          {
            id: 1097,
            name: '短信渠道更新',
            parentId: 1094,
            type: 3
          },
          {
            id: 1103,
            name: '短信模板更新',
            parentId: 1100,
            type: 3
          },
          {
            id: 1129,
            name: '支付应用信息更新',
            parentId: 1126,
            type: 3
          },
          {
            id: 1135,
            name: '支付商户信息更新',
            parentId: 1132,
            type: 3
          },
          {
            id: 1141,
            name: '租户更新',
            parentId: 1138,
            type: 3
          },
          {
            id: 1161,
            name: '退款订单',
            parentId: 1117,
            type: 2
          },
          {
            id: 1190,
            name: '表单更新',
            parentId: 1187,
            type: 3
          },
          {
            id: 1212,
            name: '用户组更新',
            parentId: 1209,
            type: 3
          },
          {
            id: 1220,
            name: '流程实例的取消',
            parentId: 1201,
            type: 3
          },
          {
            id: 1228,
            name: '租户套餐更新',
            parentId: 1225,
            type: 3
          },
          {
            id: 1240,
            name: '文件配置更新',
            parentId: 1237,
            type: 3
          },
          {
            id: 1258,
            name: '数据源配置更新',
            parentId: 1255,
            type: 3
          },
          {
            id: 1266,
            name: '客户端更新',
            parentId: 1263,
            type: 3
          },
          {
            id: 2005,
            name: '分类更新',
            parentId: 2002,
            type: 3
          },
          {
            id: 2008,
            name: '商品品牌',
            parentId: 2000,
            type: 2
          },
          {
            id: 2011,
            name: '品牌更新',
            parentId: 2008,
            type: 3
          },
          {
            id: 2017,
            name: '商品更新',
            parentId: 2014,
            type: 3
          },
          {
            id: 2022,
            name: '规格更新',
            parentId: 2019,
            type: 3
          },
          {
            id: 2028,
            name: 'Banner更新',
            parentId: 2025,
            type: 3
          },
          {
            id: 2035,
            name: '优惠劵模板更新',
            parentId: 2032,
            type: 3
          },
          {
            id: 2044,
            name: '满减送活动更新',
            parentId: 2041,
            type: 3
          },
          {
            id: 2050,
            name: '限时折扣活动更新',
            parentId: 2047,
            type: 3
          },
          {
            id: 2062,
            name: '秒杀活动更新',
            parentId: 2059,
            type: 3
          },
          {
            id: 2069,
            name: '秒杀时段更新',
            parentId: 2066,
            type: 3
          },
          {
            id: 2089,
            name: '删除账号',
            parentId: 2085,
            type: 3
          },
          {
            id: 2093,
            name: '标签管理',
            parentId: 2084,
            type: 2
          },
          {
            id: 2097,
            name: '删除标签',
            parentId: 2093,
            type: 3
          },
          {
            id: 2107,
            name: '删除发布记录',
            parentId: 2104,
            type: 3
          },
          {
            id: 2112,
            name: '删除草稿',
            parentId: 2108,
            type: 3
          },
          {
            id: 2116,
            name: '删除素材',
            parentId: 2113,
            type: 3
          },
          {
            id: 2124,
            name: '删除回复',
            parentId: 2120,
            type: 3
          },
          {
            id: 2134,
            name: '账号更新',
            parentId: 2131,
            type: 3
          },
          {
            id: 2139,
            name: '模版更新',
            parentId: 2136,
            type: 3
          },
          {
            id: 2144,
            name: '站内信管理',
            parentId: 2739,
            type: 1
          },
          {
            id: 2148,
            name: '站内信模板更新',
            parentId: 2145,
            type: 3
          },
          {
            id: 2157,
            name: '使用 SQL 查询数据',
            parentId: 2153,
            type: 3
          },
          {
            id: 2164,
            name: '配送管理',
            parentId: 2072,
            type: 1
          },
          {
            id: 2170,
            name: '快递公司更新',
            parentId: 2167,
            type: 3
          },
          {
            id: 2176,
            name: '快递运费模板更新',
            parentId: 2173,
            type: 3
          },
          {
            id: 2182,
            name: '自提门店更新',
            parentId: 2179,
            type: 3
          },
          {
            id: 2209,
            name: '秒杀活动',
            parentId: 2030,
            type: 2
          },
          {
            id: 2284,
            name: '积分签到规则更新',
            parentId: 2281,
            type: 3
          },
          {
            id: 2293,
            name: '签到记录',
            parentId: 2300,
            type: 2
          },
          {
            id: 2303,
            name: '拼团活动',
            parentId: 2030,
            type: 2
          },
          {
            id: 2307,
            name: '拼团活动更新',
            parentId: 2304,
            type: 3
          },
          {
            id: 2314,
            name: '砍价活动更新',
            parentId: 2311,
            type: 3
          },
          {
            id: 2319,
            name: '会员用户更新',
            parentId: 2317,
            type: 3
          },
          {
            id: 2323,
            name: '会员标签更新',
            parentId: 2320,
            type: 3
          },
          {
            id: 2328,
            name: '会员等级更新',
            parentId: 2325,
            type: 3
          },
          {
            id: 2330,
            name: '会员分组',
            parentId: 2262,
            type: 2
          },
          {
            id: 2333,
            name: '用户分组更新',
            parentId: 2330,
            type: 3
          },
          {
            id: 2339,
            name: '商家回复',
            parentId: 2336,
            type: 3
          },
          {
            id: 2349,
            name: '分销用户推广订单查询',
            parentId: 2346,
            type: 3
          },
          {
            id: 2380,
            name: '分类更新',
            parentId: 2377,
            type: 3
          },
          {
            id: 2385,
            name: '文章管理更新',
            parentId: 2382,
            type: 3
          },
          {
            id: 2394,
            name: '客户更新',
            parentId: 2391,
            type: 3
          },
          {
            id: 2401,
            name: '合同更新',
            parentId: 2398,
            type: 3
          },
          {
            id: 2407,
            name: '线索更新',
            parentId: 2404,
            type: 3
          },
          {
            id: 2413,
            name: '商机更新',
            parentId: 2410,
            type: 3
          },
          {
            id: 2419,
            name: '联系人更新',
            parentId: 2416,
            type: 3
          },
          {
            id: 2425,
            name: '回款管理更新',
            parentId: 2422,
            type: 3
          },
          {
            id: 2431,
            name: '回款计划更新',
            parentId: 2428,
            type: 3
          },
          {
            id: 2439,
            name: '装修模板更新',
            parentId: 2436,
            type: 3
          },
          {
            id: 2445,
            name: '装修页面更新',
            parentId: 2442,
            type: 3
          },
          {
            id: 2481,
            name: '示例联系人更新',
            parentId: 2478,
            type: 3
          },
          {
            id: 2487,
            name: '示例分类更新',
            parentId: 2484,
            type: 3
          },
          {
            id: 2493,
            name: '学生更新',
            parentId: 2490,
            type: 3
          },
          {
            id: 2521,
            name: '客户限制配置更新',
            parentId: 2518,
            type: 3
          },
          {
            id: 2529,
            name: '产品更新',
            parentId: 2526,
            type: 3
          },
          {
            id: 2532,
            name: '产品分类配置',
            parentId: 2524,
            type: 2
          },
          {
            id: 2535,
            name: '产品分类更新',
            parentId: 2532,
            type: 3
          },
          {
            id: 2545,
            name: '商品统计',
            parentId: 2358,
            type: 2
          },
          {
            id: 2555,
            name: '钱包充值套餐更新',
            parentId: 2552,
            type: 3
          },
          {
            id: 2559,
            name: '转账订单',
            parentId: 1117,
            type: 2
          },
          {
            id: 2568,
            name: '产品更新',
            parentId: 2565,
            type: 3
          },
          {
            id: 2574,
            name: '分类更新',
            parentId: 2571,
            type: 3
          },
          {
            id: 2580,
            name: '单位更新',
            parentId: 2577,
            type: 3
          },
          {
            id: 2587,
            name: '仓库更新',
            parentId: 2584,
            type: 3
          },
          {
            id: 2596,
            name: '其它入库',
            parentId: 2583,
            type: 2
          },
          {
            id: 2599,
            name: '其它入库单更新',
            parentId: 2596,
            type: 3
          },
          {
            id: 2606,
            name: '供应商更新',
            parentId: 2603,
            type: 3
          },
          {
            id: 2613,
            name: '其它出库单更新',
            parentId: 2610,
            type: 3
          },
          {
            id: 2621,
            name: '客户更新',
            parentId: 2618,
            type: 3
          },
          {
            id: 2627,
            name: '库存调度单更新',
            parentId: 2624,
            type: 3
          },
          {
            id: 2634,
            name: '库存盘点单更新',
            parentId: 2631,
            type: 3
          },
          {
            id: 2641,
            name: '销售订单更新',
            parentId: 2638,
            type: 3
          },
          {
            id: 2649,
            name: '结算账户更新',
            parentId: 2646,
            type: 3
          },
          {
            id: 2655,
            name: '销售出库更新',
            parentId: 2652,
            type: 3
          },
          {
            id: 2659,
            name: '销售退货',
            parentId: 2617,
            type: 2
          },
          {
            id: 2662,
            name: '销售退货更新',
            parentId: 2659,
            type: 3
          },
          {
            id: 2669,
            name: '采购订单更新',
            parentId: 2666,
            type: 3
          },
          {
            id: 2676,
            name: '采购入库更新',
            parentId: 2673,
            type: 3
          },
          {
            id: 2680,
            name: '采购退货',
            parentId: 2602,
            type: 2
          },
          {
            id: 2683,
            name: '采购退货更新',
            parentId: 2680,
            type: 3
          },
          {
            id: 2690,
            name: '付款单更新',
            parentId: 2687,
            type: 3
          },
          {
            id: 2697,
            name: '收款单更新',
            parentId: 2694,
            type: 3
          },
          {
            id: 2706,
            name: '商机状态更新',
            parentId: 2703,
            type: 3
          },
          {
            id: 2714,
            name: '流程分类',
            parentId: 1186,
            type: 2
          },
          {
            id: 2717,
            name: '分类更新',
            parentId: 2714,
            type: 3
          },
          {
            id: 2729,
            name: '流程监听器更新',
            parentId: 2726,
            type: 3
          },
          {
            id: 2734,
            name: '流程表达式更新',
            parentId: 2731,
            type: 3
          },
          {
            id: 2736,
            name: '员工业绩',
            parentId: 2560,
            type: 2
          },
          {
            id: 2752,
            name: '售后不同意',
            parentId: 2073,
            type: 3
          },
          {
            id: 2764,
            name: 'API 密钥更新',
            parentId: 2761,
            type: 3
          },
          {
            id: 2770,
            name: '聊天模型更新',
            parentId: 2767,
            type: 3
          },
          {
            id: 2776,
            name: '聊天角色更新',
            parentId: 2773,
            type: 3
          },
          {
            id: 2790,
            name: '音乐更新',
            parentId: 2788,
            type: 3
          },
          {
            id: 2792,
            name: 'AI 写作',
            parentId: 2758,
            type: 2
          },
          {
            id: 2805,
            name: '会话删除',
            parentId: 2797,
            type: 3
          },
          {
            id: 2811,
            name: '积分商城活动更新',
            parentId: 2808,
            type: 3
          },
          {
            id: 2918,
            name: 'AI 知识库更新',
            parentId: 2915,
            type: 3
          },
          {
            id: 2923,
            name: '工具更新',
            parentId: 2920,
            type: 3
          },
          {
            id: 4005,
            name: '产品更新',
            parentId: 4002,
            type: 3
          },
          {
            id: 4011,
            name: '设备更新',
            parentId: 4008,
            type: 3
          },
          {
            id: 4017,
            name: '产品分类更新',
            parentId: 4014,
            type: 3
          },
          {
            id: 4028,
            name: '插件更新',
            parentId: 4025,
            type: 3
          },
          {
            id: 4031,
            name: '设备分组',
            parentId: 4001,
            type: 2
          },
          {
            id: 4034,
            name: '设备分组更新',
            parentId: 4031,
            type: 3
          },
          {
            id: 4040,
            name: '产品物模型功能更新',
            parentId: 4037,
            type: 3
          },
          {
            id: 4048,
            name: '规则引擎',
            parentId: 4000,
            type: 1
          },
          {
            id: 4054,
            name: 'IoT 数据桥梁更新',
            parentId: 4051,
            type: 3
          },
          {
            id: 5003,
            name: 'AI 工作流更新',
            parentId: 5000,
            type: 3
          },
          {
            id: 103,
            name: '部门管理',
            parentId: 1,
            type: 2
          },
          {
            id: 107,
            name: '通知公告',
            parentId: 2739,
            type: 2
          },
          {
            id: 1004,
            name: '用户删除',
            parentId: 100,
            type: 3
          },
          {
            id: 1011,
            name: '角色删除',
            parentId: 101,
            type: 3
          },
          {
            id: 1016,
            name: '菜单删除',
            parentId: 102,
            type: 3
          },
          {
            id: 1020,
            name: '部门删除',
            parentId: 103,
            type: 3
          },
          {
            id: 1024,
            name: '岗位删除',
            parentId: 104,
            type: 3
          },
          {
            id: 1029,
            name: '字典删除',
            parentId: 105,
            type: 3
          },
          {
            id: 1034,
            name: '配置删除',
            parentId: 106,
            type: 3
          },
          {
            id: 1039,
            name: '公告删除',
            parentId: 107,
            type: 3
          },
          {
            id: 1052,
            name: '任务删除',
            parentId: 110,
            type: 3
          },
          {
            id: 1059,
            name: '预览代码',
            parentId: 115,
            type: 3
          },
          {
            id: 1077,
            name: '链路追踪',
            parentId: 2740,
            type: 2
          },
          {
            id: 1083,
            name: 'API 日志',
            parentId: 2,
            type: 2
          },
          {
            id: 1092,
            name: '文件删除',
            parentId: 1090,
            type: 3
          },
          {
            id: 1098,
            name: '短信渠道删除',
            parentId: 1094,
            type: 3
          },
          {
            id: 1104,
            name: '短信模板删除',
            parentId: 1100,
            type: 3
          },
          {
            id: 1130,
            name: '支付应用信息删除',
            parentId: 1126,
            type: 3
          },
          {
            id: 1136,
            name: '支付商户信息删除',
            parentId: 1132,
            type: 3
          },
          {
            id: 1142,
            name: '租户删除',
            parentId: 1138,
            type: 3
          },
          {
            id: 1191,
            name: '表单删除',
            parentId: 1187,
            type: 3
          },
          {
            id: 1197,
            name: '模型更新',
            parentId: 1193,
            type: 3
          },
          {
            id: 1209,
            name: '用户分组',
            parentId: 1186,
            type: 2
          },
          {
            id: 1213,
            name: '用户组删除',
            parentId: 1209,
            type: 3
          },
          {
            id: 1229,
            name: '租户套餐删除',
            parentId: 1225,
            type: 3
          },
          {
            id: 1241,
            name: '文件配置删除',
            parentId: 1237,
            type: 3
          },
          {
            id: 1259,
            name: '数据源配置删除',
            parentId: 1255,
            type: 3
          },
          {
            id: 1267,
            name: '客户端删除',
            parentId: 1263,
            type: 3
          },
          {
            id: 2006,
            name: '分类删除',
            parentId: 2002,
            type: 3
          },
          {
            id: 2012,
            name: '品牌删除',
            parentId: 2008,
            type: 3
          },
          {
            id: 2018,
            name: '商品删除',
            parentId: 2014,
            type: 3
          },
          {
            id: 2019,
            name: '商品属性',
            parentId: 2000,
            type: 2
          },
          {
            id: 2023,
            name: '规格删除',
            parentId: 2019,
            type: 3
          },
          {
            id: 2029,
            name: 'Banner删除',
            parentId: 2025,
            type: 3
          },
          {
            id: 2036,
            name: '优惠劵模板删除',
            parentId: 2032,
            type: 3
          },
          {
            id: 2040,
            name: '优惠劵删除',
            parentId: 2038,
            type: 3
          },
          {
            id: 2045,
            name: '满减送活动删除',
            parentId: 2041,
            type: 3
          },
          {
            id: 2051,
            name: '限时折扣活动删除',
            parentId: 2047,
            type: 3
          },
          {
            id: 2063,
            name: '秒杀活动删除',
            parentId: 2059,
            type: 3
          },
          {
            id: 2070,
            name: '秒杀时段删除',
            parentId: 2066,
            type: 3
          },
          {
            id: 2090,
            name: '生成二维码',
            parentId: 2085,
            type: 3
          },
          {
            id: 2098,
            name: '同步标签',
            parentId: 2093,
            type: 3
          },
          {
            id: 2099,
            name: '粉丝管理',
            parentId: 2084,
            type: 2
          },
          {
            id: 2117,
            name: '上传图文图片',
            parentId: 2113,
            type: 3
          },
          {
            id: 2135,
            name: '账号删除',
            parentId: 2131,
            type: 3
          },
          {
            id: 2140,
            name: '模版删除',
            parentId: 2136,
            type: 3
          },
          {
            id: 2149,
            name: '站内信模板删除',
            parentId: 2145,
            type: 3
          },
          {
            id: 2158,
            name: '使用 HTTP 查询数据',
            parentId: 2153,
            type: 3
          },
          {
            id: 2171,
            name: '快递公司删除',
            parentId: 2167,
            type: 3
          },
          {
            id: 2177,
            name: '快递运费模板删除',
            parentId: 2173,
            type: 3
          },
          {
            id: 2183,
            name: '自提门店删除',
            parentId: 2179,
            type: 3
          },
          {
            id: 2285,
            name: '积分签到规则删除',
            parentId: 2281,
            type: 3
          },
          {
            id: 2297,
            name: '用户签到积分删除',
            parentId: 2293,
            type: 3
          },
          {
            id: 2308,
            name: '拼团活动删除',
            parentId: 2304,
            type: 3
          },
          {
            id: 2310,
            name: '砍价活动',
            parentId: 2030,
            type: 2
          },
          {
            id: 2315,
            name: '砍价活动删除',
            parentId: 2311,
            type: 3
          },
          {
            id: 2324,
            name: '会员标签删除',
            parentId: 2320,
            type: 3
          },
          {
            id: 2329,
            name: '会员等级删除',
            parentId: 2325,
            type: 3
          },
          {
            id: 2334,
            name: '用户分组删除',
            parentId: 2330,
            type: 3
          },
          {
            id: 2340,
            name: '显隐评论',
            parentId: 2336,
            type: 3
          },
          {
            id: 2345,
            name: '分销管理',
            parentId: 2072,
            type: 1
          },
          {
            id: 2350,
            name: '分销用户修改推广资格',
            parentId: 2346,
            type: 3
          },
          {
            id: 2359,
            name: '交易统计',
            parentId: 2358,
            type: 2
          },
          {
            id: 2381,
            name: '分类删除',
            parentId: 2377,
            type: 3
          },
          {
            id: 2386,
            name: '文章管理删除',
            parentId: 2382,
            type: 3
          },
          {
            id: 2395,
            name: '客户删除',
            parentId: 2391,
            type: 3
          },
          {
            id: 2402,
            name: '合同删除',
            parentId: 2398,
            type: 3
          },
          {
            id: 2408,
            name: '线索删除',
            parentId: 2404,
            type: 3
          },
          {
            id: 2414,
            name: '商机删除',
            parentId: 2410,
            type: 3
          },
          {
            id: 2420,
            name: '联系人删除',
            parentId: 2416,
            type: 3
          },
          {
            id: 2426,
            name: '回款管理删除',
            parentId: 2422,
            type: 3
          },
          {
            id: 2432,
            name: '回款计划删除',
            parentId: 2428,
            type: 3
          },
          {
            id: 2440,
            name: '装修模板删除',
            parentId: 2436,
            type: 3
          },
          {
            id: 2446,
            name: '装修页面删除',
            parentId: 2442,
            type: 3
          },
          {
            id: 2482,
            name: '示例联系人删除',
            parentId: 2478,
            type: 3
          },
          {
            id: 2488,
            name: '示例分类删除',
            parentId: 2484,
            type: 3
          },
          {
            id: 2494,
            name: '学生删除',
            parentId: 2490,
            type: 3
          },
          {
            id: 2522,
            name: '客户限制配置删除',
            parentId: 2518,
            type: 3
          },
          {
            id: 2530,
            name: '产品删除',
            parentId: 2526,
            type: 3
          },
          {
            id: 2536,
            name: '产品分类删除',
            parentId: 2532,
            type: 3
          },
          {
            id: 2551,
            name: '钱包管理',
            parentId: 1117,
            type: 1
          },
          {
            id: 2556,
            name: '钱包充值套餐删除',
            parentId: 2552,
            type: 3
          },
          {
            id: 2569,
            name: '产品删除',
            parentId: 2565,
            type: 3
          },
          {
            id: 2575,
            name: '分类删除',
            parentId: 2571,
            type: 3
          },
          {
            id: 2581,
            name: '单位删除',
            parentId: 2577,
            type: 3
          },
          {
            id: 2588,
            name: '仓库删除',
            parentId: 2584,
            type: 3
          },
          {
            id: 2600,
            name: '其它入库单删除',
            parentId: 2596,
            type: 3
          },
          {
            id: 2603,
            name: '供应商信息',
            parentId: 2602,
            type: 2
          },
          {
            id: 2607,
            name: '供应商删除',
            parentId: 2603,
            type: 3
          },
          {
            id: 2610,
            name: '其它出库',
            parentId: 2583,
            type: 2
          },
          {
            id: 2614,
            name: '其它出库单删除',
            parentId: 2610,
            type: 3
          },
          {
            id: 2618,
            name: '客户信息',
            parentId: 2617,
            type: 2
          },
          {
            id: 2622,
            name: '客户删除',
            parentId: 2618,
            type: 3
          },
          {
            id: 2628,
            name: '库存调度单删除',
            parentId: 2624,
            type: 3
          },
          {
            id: 2635,
            name: '库存盘点单删除',
            parentId: 2631,
            type: 3
          },
          {
            id: 2642,
            name: '销售订单删除',
            parentId: 2638,
            type: 3
          },
          {
            id: 2650,
            name: '结算账户删除',
            parentId: 2646,
            type: 3
          },
          {
            id: 2656,
            name: '销售出库删除',
            parentId: 2652,
            type: 3
          },
          {
            id: 2663,
            name: '销售退货删除',
            parentId: 2659,
            type: 3
          },
          {
            id: 2670,
            name: '采购订单删除',
            parentId: 2666,
            type: 3
          },
          {
            id: 2677,
            name: '采购入库删除',
            parentId: 2673,
            type: 3
          },
          {
            id: 2684,
            name: '采购退货删除',
            parentId: 2680,
            type: 3
          },
          {
            id: 2691,
            name: '付款单删除',
            parentId: 2687,
            type: 3
          },
          {
            id: 2698,
            name: '收款单删除',
            parentId: 2694,
            type: 3
          },
          {
            id: 2703,
            name: '商机状态配置',
            parentId: 2524,
            type: 2
          },
          {
            id: 2707,
            name: '商机状态删除',
            parentId: 2703,
            type: 3
          },
          {
            id: 2718,
            name: '分类删除',
            parentId: 2714,
            type: 3
          },
          {
            id: 2730,
            name: '流程监听器删除',
            parentId: 2726,
            type: 3
          },
          {
            id: 2735,
            name: '流程表达式删除',
            parentId: 2731,
            type: 3
          },
          {
            id: 2737,
            name: '客户画像',
            parentId: 2560,
            type: 2
          },
          {
            id: 2753,
            name: '售后确认退货',
            parentId: 2073,
            type: 3
          },
          {
            id: 2765,
            name: 'API 密钥删除',
            parentId: 2761,
            type: 3
          },
          {
            id: 2771,
            name: '聊天模型删除',
            parentId: 2767,
            type: 3
          },
          {
            id: 2777,
            name: '聊天角色删除',
            parentId: 2773,
            type: 3
          },
          {
            id: 2786,
            name: '绘画删除',
            parentId: 2784,
            type: 3
          },
          {
            id: 2791,
            name: '音乐删除',
            parentId: 2788,
            type: 3
          },
          {
            id: 2795,
            name: 'AI 写作删除',
            parentId: 2793,
            type: 3
          },
          {
            id: 2796,
            name: 'AI 音乐',
            parentId: 2758,
            type: 2
          },
          {
            id: 2801,
            name: '思维导图删除',
            parentId: 2799,
            type: 3
          },
          {
            id: 2812,
            name: '积分商城活动删除',
            parentId: 2808,
            type: 3
          },
          {
            id: 2919,
            name: 'AI 知识库删除',
            parentId: 2915,
            type: 3
          },
          {
            id: 2924,
            name: '工具删除',
            parentId: 2920,
            type: 3
          },
          {
            id: 4006,
            name: '产品删除',
            parentId: 4002,
            type: 3
          },
          {
            id: 4008,
            name: '设备管理',
            parentId: 4001,
            type: 2
          },
          {
            id: 4012,
            name: '设备删除',
            parentId: 4008,
            type: 3
          },
          {
            id: 4018,
            name: '产品分类删除',
            parentId: 4014,
            type: 3
          },
          {
            id: 4029,
            name: '插件删除',
            parentId: 4025,
            type: 3
          },
          {
            id: 4035,
            name: '设备分组删除',
            parentId: 4031,
            type: 3
          },
          {
            id: 4041,
            name: '产品物模型功能删除',
            parentId: 4037,
            type: 3
          },
          {
            id: 4055,
            name: 'IoT 数据桥梁删除',
            parentId: 4051,
            type: 3
          },
          {
            id: 5004,
            name: 'AI 工作流删除',
            parentId: 5000,
            type: 3
          },
          {
            id: 104,
            name: '岗位管理',
            parentId: 1,
            type: 2
          },
          {
            id: 1005,
            name: '用户导出',
            parentId: 100,
            type: 3
          },
          {
            id: 1012,
            name: '角色导出',
            parentId: 101,
            type: 3
          },
          {
            id: 1025,
            name: '岗位导出',
            parentId: 104,
            type: 3
          },
          {
            id: 1030,
            name: '字典导出',
            parentId: 105,
            type: 3
          },
          {
            id: 1035,
            name: '配置导出',
            parentId: 106,
            type: 3
          },
          {
            id: 1053,
            name: '状态修改',
            parentId: 110,
            type: 3
          },
          {
            id: 1060,
            name: '生成代码',
            parentId: 115,
            type: 3
          },
          {
            id: 1090,
            name: '文件列表',
            parentId: 1243,
            type: 2
          },
          {
            id: 1105,
            name: '短信模板导出',
            parentId: 1100,
            type: 3
          },
          {
            id: 1109,
            name: '短信日志导出',
            parentId: 1107,
            type: 3
          },
          {
            id: 1137,
            name: '支付商户信息导出',
            parentId: 1132,
            type: 3
          },
          {
            id: 1143,
            name: '租户导出',
            parentId: 1138,
            type: 3
          },
          {
            id: 1166,
            name: '退款订单导出',
            parentId: 1161,
            type: 3
          },
          {
            id: 1178,
            name: '支付订单导出',
            parentId: 1173,
            type: 3
          },
          {
            id: 1192,
            name: '表单导出',
            parentId: 1187,
            type: 3
          },
          {
            id: 1198,
            name: '模型删除',
            parentId: 1193,
            type: 3
          },
          {
            id: 1242,
            name: '文件配置导出',
            parentId: 1237,
            type: 3
          },
          {
            id: 1260,
            name: '数据源配置导出',
            parentId: 1255,
            type: 3
          },
          {
            id: 2046,
            name: '满减送活动关闭',
            parentId: 2041,
            type: 3
          },
          {
            id: 2052,
            name: '限时折扣活动关闭',
            parentId: 2047,
            type: 3
          },
          {
            id: 2075,
            name: '秒杀活动关闭',
            parentId: 2059,
            type: 3
          },
          {
            id: 2091,
            name: '清空 API 配额',
            parentId: 2085,
            type: 3
          },
          {
            id: 2103,
            name: '消息管理',
            parentId: 2084,
            type: 2
          },
          {
            id: 2118,
            name: '查询素材',
            parentId: 2113,
            type: 3
          },
          {
            id: 2143,
            name: '发送测试邮件',
            parentId: 2136,
            type: 3
          },
          {
            id: 2150,
            name: '发送测试站内信',
            parentId: 2145,
            type: 3
          },
          {
            id: 2162,
            name: '商品导出',
            parentId: 2014,
            type: 3
          },
          {
            id: 2172,
            name: '快递公司导出',
            parentId: 2167,
            type: 3
          },
          {
            id: 2178,
            name: '快递运费模板导出',
            parentId: 2173,
            type: 3
          },
          {
            id: 2184,
            name: '自提门店导出',
            parentId: 2179,
            type: 3
          },
          {
            id: 2301,
            name: '回调通知',
            parentId: 1117,
            type: 2
          },
          {
            id: 2309,
            name: '拼团活动关闭',
            parentId: 2304,
            type: 3
          },
          {
            id: 2316,
            name: '砍价活动关闭',
            parentId: 2311,
            type: 3
          },
          {
            id: 2335,
            name: '用户等级修改',
            parentId: 2317,
            type: 3
          },
          {
            id: 2336,
            name: '商品评论',
            parentId: 2000,
            type: 2
          },
          {
            id: 2351,
            name: '修改推广员',
            parentId: 2346,
            type: 3
          },
          {
            id: 2396,
            name: '客户导出',
            parentId: 2391,
            type: 3
          },
          {
            id: 2403,
            name: '合同导出',
            parentId: 2398,
            type: 3
          },
          {
            id: 2409,
            name: '线索导出',
            parentId: 2404,
            type: 3
          },
          {
            id: 2415,
            name: '商机导出',
            parentId: 2410,
            type: 3
          },
          {
            id: 2421,
            name: '联系人导出',
            parentId: 2416,
            type: 3
          },
          {
            id: 2427,
            name: '回款管理导出',
            parentId: 2422,
            type: 3
          },
          {
            id: 2433,
            name: '回款计划导出',
            parentId: 2428,
            type: 3
          },
          {
            id: 2441,
            name: '装修模板使用',
            parentId: 2436,
            type: 3
          },
          {
            id: 2483,
            name: '示例联系人导出',
            parentId: 2478,
            type: 3
          },
          {
            id: 2489,
            name: '示例分类导出',
            parentId: 2484,
            type: 3
          },
          {
            id: 2495,
            name: '学生导出',
            parentId: 2490,
            type: 3
          },
          {
            id: 2523,
            name: '客户限制配置导出',
            parentId: 2518,
            type: 3
          },
          {
            id: 2525,
            name: 'WebSocket',
            parentId: 2,
            type: 2
          },
          {
            id: 2531,
            name: '产品导出',
            parentId: 2526,
            type: 3
          },
          {
            id: 2570,
            name: '产品导出',
            parentId: 2565,
            type: 3
          },
          {
            id: 2576,
            name: '分类导出',
            parentId: 2571,
            type: 3
          },
          {
            id: 2582,
            name: '单位导出',
            parentId: 2577,
            type: 3
          },
          {
            id: 2589,
            name: '仓库导出',
            parentId: 2584,
            type: 3
          },
          {
            id: 2592,
            name: '库存导出',
            parentId: 2590,
            type: 3
          },
          {
            id: 2595,
            name: '库存明细导出',
            parentId: 2593,
            type: 3
          },
          {
            id: 2601,
            name: '其它入库单导出',
            parentId: 2596,
            type: 3
          },
          {
            id: 2608,
            name: '供应商导出',
            parentId: 2603,
            type: 3
          },
          {
            id: 2615,
            name: '其它出库单导出',
            parentId: 2610,
            type: 3
          },
          {
            id: 2623,
            name: '客户导出',
            parentId: 2618,
            type: 3
          },
          {
            id: 2624,
            name: '库存调拨',
            parentId: 2583,
            type: 2
          },
          {
            id: 2629,
            name: '库存调度单导出',
            parentId: 2624,
            type: 3
          },
          {
            id: 2636,
            name: '库存盘点单导出',
            parentId: 2631,
            type: 3
          },
          {
            id: 2643,
            name: '销售订单导出',
            parentId: 2638,
            type: 3
          },
          {
            id: 2651,
            name: '结算账户导出',
            parentId: 2646,
            type: 3
          },
          {
            id: 2657,
            name: '销售出库导出',
            parentId: 2652,
            type: 3
          },
          {
            id: 2664,
            name: '销售退货导出',
            parentId: 2659,
            type: 3
          },
          {
            id: 2671,
            name: '采购订单导出',
            parentId: 2666,
            type: 3
          },
          {
            id: 2678,
            name: '采购入库导出',
            parentId: 2673,
            type: 3
          },
          {
            id: 2685,
            name: '采购退货导出',
            parentId: 2680,
            type: 3
          },
          {
            id: 2692,
            name: '付款单导出',
            parentId: 2687,
            type: 3
          },
          {
            id: 2699,
            name: '收款单导出',
            parentId: 2694,
            type: 3
          },
          {
            id: 2708,
            name: '合同配置',
            parentId: 2524,
            type: 2
          },
          {
            id: 2726,
            name: '流程监听器',
            parentId: 1186,
            type: 2
          },
          {
            id: 2738,
            name: '销售漏斗',
            parentId: 2560,
            type: 2
          },
          {
            id: 2754,
            name: '售后确认退款',
            parentId: 2073,
            type: 3
          },
          {
            id: 2808,
            name: '积分商城',
            parentId: 2030,
            type: 2
          },
          {
            id: 2813,
            name: '积分商城活动导出',
            parentId: 2808,
            type: 3
          },
          {
            id: 2915,
            name: 'AI 知识库',
            parentId: 2758,
            type: 2
          },
          {
            id: 4007,
            name: '产品导出',
            parentId: 4002,
            type: 3
          },
          {
            id: 4013,
            name: '设备导出',
            parentId: 4008,
            type: 3
          },
          {
            id: 4025,
            name: '插件管理',
            parentId: 4047,
            type: 2
          },
          {
            id: 4030,
            name: '插件导出',
            parentId: 4025,
            type: 3
          },
          {
            id: 4042,
            name: '产品物模型功能导出',
            parentId: 4037,
            type: 3
          },
          {
            id: 4056,
            name: 'IoT 数据桥梁导出',
            parentId: 4051,
            type: 3
          },
          {
            id: 5000,
            name: 'AI 工作流',
            parentId: 2758,
            type: 2
          },
          {
            id: 5005,
            name: 'AI 工作流测试',
            parentId: 5000,
            type: 3
          },
          {
            id: 105,
            name: '字典管理',
            parentId: 1,
            type: 2
          },
          {
            id: 1006,
            name: '用户导入',
            parentId: 100,
            type: 3
          },
          {
            id: 1063,
            name: '设置角色菜单权限',
            parentId: 101,
            type: 3
          },
          {
            id: 1106,
            name: '发送测试短信',
            parentId: 1100,
            type: 3
          },
          {
            id: 1132,
            name: '秘钥解析',
            parentId: 1129,
            type: 3
          },
          {
            id: 1150,
            name: '秘钥解析',
            parentId: 1129,
            type: 3
          },
          {
            id: 1199,
            name: '模型发布',
            parentId: 1193,
            type: 3
          },
          {
            id: 1243,
            name: '文件管理',
            parentId: 2,
            type: 2
          },
          {
            id: 2119,
            name: '菜单管理',
            parentId: 2084,
            type: 2
          },
          {
            id: 2352,
            name: '清除推广员',
            parentId: 2346,
            type: 3
          },
          {
            id: 2363,
            name: '用户积分修改',
            parentId: 2317,
            type: 3
          },
          {
            id: 2562,
            name: '客户导入',
            parentId: 2391,
            type: 3
          },
          {
            id: 2609,
            name: '其它入库单审批',
            parentId: 2596,
            type: 3
          },
          {
            id: 2616,
            name: '其它出库单审批',
            parentId: 2610,
            type: 3
          },
          {
            id: 2630,
            name: '库存调度单审批',
            parentId: 2624,
            type: 3
          },
          {
            id: 2631,
            name: '库存盘点',
            parentId: 2583,
            type: 2
          },
          {
            id: 2637,
            name: '库存盘点单审批',
            parentId: 2631,
            type: 3
          },
          {
            id: 2644,
            name: '销售订单审批',
            parentId: 2638,
            type: 3
          },
          {
            id: 2658,
            name: '销售出库审批',
            parentId: 2652,
            type: 3
          },
          {
            id: 2665,
            name: '销售退货审批',
            parentId: 2659,
            type: 3
          },
          {
            id: 2672,
            name: '采购订单审批',
            parentId: 2666,
            type: 3
          },
          {
            id: 2679,
            name: '采购入库审批',
            parentId: 2673,
            type: 3
          },
          {
            id: 2686,
            name: '采购退货审批',
            parentId: 2680,
            type: 3
          },
          {
            id: 2693,
            name: '付款单审批',
            parentId: 2687,
            type: 3
          },
          {
            id: 2700,
            name: '收款单审批',
            parentId: 2694,
            type: 3
          },
          {
            id: 2731,
            name: '流程表达式',
            parentId: 1186,
            type: 2
          },
          {
            id: 2798,
            name: 'AI 思维导图',
            parentId: 2758,
            type: 2
          },
          {
            id: 2914,
            name: '积分商城活动关闭',
            parentId: 2808,
            type: 3
          },
          {
            id: 4036,
            name: '设备导入',
            parentId: 4008,
            type: 3
          },
          {
            id: 110,
            name: '定时任务',
            parentId: 2,
            type: 2
          },
          {
            id: 1007,
            name: '重置密码',
            parentId: 100,
            type: 3
          },
          {
            id: 1054,
            name: '任务导出',
            parentId: 110,
            type: 3
          },
          {
            id: 1064,
            name: '设置角色数据权限',
            parentId: 101,
            type: 3
          },
          {
            id: 2047,
            name: '限时折扣',
            parentId: 2390,
            type: 2
          },
          {
            id: 2120,
            name: '自动回复',
            parentId: 2084,
            type: 2
          },
          {
            id: 2364,
            name: '用户余额修改',
            parentId: 2317,
            type: 3
          },
          {
            id: 2739,
            name: '消息中心',
            parentId: 1,
            type: 1
          },
          {
            id: 2912,
            name: '创建推广员',
            parentId: 2346,
            type: 3
          },
          {
            id: 2913,
            name: '流程清理',
            parentId: 1193,
            type: 3
          },
          {
            id: 4043,
            name: '设备上行',
            parentId: 4008,
            type: 3
          },
          {
            id: 106,
            name: '配置管理',
            parentId: 2,
            type: 2
          },
          {
            id: 1065,
            name: '设置用户角色',
            parentId: 101,
            type: 3
          },
          {
            id: 1075,
            name: '任务触发',
            parentId: 110,
            type: 3
          },
          {
            id: 2113,
            name: '素材管理',
            parentId: 2084,
            type: 2
          },
          {
            id: 2404,
            name: '线索管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 4046,
            name: '设备下行',
            parentId: 4008,
            type: 3
          },
          {
            id: 108,
            name: '审计日志',
            parentId: 1,
            type: 1
          },
          {
            id: 2108,
            name: '图文草稿箱',
            parentId: 2084,
            type: 2
          },
          {
            id: 1,
            name: '系统管理',
            parentId: 0,
            type: 1
          },
          {
            id: 1186,
            name: '流程管理',
            parentId: 1185,
            type: 1
          },
          {
            id: 1207,
            name: '待办任务',
            parentId: 1200,
            type: 2
          },
          {
            id: 1215,
            name: '流程定义查询',
            parentId: 1193,
            type: 3
          },
          {
            id: 1261,
            name: 'OAuth 2.0',
            parentId: 1,
            type: 2
          },
          {
            id: 2041,
            name: '满减送',
            parentId: 2390,
            type: 2
          },
          {
            id: 2104,
            name: '图文发表记录',
            parentId: 2084,
            type: 2
          },
          {
            id: 2287,
            name: '会员积分',
            parentId: 2262,
            type: 2
          },
          {
            id: 2376,
            name: '订单核销',
            parentId: 2076,
            type: 3
          },
          {
            id: 2391,
            name: '客户管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 2490,
            name: '主子表（标准）',
            parentId: 1070,
            type: 2
          },
          {
            id: 2543,
            name: '关联商机',
            parentId: 2416,
            type: 3
          },
          {
            id: 2602,
            name: '采购管理',
            parentId: 2563,
            type: 1
          },
          {
            id: 2646,
            name: '结算账户',
            parentId: 2645,
            type: 2
          },
          {
            id: 2721,
            name: '流程实例',
            parentId: 1186,
            type: 2
          },
          {
            id: 2740,
            name: '监控中心',
            parentId: 2,
            type: 1
          },
          {
            id: 2745,
            name: '支付渠道查询',
            parentId: 1126,
            type: 3
          },
          {
            id: 2749,
            name: '商品收藏查询',
            parentId: 2014,
            type: 3
          },
          {
            id: 2756,
            name: '会员等级记录查询',
            parentId: 2325,
            type: 3
          },
          {
            id: 2778,
            name: '聊天管理',
            parentId: 2760,
            type: 2
          },
          {
            id: 2804,
            name: '消息查询',
            parentId: 2797,
            type: 3
          },
          {
            id: 4044,
            name: '设备属性查询',
            parentId: 4008,
            type: 3
          },
          {
            id: 2300,
            name: '会员签到',
            parentId: 2262,
            type: 1
          },
          {
            id: 2497,
            name: '主子表（ERP）',
            parentId: 1070,
            type: 2
          },
          {
            id: 2544,
            name: '取关商机',
            parentId: 2416,
            type: 3
          },
          {
            id: 2724,
            name: '流程任务',
            parentId: 1186,
            type: 2
          },
          {
            id: 2746,
            name: '支付渠道创建',
            parentId: 1126,
            type: 3
          },
          {
            id: 2757,
            name: '会员经验记录查询',
            parentId: 2325,
            type: 3
          },
          {
            id: 2781,
            name: '消息查询',
            parentId: 2778,
            type: 3
          },
          {
            id: 2784,
            name: '绘画管理',
            parentId: 2760,
            type: 2
          },
          {
            id: 2807,
            name: '消息更新',
            parentId: 2797,
            type: 3
          },
          {
            id: 4045,
            name: '设备日志查询',
            parentId: 4008,
            type: 3
          },
          {
            id: 2472,
            name: '主子表（内嵌）',
            parentId: 1070,
            type: 2
          },
          {
            id: 2747,
            name: '支付渠道更新',
            parentId: 1126,
            type: 3
          },
          {
            id: 2782,
            name: '消息删除',
            parentId: 2778,
            type: 3
          },
          {
            id: 2788,
            name: '音乐管理',
            parentId: 2760,
            type: 2
          },
          {
            id: 2806,
            name: '消息发送',
            parentId: 2797,
            type: 3
          },
          {
            id: 2748,
            name: '支付渠道删除',
            parentId: 1126,
            type: 3
          },
          {
            id: 2793,
            name: '写作管理',
            parentId: 2760,
            type: 2
          },
          {
            id: 2083,
            name: '地区管理',
            parentId: 1,
            type: 2
          },
          {
            id: 2799,
            name: '导图管理',
            parentId: 2760,
            type: 2
          },
          {
            id: 2,
            name: '基础设施',
            parentId: 0,
            type: 1
          },
          {
            id: 1200,
            name: '审批中心',
            parentId: 1185,
            type: 2
          },
          {
            id: 1208,
            name: '已办任务',
            parentId: 1200,
            type: 2
          },
          {
            id: 1216,
            name: '流程任务分配规则查询',
            parentId: 1193,
            type: 3
          },
          {
            id: 2416,
            name: '联系人管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 2435,
            name: '商城装修',
            parentId: 2030,
            type: 2
          },
          {
            id: 2617,
            name: '销售管理',
            parentId: 2563,
            type: 1
          },
          {
            id: 2750,
            name: '商品浏览查询',
            parentId: 2014,
            type: 3
          },
          {
            id: 1217,
            name: '流程任务分配规则创建',
            parentId: 1193,
            type: 3
          },
          {
            id: 1218,
            name: '流程任务分配规则更新',
            parentId: 1193,
            type: 3
          },
          {
            id: 1117,
            name: '支付管理',
            parentId: 0,
            type: 1
          },
          {
            id: 2546,
            name: '客户公海',
            parentId: 2397,
            type: 2
          },
          {
            id: 2583,
            name: '库存管理',
            parentId: 2563,
            type: 1
          },
          {
            id: 2713,
            name: '抄送我的',
            parentId: 1200,
            type: 2
          },
          {
            id: 5,
            name: 'OA 示例',
            parentId: 1185,
            type: 1
          },
          {
            id: 1281,
            name: '报表管理',
            parentId: 0,
            type: 2
          },
          {
            id: 2410,
            name: '商机管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 2564,
            name: '产品管理',
            parentId: 2563,
            type: 1
          },
          {
            id: 2398,
            name: '合同管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 2645,
            name: '财务管理',
            parentId: 2563,
            type: 1
          },
          {
            id: 2362,
            name: '商城系统',
            parentId: 0,
            type: 1
          },
          {
            id: 2000,
            name: '商品中心',
            parentId: 2362,
            type: 1
          },
          {
            id: 2422,
            name: '回款管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 2428,
            name: '回款计划',
            parentId: 2397,
            type: 2
          },
          {
            id: 2072,
            name: '订单中心',
            parentId: 2362,
            type: 1
          },
          {
            id: 2030,
            name: '营销中心',
            parentId: 2362,
            type: 1
          },
          {
            id: 2358,
            name: '统计中心',
            parentId: 2362,
            type: 1
          },
          {
            id: 2526,
            name: '产品管理',
            parentId: 2397,
            type: 2
          },
          {
            id: 2161,
            name: '接入示例',
            parentId: 1117,
            type: 1
          },
          {
            id: 2390,
            name: '优惠活动',
            parentId: 2030,
            type: 1
          },
          {
            id: 2025,
            name: 'Banner',
            parentId: 2387,
            type: 2
          },
          {
            id: 2760,
            name: '控制台',
            parentId: 2758,
            type: 1
          },
          {
            id: 2797,
            name: '客服中心',
            parentId: 2362,
            type: 2
          },
          {
            id: 2397,
            name: 'CRM 系统',
            parentId: 0,
            type: 1
          },
          {
            id: 2560,
            name: '数据统计',
            parentId: 2397,
            type: 1
          },
          {
            id: 2524,
            name: '系统配置',
            parentId: 2397,
            type: 1
          },
          {
            id: 5010,
            name: '租户切换',
            parentId: 1138,
            type: 3
          }
        ],
        msg: ''
      }
    }
  },
  {
    url: '/admin-api/system/menu/list',
    type: 'get',
    response: {
      "code": 0,
      "data": [
          {
              "id": 1094,
              "name": "短信渠道",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 1093,
              "path": "sms-channel",
              "icon": "fa:stack-exchange",
              "component": "system/sms/channel/index",
              "componentName": "SystemSmsChannel",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617246435000
          },
          {
              "id": 1118,
              "name": "请假查询",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 5,
              "path": "leave",
              "icon": "fa:leanpub",
              "component": "bpm/oa/leave/index",
              "componentName": "BpmOALeave",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1632099063000
          },
          {
              "id": 1237,
              "name": "文件配置",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 1243,
              "path": "file-config",
              "icon": "fa-solid:file-signature",
              "component": "infra/fileConfig/index",
              "componentName": "InfraFileConfig",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647326128000
          },
          {
              "id": 1263,
              "name": "应用管理",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 1261,
              "path": "oauth2/application",
              "icon": "fa:hdd-o",
              "component": "system/oauth2/client/index",
              "componentName": "SystemOAuth2Client",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1652171193000
          },
          {
              "id": 2131,
              "name": "邮箱账号",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2130,
              "path": "mail-account",
              "icon": "fa:universal-access",
              "component": "system/mail/account/index",
              "componentName": "SystemMailAccount",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674610428000
          },
          {
              "id": 2136,
              "name": "邮件模版",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2130,
              "path": "mail-template",
              "icon": "fa:tag",
              "component": "system/mail/template/index",
              "componentName": "SystemMailTemplate",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674619531000
          },
          {
              "id": 2141,
              "name": "邮件记录",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2130,
              "path": "mail-log",
              "icon": "fa:edit",
              "component": "system/mail/log/index",
              "componentName": "SystemMailLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674670610000
          },
          {
              "id": 2145,
              "name": "模板管理",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2144,
              "path": "notify-template",
              "icon": "fa:archive",
              "component": "system/notify/template/index",
              "componentName": "SystemNotifyTemplate",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674844002000
          },
          {
              "id": 2151,
              "name": "消息记录",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2144,
              "path": "notify-message",
              "icon": "fa:edit",
              "component": "system/notify/message/index",
              "componentName": "SystemNotifyMessage",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674851302000
          },
          {
              "id": 2516,
              "name": "客户公海配置",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2524,
              "path": "customer-pool-config",
              "icon": "ep:data-analysis",
              "component": "crm/customer/poolConfig/index",
              "componentName": "CrmCustomerPoolConfig",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285611000
          },
          {
              "id": 2701,
              "name": "待办事项",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 2397,
              "path": "backlog",
              "icon": "fa-solid:tasks",
              "component": "crm/backlog/index",
              "componentName": "CrmBacklog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708161431000
          },
          {
              "id": 2712,
              "name": "客户分析",
              "permission": "crm:statistics-customer:query",
              "type": 2,
              "sort": 0,
              "parentId": 2560,
              "path": "customer",
              "icon": "ep:avatar",
              "component": "crm/statistics/customer/index.vue",
              "componentName": "CrmStatisticsCustomer",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709973836000
          },
          {
              "id": 2720,
              "name": "发起流程",
              "permission": "",
              "type": 2,
              "sort": 0,
              "parentId": 1200,
              "path": "create",
              "icon": "fa-solid:grin-stars",
              "component": "bpm/processInstance/create/index",
              "componentName": "BpmProcessInstanceCreate",
              "status": 0,
              "visible": true,
              "keepAlive": false,
              "alwaysShow": true,
              "createTime": 1710848765000
          },
          {
              "id": 111,
              "name": "MySQL 监控",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 2740,
              "path": "druid",
              "icon": "fa-solid:box",
              "component": "infra/druid/index",
              "componentName": "InfraDruid",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 115,
              "name": "代码生成",
              "permission": "infra:codegen:query",
              "type": 2,
              "sort": 1,
              "parentId": 2,
              "path": "codegen",
              "icon": "ep:document-copy",
              "component": "infra/codegen/index",
              "componentName": "InfraCodegen",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 500,
              "name": "操作日志",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 108,
              "path": "operate-log",
              "icon": "ep:position",
              "component": "system/operatelog/index",
              "componentName": "SystemOperateLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1001,
              "name": "用户查询",
              "permission": "system:user:query",
              "type": 3,
              "sort": 1,
              "parentId": 100,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1008,
              "name": "角色查询",
              "permission": "system:role:query",
              "type": 3,
              "sort": 1,
              "parentId": 101,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1013,
              "name": "菜单查询",
              "permission": "system:menu:query",
              "type": 3,
              "sort": 1,
              "parentId": 102,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1017,
              "name": "部门查询",
              "permission": "system:dept:query",
              "type": 3,
              "sort": 1,
              "parentId": 103,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1021,
              "name": "岗位查询",
              "permission": "system:post:query",
              "type": 3,
              "sort": 1,
              "parentId": 104,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1026,
              "name": "字典查询",
              "permission": "system:dict:query",
              "type": 3,
              "sort": 1,
              "parentId": 105,
              "path": "#",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1031,
              "name": "配置查询",
              "permission": "infra:config:query",
              "type": 3,
              "sort": 1,
              "parentId": 106,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1036,
              "name": "公告查询",
              "permission": "system:notice:query",
              "type": 3,
              "sort": 1,
              "parentId": 107,
              "path": "#",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1040,
              "name": "操作查询",
              "permission": "system:operate-log:query",
              "type": 3,
              "sort": 1,
              "parentId": 500,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1043,
              "name": "登录查询",
              "permission": "system:login-log:query",
              "type": 3,
              "sort": 1,
              "parentId": 501,
              "path": "#",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1046,
              "name": "令牌列表",
              "permission": "system:oauth2-token:page",
              "type": 3,
              "sort": 1,
              "parentId": 109,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1066,
              "name": "获得 Redis 监控信息",
              "permission": "infra:redis:get-monitor-info",
              "type": 3,
              "sort": 1,
              "parentId": 113,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1611594151000
          },
          {
              "id": 1070,
              "name": "代码生成案例",
              "permission": "",
              "type": 1,
              "sort": 1,
              "parentId": 2,
              "path": "demo",
              "icon": "ep:aim",
              "component": "infra/testDemo/index",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1612586569000
          },
          {
              "id": 1078,
              "name": "访问日志",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 1083,
              "path": "api-access-log",
              "icon": "ep:place",
              "component": "infra/apiAccessLog/index",
              "componentName": "InfraApiAccessLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1614274379000
          },
          {
              "id": 1087,
              "name": "任务查询",
              "permission": "infra:job:query",
              "type": 3,
              "sort": 1,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1615310779000
          },
          {
              "id": 1088,
              "name": "日志查询",
              "permission": "infra:api-access-log:query",
              "type": 3,
              "sort": 1,
              "parentId": 1078,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1615310884000
          },
          {
              "id": 1089,
              "name": "日志查询",
              "permission": "infra:api-error-log:query",
              "type": 3,
              "sort": 1,
              "parentId": 1084,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1615310949000
          },
          {
              "id": 1091,
              "name": "文件查询",
              "permission": "infra:file:query",
              "type": 3,
              "sort": 1,
              "parentId": 1090,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1615551380000
          },
          {
              "id": 1093,
              "name": "短信管理",
              "permission": "",
              "type": 1,
              "sort": 1,
              "parentId": 2739,
              "path": "sms",
              "icon": "ep:message",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617556216000
          },
          {
              "id": 1095,
              "name": "短信渠道查询",
              "permission": "system:sms-channel:query",
              "type": 3,
              "sort": 1,
              "parentId": 1094,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617246435000
          },
          {
              "id": 1100,
              "name": "短信模板",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 1093,
              "path": "sms-template",
              "icon": "ep:connection",
              "component": "system/sms/template/index",
              "componentName": "SystemSmsTemplate",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617269717000
          },
          {
              "id": 1101,
              "name": "短信模板查询",
              "permission": "system:sms-template:query",
              "type": 3,
              "sort": 1,
              "parentId": 1100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617269717000
          },
          {
              "id": 1108,
              "name": "短信日志查询",
              "permission": "system:sms-log:query",
              "type": 3,
              "sort": 1,
              "parentId": 1107,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1618101425000
          },
          {
              "id": 1119,
              "name": "请假申请查询",
              "permission": "bpm:oa-leave:query",
              "type": 3,
              "sort": 1,
              "parentId": 1118,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1632099063000
          },
          {
              "id": 1188,
              "name": "表单查询",
              "permission": "bpm:form:query",
              "type": 3,
              "sort": 1,
              "parentId": 1187,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640839102000
          },
          {
              "id": 1193,
              "name": "流程模型",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 1186,
              "path": "model",
              "icon": "fa-solid:project-diagram",
              "component": "bpm/model/index",
              "componentName": "BpmModel",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640964298000
          },
          {
              "id": 1194,
              "name": "模型查询",
              "permission": "bpm:model:query",
              "type": 3,
              "sort": 1,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641207670000
          },
          {
              "id": 1201,
              "name": "我的流程",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 1200,
              "path": "my",
              "icon": "fa-solid:book",
              "component": "bpm/processInstance/index",
              "componentName": "BpmProcessInstanceMy",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641542024000
          },
          {
              "id": 1202,
              "name": "流程实例的查询",
              "permission": "bpm:process-instance:query",
              "type": 3,
              "sort": 1,
              "parentId": 1201,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641542024000
          },
          {
              "id": 1210,
              "name": "用户组查询",
              "permission": "bpm:user-group:query",
              "type": 3,
              "sort": 1,
              "parentId": 1209,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642097660000
          },
          {
              "id": 1221,
              "name": "流程任务的查询",
              "permission": "bpm:task:query",
              "type": 3,
              "sort": 1,
              "parentId": 1207,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642869532000
          },
          {
              "id": 1238,
              "name": "文件配置查询",
              "permission": "infra:file-config:query",
              "type": 3,
              "sort": 1,
              "parentId": 1237,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647326128000
          },
          {
              "id": 1255,
              "name": "数据源配置",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 2,
              "path": "data-source-config",
              "icon": "ep:data-analysis",
              "component": "infra/dataSourceConfig/index",
              "componentName": "InfraDataSourceConfig",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1651041452000
          },
          {
              "id": 1256,
              "name": "数据源配置查询",
              "permission": "infra:data-source-config:query",
              "type": 3,
              "sort": 1,
              "parentId": 1255,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1651041452000
          },
          {
              "id": 1264,
              "name": "客户端查询",
              "permission": "system:oauth2-client:query",
              "type": 3,
              "sort": 1,
              "parentId": 1263,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1652171193000
          },
          {
              "id": 2132,
              "name": "账号查询",
              "permission": "system:mail-account:query",
              "type": 3,
              "sort": 1,
              "parentId": 2131,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674610428000
          },
          {
              "id": 2137,
              "name": "模版查询",
              "permission": "system:mail-template:query",
              "type": 3,
              "sort": 1,
              "parentId": 2136,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674619531000
          },
          {
              "id": 2142,
              "name": "日志查询",
              "permission": "system:mail-log:query",
              "type": 3,
              "sort": 1,
              "parentId": 2141,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674670610000
          },
          {
              "id": 2146,
              "name": "站内信模板查询",
              "permission": "system:notify-template:query",
              "type": 3,
              "sort": 1,
              "parentId": 2145,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674844002000
          },
          {
              "id": 2152,
              "name": "站内信消息查询",
              "permission": "system:notify-message:query",
              "type": 3,
              "sort": 1,
              "parentId": 2151,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674851302000
          },
          {
              "id": 2392,
              "name": "客户查询",
              "permission": "crm:customer:query",
              "type": 3,
              "sort": 1,
              "parentId": 2391,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698541461000
          },
          {
              "id": 2399,
              "name": "合同查询",
              "permission": "crm:contract:query",
              "type": 3,
              "sort": 1,
              "parentId": 2398,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698547841000
          },
          {
              "id": 2405,
              "name": "线索查询",
              "permission": "crm:clue:query",
              "type": 3,
              "sort": 1,
              "parentId": 2404,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698548789000
          },
          {
              "id": 2411,
              "name": "商机查询",
              "permission": "crm:business:query",
              "type": 3,
              "sort": 1,
              "parentId": 2410,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549155000
          },
          {
              "id": 2417,
              "name": "联系人查询",
              "permission": "crm:contact:query",
              "type": 3,
              "sort": 1,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549296000
          },
          {
              "id": 2423,
              "name": "回款管理查询",
              "permission": "crm:receivable:query",
              "type": 3,
              "sort": 1,
              "parentId": 2422,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2429,
              "name": "回款计划查询",
              "permission": "crm:receivable-plan:query",
              "type": 3,
              "sort": 1,
              "parentId": 2428,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2478,
              "name": "单表（增删改查）",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 1070,
              "path": "demo01-contact",
              "icon": "ep:bicycle",
              "component": "infra/demo/demo01/index",
              "componentName": "Demo01Contact",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700030550000
          },
          {
              "id": 2479,
              "name": "示例联系人查询",
              "permission": "infra:demo01-contact:query",
              "type": 3,
              "sort": 1,
              "parentId": 2478,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700030550000
          },
          {
              "id": 2485,
              "name": "示例分类查询",
              "permission": "infra:demo02-category:query",
              "type": 3,
              "sort": 1,
              "parentId": 2484,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700108307000
          },
          {
              "id": 2491,
              "name": "学生查询",
              "permission": "infra:demo03-student:query",
              "type": 3,
              "sort": 1,
              "parentId": 2490,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700110417000
          },
          {
              "id": 2517,
              "name": "客户公海配置保存",
              "permission": "crm:customer-pool-config:update",
              "type": 3,
              "sort": 1,
              "parentId": 2516,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285611000
          },
          {
              "id": 2518,
              "name": "客户限制配置",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": 2524,
              "path": "customer-limit-config",
              "icon": "ep:avatar",
              "component": "crm/customer/limitConfig/index",
              "componentName": "CrmCustomerLimitConfig",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285633000
          },
          {
              "id": 2519,
              "name": "客户限制配置查询",
              "permission": "crm:customer-limit-config:query",
              "type": 3,
              "sort": 1,
              "parentId": 2518,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285633000
          },
          {
              "id": 2527,
              "name": "产品查询",
              "permission": "crm:product:query",
              "type": 3,
              "sort": 1,
              "parentId": 2526,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701787636000
          },
          {
              "id": 2533,
              "name": "产品分类查询",
              "permission": "crm:product-category:query",
              "type": 3,
              "sort": 1,
              "parentId": 2532,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701838403000
          },
          {
              "id": 2561,
              "name": "排行榜",
              "permission": "crm:statistics-rank:query",
              "type": 2,
              "sort": 1,
              "parentId": 2560,
              "path": "ranking",
              "icon": "fa:area-chart",
              "component": "crm/statistics/rank/index",
              "componentName": "CrmStatisticsRank",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1706280729000
          },
          {
              "id": 2704,
              "name": "商机状态查询",
              "permission": "crm:business-status:query",
              "type": 3,
              "sort": 1,
              "parentId": 2703,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708518936000
          },
          {
              "id": 2710,
              "name": "合同配置更新",
              "permission": "crm:contract-config:update",
              "type": 3,
              "sort": 1,
              "parentId": 2708,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708764356000
          },
          {
              "id": 2715,
              "name": "分类查询",
              "permission": "bpm:category:query",
              "type": 3,
              "sort": 1,
              "parentId": 2714,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709834451000
          },
          {
              "id": 2722,
              "name": "流程实例的查询（管理员）",
              "permission": "bpm:process-instance:manager-query",
              "type": 3,
              "sort": 1,
              "parentId": 2721,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1711066707000
          },
          {
              "id": 2725,
              "name": "流程任务的查询（管理员）",
              "permission": "bpm:task:mananger-query",
              "type": 3,
              "sort": 1,
              "parentId": 2724,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1711068229000
          },
          {
              "id": 2727,
              "name": "流程监听器查询",
              "permission": "bpm:process-listener:query",
              "type": 3,
              "sort": 1,
              "parentId": 2726,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709971534000
          },
          {
              "id": 2732,
              "name": "流程表达式查询",
              "permission": "bpm:process-expression:query",
              "type": 3,
              "sort": 1,
              "parentId": 2731,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709994908000
          },
          {
              "id": 2741,
              "name": "领取公海客户",
              "permission": "crm:customer:receive",
              "type": 3,
              "sort": 1,
              "parentId": 2546,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1713959265000
          },
          {
              "id": "1930876052676800514",
              "name": "lixh测试菜单",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": "1930876052676800513",
              "path": "tcwy",
              "icon": "ep:add-location",
              "component": "/tcwy/lixh/index",
              "componentName": "TcwyLixh",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749191976000
          },
          {
              "id": "1930877489578242050",
              "name": "yangh测试菜单",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": "1930876052676800513",
              "path": "tcwy",
              "icon": "ep:add-location",
              "component": "/tcwy/yangh/index",
              "componentName": "TcwyYangh",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749192042000
          },
          {
              "id": "1930877489578242052",
              "name": "组织架构",
              "permission": "",
              "type": 1,
              "sort": 1,
              "parentId": 1,
              "path": "organization",
              "icon": "ep:add-location",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749458889000
          },
          {
              "id": "1930877489578242053",
              "name": "用户管理",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": "1930877489578242052",
              "path": "subscriber",
              "icon": "ep:add-location",
              "component": "system/subscriber/index",
              "componentName": "SystemSubscriber",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749458921000
          },
          {
              "id": "1930877489578242057",
              "name": "角色管理",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": "1930877489578242056",
              "path": "persona",
              "icon": "ep:add-location",
              "component": "system/persona/index",
              "componentName": "SystemPersona",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459409000
          },
          {
              "id": "1930877489578242060",
              "name": "登录日志",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": "1930877489578242059",
              "path": "enterLog",
              "icon": "ep:add-location",
              "component": "system/enterLog/index",
              "componentName": "SystemEnterLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459509000
          },
          {
              "id": "1932732686457724930",
              "name": "标签管理",
              "permission": "",
              "type": 2,
              "sort": 1,
              "parentId": "1930877489578242063",
              "path": "list",
              "icon": "ep:add-location",
              "component": "/system/label/index",
              "componentName": "SystemLabelList",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749634356000
          },
          {
              "id": 109,
              "name": "令牌管理",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 1261,
              "path": "token",
              "icon": "fa:key",
              "component": "system/oauth2/token/index",
              "componentName": "SystemTokenClient",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 113,
              "name": "Redis 监控",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 2740,
              "path": "redis",
              "icon": "fa:reddit-square",
              "component": "infra/redis/index",
              "componentName": "InfraRedis",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 114,
              "name": "表单构建",
              "permission": "infra:build:list",
              "type": 2,
              "sort": 2,
              "parentId": 2,
              "path": "build",
              "icon": "fa:wpforms",
              "component": "infra/build/index",
              "componentName": "InfraBuild",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 501,
              "name": "登录日志",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 108,
              "path": "login-log",
              "icon": "ep:promotion",
              "component": "system/loginlog/index",
              "componentName": "SystemLoginLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1002,
              "name": "用户新增",
              "permission": "system:user:create",
              "type": 3,
              "sort": 2,
              "parentId": 100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1009,
              "name": "角色新增",
              "permission": "system:role:create",
              "type": 3,
              "sort": 2,
              "parentId": 101,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1014,
              "name": "菜单新增",
              "permission": "system:menu:create",
              "type": 3,
              "sort": 2,
              "parentId": 102,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1018,
              "name": "部门新增",
              "permission": "system:dept:create",
              "type": 3,
              "sort": 2,
              "parentId": 103,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1022,
              "name": "岗位新增",
              "permission": "system:post:create",
              "type": 3,
              "sort": 2,
              "parentId": 104,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1027,
              "name": "字典新增",
              "permission": "system:dict:create",
              "type": 3,
              "sort": 2,
              "parentId": 105,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1032,
              "name": "配置新增",
              "permission": "infra:config:create",
              "type": 3,
              "sort": 2,
              "parentId": 106,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1037,
              "name": "公告新增",
              "permission": "system:notice:create",
              "type": 3,
              "sort": 2,
              "parentId": 107,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1042,
              "name": "日志导出",
              "permission": "system:operate-log:export",
              "type": 3,
              "sort": 2,
              "parentId": 500,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1048,
              "name": "令牌删除",
              "permission": "system:oauth2-token:delete",
              "type": 3,
              "sort": 2,
              "parentId": 109,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1050,
              "name": "任务新增",
              "permission": "infra:job:create",
              "type": 3,
              "sort": 2,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1056,
              "name": "生成修改",
              "permission": "infra:codegen:update",
              "type": 3,
              "sort": 2,
              "parentId": 115,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1058,
              "name": "导入代码",
              "permission": "infra:codegen:create",
              "type": 3,
              "sort": 2,
              "parentId": 115,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1067,
              "name": "获得 Redis Key 列表",
              "permission": "infra:redis:get-key-list",
              "type": 3,
              "sort": 2,
              "parentId": 113,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1611594172000
          },
          {
              "id": 1082,
              "name": "日志导出",
              "permission": "infra:api-access-log:export",
              "type": 3,
              "sort": 2,
              "parentId": 1078,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1614274379000
          },
          {
              "id": 1084,
              "name": "错误日志",
              "permission": "infra:api-error-log:query",
              "type": 2,
              "sort": 2,
              "parentId": 1083,
              "path": "api-error-log",
              "icon": "ep:warning-filled",
              "component": "infra/apiErrorLog/index",
              "componentName": "InfraApiErrorLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1614297200000
          },
          {
              "id": 1085,
              "name": "日志处理",
              "permission": "infra:api-error-log:update-status",
              "type": 3,
              "sort": 2,
              "parentId": 1084,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1614297200000
          },
          {
              "id": 1096,
              "name": "短信渠道创建",
              "permission": "system:sms-channel:create",
              "type": 3,
              "sort": 2,
              "parentId": 1094,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617246435000
          },
          {
              "id": 1102,
              "name": "短信模板创建",
              "permission": "system:sms-template:create",
              "type": 3,
              "sort": 2,
              "parentId": 1100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617269717000
          },
          {
              "id": 1107,
              "name": "短信日志",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 1093,
              "path": "sms-log",
              "icon": "fa:edit",
              "component": "system/sms/log/index",
              "componentName": "SystemSmsLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1618101425000
          },
          {
              "id": 1120,
              "name": "请假申请创建",
              "permission": "bpm:oa-leave:create",
              "type": 3,
              "sort": 2,
              "parentId": 1118,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1632099063000
          },
          {
              "id": 1187,
              "name": "流程表单",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 1186,
              "path": "form",
              "icon": "fa:hdd-o",
              "component": "bpm/form/index",
              "componentName": "BpmForm",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640839102000
          },
          {
              "id": 1189,
              "name": "表单创建",
              "permission": "bpm:form:create",
              "type": 3,
              "sort": 2,
              "parentId": 1187,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640839102000
          },
          {
              "id": 1195,
              "name": "模型创建",
              "permission": "bpm:model:create",
              "type": 3,
              "sort": 2,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641207684000
          },
          {
              "id": 1211,
              "name": "用户组创建",
              "permission": "bpm:user-group:create",
              "type": 3,
              "sort": 2,
              "parentId": 1209,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642097660000
          },
          {
              "id": 1219,
              "name": "流程实例的创建",
              "permission": "bpm:process-instance:create",
              "type": 3,
              "sort": 2,
              "parentId": 1201,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642869375000
          },
          {
              "id": 1222,
              "name": "流程任务的更新",
              "permission": "bpm:task:update",
              "type": 3,
              "sort": 2,
              "parentId": 1207,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642869564000
          },
          {
              "id": 1239,
              "name": "文件配置创建",
              "permission": "infra:file-config:create",
              "type": 3,
              "sort": 2,
              "parentId": 1237,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647326128000
          },
          {
              "id": 1257,
              "name": "数据源配置创建",
              "permission": "infra:data-source-config:create",
              "type": 3,
              "sort": 2,
              "parentId": 1255,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1651041452000
          },
          {
              "id": 1265,
              "name": "客户端创建",
              "permission": "system:oauth2-client:create",
              "type": 3,
              "sort": 2,
              "parentId": 1263,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1652171193000
          },
          {
              "id": 2130,
              "name": "邮箱管理",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 2739,
              "path": "mail",
              "icon": "fa-solid:mail-bulk",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674638864000
          },
          {
              "id": 2133,
              "name": "账号创建",
              "permission": "system:mail-account:create",
              "type": 3,
              "sort": 2,
              "parentId": 2131,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674610428000
          },
          {
              "id": 2138,
              "name": "模版创建",
              "permission": "system:mail-template:create",
              "type": 3,
              "sort": 2,
              "parentId": 2136,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674619531000
          },
          {
              "id": 2147,
              "name": "站内信模板创建",
              "permission": "system:notify-template:create",
              "type": 3,
              "sort": 2,
              "parentId": 2145,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674844002000
          },
          {
              "id": 2393,
              "name": "客户创建",
              "permission": "crm:customer:create",
              "type": 3,
              "sort": 2,
              "parentId": 2391,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698541461000
          },
          {
              "id": 2400,
              "name": "合同创建",
              "permission": "crm:contract:create",
              "type": 3,
              "sort": 2,
              "parentId": 2398,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698547841000
          },
          {
              "id": 2406,
              "name": "线索创建",
              "permission": "crm:clue:create",
              "type": 3,
              "sort": 2,
              "parentId": 2404,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698548789000
          },
          {
              "id": 2412,
              "name": "商机创建",
              "permission": "crm:business:create",
              "type": 3,
              "sort": 2,
              "parentId": 2410,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549155000
          },
          {
              "id": 2418,
              "name": "联系人创建",
              "permission": "crm:contact:create",
              "type": 3,
              "sort": 2,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549296000
          },
          {
              "id": 2424,
              "name": "回款管理创建",
              "permission": "crm:receivable:create",
              "type": 3,
              "sort": 2,
              "parentId": 2422,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2430,
              "name": "回款计划创建",
              "permission": "crm:receivable-plan:create",
              "type": 3,
              "sort": 2,
              "parentId": 2428,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2480,
              "name": "示例联系人创建",
              "permission": "infra:demo01-contact:create",
              "type": 3,
              "sort": 2,
              "parentId": 2478,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700030550000
          },
          {
              "id": 2484,
              "name": "树表（增删改查）",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": 1070,
              "path": "demo02-category",
              "icon": "fa:tree",
              "component": "infra/demo/demo02/index",
              "componentName": "Demo02Category",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700108307000
          },
          {
              "id": 2486,
              "name": "示例分类创建",
              "permission": "infra:demo02-category:create",
              "type": 3,
              "sort": 2,
              "parentId": 2484,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700108307000
          },
          {
              "id": 2492,
              "name": "学生创建",
              "permission": "infra:demo03-student:create",
              "type": 3,
              "sort": 2,
              "parentId": 2490,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700110417000
          },
          {
              "id": 2520,
              "name": "客户限制配置创建",
              "permission": "crm:customer-limit-config:create",
              "type": 3,
              "sort": 2,
              "parentId": 2518,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285633000
          },
          {
              "id": 2528,
              "name": "产品创建",
              "permission": "crm:product:create",
              "type": 3,
              "sort": 2,
              "parentId": 2526,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701787661000
          },
          {
              "id": 2534,
              "name": "产品分类创建",
              "permission": "crm:product-category:create",
              "type": 3,
              "sort": 2,
              "parentId": 2532,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701838421000
          },
          {
              "id": 2705,
              "name": "商机状态创建",
              "permission": "crm:business-status:create",
              "type": 3,
              "sort": 2,
              "parentId": 2703,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708518957000
          },
          {
              "id": 2709,
              "name": "客户公海配置查询",
              "permission": "crm:customer-pool-config:query",
              "type": 3,
              "sort": 2,
              "parentId": 2516,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708764319000
          },
          {
              "id": 2711,
              "name": "合同配置查询",
              "permission": "crm:contract-config:query",
              "type": 3,
              "sort": 2,
              "parentId": 2708,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708764376000
          },
          {
              "id": 2716,
              "name": "分类创建",
              "permission": "bpm:category:create",
              "type": 3,
              "sort": 2,
              "parentId": 2714,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709834451000
          },
          {
              "id": 2723,
              "name": "流程实例的取消（管理员）",
              "permission": "bpm:process-instance:cancel-by-admin",
              "type": 3,
              "sort": 2,
              "parentId": 2721,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1711066765000
          },
          {
              "id": 2728,
              "name": "流程监听器创建",
              "permission": "bpm:process-listener:create",
              "type": 3,
              "sort": 2,
              "parentId": 2726,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709971534000
          },
          {
              "id": 2733,
              "name": "流程表达式创建",
              "permission": "bpm:process-expression:create",
              "type": 3,
              "sort": 2,
              "parentId": 2731,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709994908000
          },
          {
              "id": 2742,
              "name": "分配公海客户",
              "permission": "crm:customer:distribute",
              "type": 3,
              "sort": 2,
              "parentId": 2546,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1713959285000
          },
          {
              "id": "1930877489578242054",
              "name": "岗位管理",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": "1930877489578242052",
              "path": "job",
              "icon": "ep:add-location",
              "component": "system/job/index",
              "componentName": "SystemJob",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749458942000
          },
          {
              "id": "1930877489578242056",
              "name": "权限配置",
              "permission": "",
              "type": 1,
              "sort": 2,
              "parentId": 1,
              "path": "permissions",
              "icon": "ep:add-location",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459254000
          },
          {
              "id": "1930877489578242058",
              "name": "菜单管理",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": "1930877489578242056",
              "path": "hierarchy",
              "icon": "ep:add-location",
              "component": "system/hierarchy/index",
              "componentName": "SystemHierarchy",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459441000
          },
          {
              "id": "1930877489578242061",
              "name": "操作日志",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": "1930877489578242059",
              "path": "handleLog",
              "icon": "ep:add-location",
              "component": "system/handleLog/index",
              "componentName": "SystemHandleLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459549000
          },
          {
              "id": "1930877489578242064",
              "name": "自定义标签",
              "permission": "",
              "type": 2,
              "sort": 2,
              "parentId": "1930877489578242063",
              "path": "custom",
              "icon": "ep:add-location",
              "component": "/system/label/custom/index",
              "componentName": "SystemCustomLabel",
              "status": 0,
              "visible": false,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459724000
          },
          {
              "id": 112,
              "name": "Java 监控",
              "permission": "",
              "type": 2,
              "sort": 3,
              "parentId": 2740,
              "path": "admin-server",
              "icon": "ep:coffee-cup",
              "component": "infra/server/index",
              "componentName": "InfraAdminServer",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 116,
              "name": "API 接口",
              "permission": "infra:swagger:list",
              "type": 2,
              "sort": 3,
              "parentId": 2,
              "path": "swagger",
              "icon": "fa:fighter-jet",
              "component": "infra/swagger/index",
              "componentName": "InfraSwagger",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1003,
              "name": "用户修改",
              "permission": "system:user:update",
              "type": 3,
              "sort": 3,
              "parentId": 100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1010,
              "name": "角色修改",
              "permission": "system:role:update",
              "type": 3,
              "sort": 3,
              "parentId": 101,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1015,
              "name": "菜单修改",
              "permission": "system:menu:update",
              "type": 3,
              "sort": 3,
              "parentId": 102,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1019,
              "name": "部门修改",
              "permission": "system:dept:update",
              "type": 3,
              "sort": 3,
              "parentId": 103,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1023,
              "name": "岗位修改",
              "permission": "system:post:update",
              "type": 3,
              "sort": 3,
              "parentId": 104,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1028,
              "name": "字典修改",
              "permission": "system:dict:update",
              "type": 3,
              "sort": 3,
              "parentId": 105,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1033,
              "name": "配置修改",
              "permission": "infra:config:update",
              "type": 3,
              "sort": 3,
              "parentId": 106,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1038,
              "name": "公告修改",
              "permission": "system:notice:update",
              "type": 3,
              "sort": 3,
              "parentId": 107,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1045,
              "name": "日志导出",
              "permission": "system:login-log:export",
              "type": 3,
              "sort": 3,
              "parentId": 501,
              "path": "#",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1051,
              "name": "任务修改",
              "permission": "infra:job:update",
              "type": 3,
              "sort": 3,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1057,
              "name": "生成删除",
              "permission": "infra:codegen:delete",
              "type": 3,
              "sort": 3,
              "parentId": 115,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1086,
              "name": "日志导出",
              "permission": "infra:api-error-log:export",
              "type": 3,
              "sort": 3,
              "parentId": 1084,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1614297200000
          },
          {
              "id": 1097,
              "name": "短信渠道更新",
              "permission": "system:sms-channel:update",
              "type": 3,
              "sort": 3,
              "parentId": 1094,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617246435000
          },
          {
              "id": 1103,
              "name": "短信模板更新",
              "permission": "system:sms-template:update",
              "type": 3,
              "sort": 3,
              "parentId": 1100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617269717000
          },
          {
              "id": 1190,
              "name": "表单更新",
              "permission": "bpm:form:update",
              "type": 3,
              "sort": 3,
              "parentId": 1187,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640839102000
          },
          {
              "id": 1212,
              "name": "用户组更新",
              "permission": "bpm:user-group:update",
              "type": 3,
              "sort": 3,
              "parentId": 1209,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642097660000
          },
          {
              "id": 1220,
              "name": "流程实例的取消",
              "permission": "bpm:process-instance:cancel",
              "type": 3,
              "sort": 3,
              "parentId": 1201,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642869393000
          },
          {
              "id": 1240,
              "name": "文件配置更新",
              "permission": "infra:file-config:update",
              "type": 3,
              "sort": 3,
              "parentId": 1237,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647326128000
          },
          {
              "id": 1258,
              "name": "数据源配置更新",
              "permission": "infra:data-source-config:update",
              "type": 3,
              "sort": 3,
              "parentId": 1255,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1651041452000
          },
          {
              "id": 1266,
              "name": "客户端更新",
              "permission": "system:oauth2-client:update",
              "type": 3,
              "sort": 3,
              "parentId": 1263,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1652171193000
          },
          {
              "id": 2134,
              "name": "账号更新",
              "permission": "system:mail-account:update",
              "type": 3,
              "sort": 3,
              "parentId": 2131,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674610428000
          },
          {
              "id": 2139,
              "name": "模版更新",
              "permission": "system:mail-template:update",
              "type": 3,
              "sort": 3,
              "parentId": 2136,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674619531000
          },
          {
              "id": 2144,
              "name": "站内信管理",
              "permission": "",
              "type": 1,
              "sort": 3,
              "parentId": 2739,
              "path": "notify",
              "icon": "ep:message-box",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674872718000
          },
          {
              "id": 2148,
              "name": "站内信模板更新",
              "permission": "system:notify-template:update",
              "type": 3,
              "sort": 3,
              "parentId": 2145,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674844002000
          },
          {
              "id": 2394,
              "name": "客户更新",
              "permission": "crm:customer:update",
              "type": 3,
              "sort": 3,
              "parentId": 2391,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698541461000
          },
          {
              "id": 2401,
              "name": "合同更新",
              "permission": "crm:contract:update",
              "type": 3,
              "sort": 3,
              "parentId": 2398,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698547841000
          },
          {
              "id": 2407,
              "name": "线索更新",
              "permission": "crm:clue:update",
              "type": 3,
              "sort": 3,
              "parentId": 2404,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698548789000
          },
          {
              "id": 2413,
              "name": "商机更新",
              "permission": "crm:business:update",
              "type": 3,
              "sort": 3,
              "parentId": 2410,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549155000
          },
          {
              "id": 2419,
              "name": "联系人更新",
              "permission": "crm:contact:update",
              "type": 3,
              "sort": 3,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549296000
          },
          {
              "id": 2425,
              "name": "回款管理更新",
              "permission": "crm:receivable:update",
              "type": 3,
              "sort": 3,
              "parentId": 2422,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2431,
              "name": "回款计划更新",
              "permission": "crm:receivable-plan:update",
              "type": 3,
              "sort": 3,
              "parentId": 2428,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2481,
              "name": "示例联系人更新",
              "permission": "infra:demo01-contact:update",
              "type": 3,
              "sort": 3,
              "parentId": 2478,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700030550000
          },
          {
              "id": 2487,
              "name": "示例分类更新",
              "permission": "infra:demo02-category:update",
              "type": 3,
              "sort": 3,
              "parentId": 2484,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700108307000
          },
          {
              "id": 2493,
              "name": "学生更新",
              "permission": "infra:demo03-student:update",
              "type": 3,
              "sort": 3,
              "parentId": 2490,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700110417000
          },
          {
              "id": 2521,
              "name": "客户限制配置更新",
              "permission": "crm:customer-limit-config:update",
              "type": 3,
              "sort": 3,
              "parentId": 2518,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285633000
          },
          {
              "id": 2529,
              "name": "产品更新",
              "permission": "crm:product:update",
              "type": 3,
              "sort": 3,
              "parentId": 2526,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701787683000
          },
          {
              "id": 2532,
              "name": "产品分类配置",
              "permission": "",
              "type": 2,
              "sort": 3,
              "parentId": 2524,
              "path": "product/category",
              "icon": "fa-solid:window-restore",
              "component": "crm/product/category/index",
              "componentName": "CrmProductCategory",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701838356000
          },
          {
              "id": 2535,
              "name": "产品分类更新",
              "permission": "crm:product-category:update",
              "type": 3,
              "sort": 3,
              "parentId": 2532,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701838439000
          },
          {
              "id": 2706,
              "name": "商机状态更新",
              "permission": "crm:business-status:update",
              "type": 3,
              "sort": 3,
              "parentId": 2703,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708518981000
          },
          {
              "id": 2714,
              "name": "流程分类",
              "permission": "",
              "type": 2,
              "sort": 3,
              "parentId": 1186,
              "path": "category",
              "icon": "fa:object-ungroup",
              "component": "bpm/category/index",
              "componentName": "BpmCategory",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709834451000
          },
          {
              "id": 2717,
              "name": "分类更新",
              "permission": "bpm:category:update",
              "type": 3,
              "sort": 3,
              "parentId": 2714,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709834451000
          },
          {
              "id": 2729,
              "name": "流程监听器更新",
              "permission": "bpm:process-listener:update",
              "type": 3,
              "sort": 3,
              "parentId": 2726,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709971534000
          },
          {
              "id": 2734,
              "name": "流程表达式更新",
              "permission": "bpm:process-expression:update",
              "type": 3,
              "sort": 3,
              "parentId": 2731,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709994908000
          },
          {
              "id": 2736,
              "name": "员工业绩",
              "permission": "crm:statistics-performance:query",
              "type": 2,
              "sort": 3,
              "parentId": 2560,
              "path": "performance",
              "icon": "ep:dish-dot",
              "component": "crm/statistics/performance/index",
              "componentName": "CrmStatisticsPerformance",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1712296160000
          },
          {
              "id": "1930877489578242055",
              "name": "组织架构",
              "permission": "",
              "type": 2,
              "sort": 3,
              "parentId": "1930877489578242052",
              "path": "organization",
              "icon": "ep:add-location",
              "component": "system/organization/index",
              "componentName": "SystemOrganization",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749458957000
          },
          {
              "id": "1930877489578242059",
              "name": "系统配置",
              "permission": "",
              "type": 1,
              "sort": 3,
              "parentId": 1,
              "path": "systemlog",
              "icon": "ep:add-location",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459471000
          },
          {
              "id": "1930877489578242062",
              "name": "敏感日志",
              "permission": "",
              "type": 2,
              "sort": 3,
              "parentId": "1930877489578242059",
              "path": "sensitiveLog",
              "icon": "ep:add-location",
              "component": "system/sensitiveLog/index",
              "componentName": "SystemSensitiveLog",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459574000
          },
          {
              "id": "1930877489578242065",
              "name": "自定义标签详情",
              "permission": "",
              "type": 2,
              "sort": 3,
              "parentId": "1930877489578242063",
              "path": "customDetail",
              "icon": "ep:add-location",
              "component": "system/label/custom/detail/index",
              "componentName": "SystemCustomLabelDetail",
              "status": 0,
              "visible": false,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459761000
          },
          {
              "id": 107,
              "name": "通知公告",
              "permission": "",
              "type": 2,
              "sort": 4,
              "parentId": 2739,
              "path": "notice",
              "icon": "ep:takeaway-box",
              "component": "system/notice/index",
              "componentName": "SystemNotice",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1004,
              "name": "用户删除",
              "permission": "system:user:delete",
              "type": 3,
              "sort": 4,
              "parentId": 100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1011,
              "name": "角色删除",
              "permission": "system:role:delete",
              "type": 3,
              "sort": 4,
              "parentId": 101,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1016,
              "name": "菜单删除",
              "permission": "system:menu:delete",
              "type": 3,
              "sort": 4,
              "parentId": 102,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1020,
              "name": "部门删除",
              "permission": "system:dept:delete",
              "type": 3,
              "sort": 4,
              "parentId": 103,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1024,
              "name": "岗位删除",
              "permission": "system:post:delete",
              "type": 3,
              "sort": 4,
              "parentId": 104,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1029,
              "name": "字典删除",
              "permission": "system:dict:delete",
              "type": 3,
              "sort": 4,
              "parentId": 105,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1034,
              "name": "配置删除",
              "permission": "infra:config:delete",
              "type": 3,
              "sort": 4,
              "parentId": 106,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1039,
              "name": "公告删除",
              "permission": "system:notice:delete",
              "type": 3,
              "sort": 4,
              "parentId": 107,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1052,
              "name": "任务删除",
              "permission": "infra:job:delete",
              "type": 3,
              "sort": 4,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1059,
              "name": "预览代码",
              "permission": "infra:codegen:preview",
              "type": 3,
              "sort": 4,
              "parentId": 115,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1077,
              "name": "链路追踪",
              "permission": "",
              "type": 2,
              "sort": 4,
              "parentId": 2740,
              "path": "skywalking",
              "icon": "fa:eye",
              "component": "infra/skywalking/index",
              "componentName": "InfraSkyWalking",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1612788091000
          },
          {
              "id": 1083,
              "name": "API 日志",
              "permission": "",
              "type": 2,
              "sort": 4,
              "parentId": 2,
              "path": "log",
              "icon": "fa:tasks",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1614277104000
          },
          {
              "id": 1092,
              "name": "文件删除",
              "permission": "infra:file:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1090,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1615551380000
          },
          {
              "id": 1098,
              "name": "短信渠道删除",
              "permission": "system:sms-channel:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1094,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617246435000
          },
          {
              "id": 1104,
              "name": "短信模板删除",
              "permission": "system:sms-template:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617269717000
          },
          {
              "id": 1191,
              "name": "表单删除",
              "permission": "bpm:form:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1187,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640839102000
          },
          {
              "id": 1197,
              "name": "模型更新",
              "permission": "bpm:model:update",
              "type": 3,
              "sort": 4,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641207748000
          },
          {
              "id": 1209,
              "name": "用户分组",
              "permission": "",
              "type": 2,
              "sort": 4,
              "parentId": 1186,
              "path": "user-group",
              "icon": "fa:user-secret",
              "component": "bpm/group/index",
              "componentName": "BpmUserGroup",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642097660000
          },
          {
              "id": 1213,
              "name": "用户组删除",
              "permission": "bpm:user-group:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1209,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642097660000
          },
          {
              "id": 1241,
              "name": "文件配置删除",
              "permission": "infra:file-config:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1237,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647326128000
          },
          {
              "id": 1259,
              "name": "数据源配置删除",
              "permission": "infra:data-source-config:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1255,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1651041452000
          },
          {
              "id": 1267,
              "name": "客户端删除",
              "permission": "system:oauth2-client:delete",
              "type": 3,
              "sort": 4,
              "parentId": 1263,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1652171193000
          },
          {
              "id": 2135,
              "name": "账号删除",
              "permission": "system:mail-account:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2131,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674610428000
          },
          {
              "id": 2140,
              "name": "模版删除",
              "permission": "system:mail-template:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2136,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674619531000
          },
          {
              "id": 2149,
              "name": "站内信模板删除",
              "permission": "system:notify-template:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2145,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674844002000
          },
          {
              "id": 2395,
              "name": "客户删除",
              "permission": "crm:customer:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2391,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698541461000
          },
          {
              "id": 2402,
              "name": "合同删除",
              "permission": "crm:contract:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2398,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698547841000
          },
          {
              "id": 2408,
              "name": "线索删除",
              "permission": "crm:clue:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2404,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698548789000
          },
          {
              "id": 2414,
              "name": "商机删除",
              "permission": "crm:business:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2410,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549155000
          },
          {
              "id": 2420,
              "name": "联系人删除",
              "permission": "crm:contact:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549296000
          },
          {
              "id": 2426,
              "name": "回款管理删除",
              "permission": "crm:receivable:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2422,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2432,
              "name": "回款计划删除",
              "permission": "crm:receivable-plan:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2428,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2482,
              "name": "示例联系人删除",
              "permission": "infra:demo01-contact:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2478,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700030550000
          },
          {
              "id": 2488,
              "name": "示例分类删除",
              "permission": "infra:demo02-category:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2484,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700108307000
          },
          {
              "id": 2494,
              "name": "学生删除",
              "permission": "infra:demo03-student:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2490,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700110417000
          },
          {
              "id": 2522,
              "name": "客户限制配置删除",
              "permission": "crm:customer-limit-config:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2518,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285633000
          },
          {
              "id": 2530,
              "name": "产品删除",
              "permission": "crm:product:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2526,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701787697000
          },
          {
              "id": 2536,
              "name": "产品分类删除",
              "permission": "crm:product-category:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2532,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701838454000
          },
          {
              "id": 2703,
              "name": "商机状态配置",
              "permission": "",
              "type": 2,
              "sort": 4,
              "parentId": 2524,
              "path": "business-status",
              "icon": "fa-solid:charging-station",
              "component": "crm/business/status/index",
              "componentName": "CrmBusinessStatus",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708517717000
          },
          {
              "id": 2707,
              "name": "商机状态删除",
              "permission": "crm:business-status:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2703,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708518996000
          },
          {
              "id": 2718,
              "name": "分类删除",
              "permission": "bpm:category:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2714,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709834451000
          },
          {
              "id": 2730,
              "name": "流程监听器删除",
              "permission": "bpm:process-listener:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2726,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709971534000
          },
          {
              "id": 2735,
              "name": "流程表达式删除",
              "permission": "bpm:process-expression:delete",
              "type": 3,
              "sort": 4,
              "parentId": 2731,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709994908000
          },
          {
              "id": 2737,
              "name": "客户画像",
              "permission": "crm:statistics-portrait:query",
              "type": 2,
              "sort": 4,
              "parentId": 2560,
              "path": "portrait",
              "icon": "ep:picture",
              "component": "crm/statistics/portrait/index",
              "componentName": "CrmStatisticsPortrait",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1712296660000
          },
          {
              "id": "1930877489578242063",
              "name": "标签管理",
              "permission": "",
              "type": 1,
              "sort": 4,
              "parentId": 1,
              "path": "label",
              "icon": "ep:add-location",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749459647000
          },
          {
              "id": 100,
              "name": "用户管理",
              "permission": "system:user:list",
              "type": 2,
              "sort": 5,
              "parentId": 1,
              "path": "user",
              "icon": "ep:avatar",
              "component": "system/user/index",
              "componentName": "SystemUser",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 104,
              "name": "岗位管理",
              "permission": "",
              "type": 2,
              "sort": 5,
              "parentId": 1,
              "path": "post",
              "icon": "fa:address-book-o",
              "component": "system/post/index",
              "componentName": "SystemPost",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1005,
              "name": "用户导出",
              "permission": "system:user:export",
              "type": 3,
              "sort": 5,
              "parentId": 100,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1012,
              "name": "角色导出",
              "permission": "system:role:export",
              "type": 3,
              "sort": 5,
              "parentId": 101,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1025,
              "name": "岗位导出",
              "permission": "system:post:export",
              "type": 3,
              "sort": 5,
              "parentId": 104,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1030,
              "name": "字典导出",
              "permission": "system:dict:export",
              "type": 3,
              "sort": 5,
              "parentId": 105,
              "path": "#",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1035,
              "name": "配置导出",
              "permission": "infra:config:export",
              "type": 3,
              "sort": 5,
              "parentId": 106,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1053,
              "name": "状态修改",
              "permission": "infra:job:update",
              "type": 3,
              "sort": 5,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1060,
              "name": "生成代码",
              "permission": "infra:codegen:download",
              "type": 3,
              "sort": 5,
              "parentId": 115,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1090,
              "name": "文件列表",
              "permission": "",
              "type": 2,
              "sort": 5,
              "parentId": 1243,
              "path": "file",
              "icon": "ep:upload-filled",
              "component": "infra/file/index",
              "componentName": "InfraFile",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1615551380000
          },
          {
              "id": 1105,
              "name": "短信模板导出",
              "permission": "system:sms-template:export",
              "type": 3,
              "sort": 5,
              "parentId": 1100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1617269717000
          },
          {
              "id": 1109,
              "name": "短信日志导出",
              "permission": "system:sms-log:export",
              "type": 3,
              "sort": 5,
              "parentId": 1107,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1618101425000
          },
          {
              "id": 1192,
              "name": "表单导出",
              "permission": "bpm:form:export",
              "type": 3,
              "sort": 5,
              "parentId": 1187,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640839102000
          },
          {
              "id": 1198,
              "name": "模型删除",
              "permission": "bpm:model:delete",
              "type": 3,
              "sort": 5,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641207763000
          },
          {
              "id": 1242,
              "name": "文件配置导出",
              "permission": "infra:file-config:export",
              "type": 3,
              "sort": 5,
              "parentId": 1237,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647326128000
          },
          {
              "id": 1260,
              "name": "数据源配置导出",
              "permission": "infra:data-source-config:export",
              "type": 3,
              "sort": 5,
              "parentId": 1255,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1651041452000
          },
          {
              "id": 2143,
              "name": "发送测试邮件",
              "permission": "system:mail-template:send-mail",
              "type": 3,
              "sort": 5,
              "parentId": 2136,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674746955000
          },
          {
              "id": 2150,
              "name": "发送测试站内信",
              "permission": "system:notify-template:send-notify",
              "type": 3,
              "sort": 5,
              "parentId": 2145,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1674874483000
          },
          {
              "id": 2396,
              "name": "客户导出",
              "permission": "crm:customer:export",
              "type": 3,
              "sort": 5,
              "parentId": 2391,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698541461000
          },
          {
              "id": 2403,
              "name": "合同导出",
              "permission": "crm:contract:export",
              "type": 3,
              "sort": 5,
              "parentId": 2398,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698547841000
          },
          {
              "id": 2409,
              "name": "线索导出",
              "permission": "crm:clue:export",
              "type": 3,
              "sort": 5,
              "parentId": 2404,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698548789000
          },
          {
              "id": 2415,
              "name": "商机导出",
              "permission": "crm:business:export",
              "type": 3,
              "sort": 5,
              "parentId": 2410,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549155000
          },
          {
              "id": 2421,
              "name": "联系人导出",
              "permission": "crm:contact:export",
              "type": 3,
              "sort": 5,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549296000
          },
          {
              "id": 2427,
              "name": "回款管理导出",
              "permission": "crm:receivable:export",
              "type": 3,
              "sort": 5,
              "parentId": 2422,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2433,
              "name": "回款计划导出",
              "permission": "crm:receivable-plan:export",
              "type": 3,
              "sort": 5,
              "parentId": 2428,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2483,
              "name": "示例联系人导出",
              "permission": "infra:demo01-contact:export",
              "type": 3,
              "sort": 5,
              "parentId": 2478,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700030550000
          },
          {
              "id": 2489,
              "name": "示例分类导出",
              "permission": "infra:demo02-category:export",
              "type": 3,
              "sort": 5,
              "parentId": 2484,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700108307000
          },
          {
              "id": 2495,
              "name": "学生导出",
              "permission": "infra:demo03-student:export",
              "type": 3,
              "sort": 5,
              "parentId": 2490,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700110417000
          },
          {
              "id": 2523,
              "name": "客户限制配置导出",
              "permission": "crm:customer-limit-config:export",
              "type": 3,
              "sort": 5,
              "parentId": 2518,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700285633000
          },
          {
              "id": 2525,
              "name": "WebSocket",
              "permission": "",
              "type": 2,
              "sort": 5,
              "parentId": 2,
              "path": "websocket",
              "icon": "ep:connection",
              "component": "infra/webSocket/index",
              "componentName": "InfraWebSocket",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700739715000
          },
          {
              "id": 2531,
              "name": "产品导出",
              "permission": "crm:product:export",
              "type": 3,
              "sort": 5,
              "parentId": 2526,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701787709000
          },
          {
              "id": 2708,
              "name": "合同配置",
              "permission": "",
              "type": 2,
              "sort": 5,
              "parentId": 2524,
              "path": "contract-config",
              "icon": "ep:connection",
              "component": "crm/contract/config/index",
              "componentName": "CrmContractConfig",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1708764280000
          },
          {
              "id": 2726,
              "name": "流程监听器",
              "permission": "",
              "type": 2,
              "sort": 5,
              "parentId": 1186,
              "path": "process-listener",
              "icon": "fa:assistive-listening-systems",
              "component": "bpm/processListener/index",
              "componentName": "BpmProcessListener",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709971534000
          },
          {
              "id": 2738,
              "name": "销售漏斗",
              "permission": "crm:statistics-funnel:query",
              "type": 2,
              "sort": 5,
              "parentId": 2560,
              "path": "funnel",
              "icon": "ep:grape",
              "component": "crm/statistics/funnel/index",
              "componentName": "CrmStatisticsFunnel",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1712976806000
          },
          {
              "id": 101,
              "name": "角色管理",
              "permission": "",
              "type": 2,
              "sort": 6,
              "parentId": 1,
              "path": "role",
              "icon": "ep:user",
              "component": "system/role/index",
              "componentName": "SystemRole",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 105,
              "name": "字典管理",
              "permission": "",
              "type": 2,
              "sort": 6,
              "parentId": 1,
              "path": "dict",
              "icon": "ep:collection",
              "component": "system/dict/index",
              "componentName": "SystemDictType",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 106,
              "name": "字典管理1",
              "permission": "",
              "type": 2,
              "sort": 6,
              "parentId": 1,
              "path": "exhibition",
              "icon": "ep:collection",
              "component": "exhibition/index",
              "componentName": "ExhibitionList",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1006,
              "name": "用户导入",
              "permission": "system:user:import",
              "type": 3,
              "sort": 6,
              "parentId": 100,
              "path": "",
              "icon": "#",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1063,
              "name": "设置角色菜单权限",
              "permission": "system:permission:assign-role-menu",
              "type": 3,
              "sort": 6,
              "parentId": 101,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609926824000
          },
          {
              "id": 1106,
              "name": "发送测试短信",
              "permission": "system:sms-template:send-sms",
              "type": 3,
              "sort": 6,
              "parentId": 1100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1618072000000
          },
          {
              "id": 1199,
              "name": "模型发布",
              "permission": "bpm:model:deploy",
              "type": 3,
              "sort": 6,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641207804000
          },
          {
              "id": 1243,
              "name": "文件管理",
              "permission": "",
              "type": 2,
              "sort": 6,
              "parentId": 2,
              "path": "file",
              "icon": "ep:files",
              "component": null,
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1647445660000
          },
          {
              "id": 2562,
              "name": "客户导入",
              "permission": "crm:customer:import",
              "type": 3,
              "sort": 6,
              "parentId": 2391,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1706764140000
          },
          {
              "id": 2731,
              "name": "流程表达式",
              "permission": "",
              "type": 2,
              "sort": 6,
              "parentId": 1186,
              "path": "process-expression",
              "icon": "fa:wpexplorer",
              "component": "bpm/processExpression/index",
              "componentName": "BpmProcessExpression",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1709994908000
          },
          {
              "id": 102,
              "name": "菜单管理",
              "permission": "",
              "type": 2,
              "sort": 7,
              "parentId": 1,
              "path": "menu",
              "icon": "ep:menu",
              "component": "system/menu/index",
              "componentName": "SystemMenu",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 110,
              "name": "定时任务",
              "permission": "",
              "type": 2,
              "sort": 7,
              "parentId": 2,
              "path": "job",
              "icon": "fa-solid:tasks",
              "component": "infra/job/index",
              "componentName": "InfraJob",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1007,
              "name": "重置密码",
              "permission": "system:user:update-password",
              "type": 3,
              "sort": 7,
              "parentId": 100,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1054,
              "name": "任务导出",
              "permission": "infra:job:export",
              "type": 3,
              "sort": 7,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1064,
              "name": "设置角色数据权限",
              "permission": "system:permission:assign-role-data-scope",
              "type": 3,
              "sort": 7,
              "parentId": 101,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609926991000
          },
          {
              "id": 2739,
              "name": "消息中心",
              "permission": "",
              "type": 1,
              "sort": 7,
              "parentId": 1,
              "path": "messages",
              "icon": "ep:chat-dot-round",
              "component": "",
              "componentName": "",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1713801270000
          },
          {
              "id": 2913,
              "name": "流程清理",
              "permission": "bpm:model:clean",
              "type": 3,
              "sort": 7,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1737113526000
          },
          {
              "id": 103,
              "name": "部门管理",
              "permission": "",
              "type": 2,
              "sort": 8,
              "parentId": 1,
              "path": "dept",
              "icon": "fa:address-card",
              "component": "system/dept/index",
              "componentName": "SystemDept",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 106,
              "name": "配置管理",
              "permission": "",
              "type": 2,
              "sort": 8,
              "parentId": 2,
              "path": "config",
              "icon": "fa:connectdevelop",
              "component": "infra/config/index",
              "componentName": "InfraConfig",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1065,
              "name": "设置用户角色",
              "permission": "system:permission:assign-user-role",
              "type": 3,
              "sort": 8,
              "parentId": 101,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609986208000
          },
          {
              "id": 1075,
              "name": "任务触发",
              "permission": "infra:job:trigger",
              "type": 3,
              "sort": 8,
              "parentId": 110,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1612674190000
          },
          {
              "id": 2404,
              "name": "线索管理",
              "permission": "",
              "type": 2,
              "sort": 8,
              "parentId": 2397,
              "path": "clue",
              "icon": "fa:pagelines",
              "component": "crm/clue/index",
              "componentName": "CrmClue",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698548789000
          },
          {
              "id": "1930876052676800513",
              "name": "天诚伟业2",
              "permission": "",
              "type": 1,
              "sort": 8,
              "parentId": 0,
              "path": "/tcwy",
              "icon": "ep:avatar",
              "component": "",
              "componentName": "",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1749191700000
          },
          {
              "id": 108,
              "name": "审计日志",
              "permission": "",
              "type": 1,
              "sort": 9,
              "parentId": 1,
              "path": "log",
              "icon": "ep:document-copy",
              "component": "",
              "componentName": null,
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1,
              "name": "系统管理",
              "permission": "",
              "type": 1,
              "sort": 10,
              "parentId": 0,
              "path": "/system",
              "icon": "ep:tools",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1186,
              "name": "流程管理",
              "permission": "",
              "type": 1,
              "sort": 10,
              "parentId": 1185,
              "path": "manager",
              "icon": "fa:dedent",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640867310000
          },
          {
              "id": 1207,
              "name": "待办任务",
              "permission": "",
              "type": 2,
              "sort": 10,
              "parentId": 1200,
              "path": "todo",
              "icon": "fa:slack",
              "component": "bpm/task/todo/index",
              "componentName": "BpmTodoTask",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641609217000
          },
          {
              "id": 1215,
              "name": "流程定义查询",
              "permission": "bpm:process-definition:query",
              "type": 3,
              "sort": 10,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642868503000
          },
          {
              "id": 1261,
              "name": "OAuth 2.0",
              "permission": "",
              "type": 2,
              "sort": 10,
              "parentId": 1,
              "path": "oauth2",
              "icon": "fa:dashcube",
              "component": null,
              "componentName": null,
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1652110697000
          },
          {
              "id": 2391,
              "name": "客户管理",
              "permission": "",
              "type": 2,
              "sort": 10,
              "parentId": 2397,
              "path": "customer",
              "icon": "fa:address-book-o",
              "component": "crm/customer/index",
              "componentName": "CrmCustomer",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698541461000
          },
          {
              "id": 2490,
              "name": "主子表（标准）",
              "permission": "",
              "type": 2,
              "sort": 10,
              "parentId": 1070,
              "path": "demo03-normal",
              "icon": "fa:battery-3",
              "component": "infra/demo/demo03/normal/index",
              "componentName": "Demo03StudentNormal",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700110417000
          },
          {
              "id": 2543,
              "name": "关联商机",
              "permission": "crm:contact:create-business",
              "type": 3,
              "sort": 10,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1704187705000
          },
          {
              "id": 2721,
              "name": "流程实例",
              "permission": "",
              "type": 2,
              "sort": 10,
              "parentId": 1186,
              "path": "process-instance/manager",
              "icon": "fa:square",
              "component": "bpm/processInstance/manager/index",
              "componentName": "BpmProcessInstanceManager",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1711036650000
          },
          {
              "id": 2740,
              "name": "监控中心",
              "permission": "",
              "type": 1,
              "sort": 10,
              "parentId": 2,
              "path": "monitors",
              "icon": "ep:monitor",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1713801884000
          },
          {
              "id": 2497,
              "name": "主子表（ERP）",
              "permission": "",
              "type": 2,
              "sort": 11,
              "parentId": 1070,
              "path": "demo03-erp",
              "icon": "ep:calendar",
              "component": "infra/demo/demo03/erp/index",
              "componentName": "Demo03StudentERP",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700121059000
          },
          {
              "id": 2544,
              "name": "取关商机",
              "permission": "crm:contact:delete-business",
              "type": 3,
              "sort": 11,
              "parentId": 2416,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": "",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1704187723000
          },
          {
              "id": 2724,
              "name": "流程任务",
              "permission": "",
              "type": 2,
              "sort": 11,
              "parentId": 1186,
              "path": "process-tasnk",
              "icon": "ep:collection-tag",
              "component": "bpm/task/manager/index",
              "componentName": "BpmManagerTask",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1711068202000
          },
          {
              "id": 2472,
              "name": "主子表（内嵌）",
              "permission": "",
              "type": 2,
              "sort": 12,
              "parentId": 1070,
              "path": "demo03-inner",
              "icon": "fa:power-off",
              "component": "infra/demo/demo03/inner/index",
              "componentName": "Demo03StudentInner",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1699821591000
          },
          {
              "id": 2,
              "name": "基础设施",
              "permission": "",
              "type": 1,
              "sort": 20,
              "parentId": 0,
              "path": "/infra",
              "icon": "ep:monitor",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1609837428000
          },
          {
              "id": 1200,
              "name": "审批中心",
              "permission": "",
              "type": 2,
              "sort": 20,
              "parentId": 1185,
              "path": "task",
              "icon": "fa:tasks",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641570708000
          },
          {
              "id": 1208,
              "name": "已办任务",
              "permission": "",
              "type": 2,
              "sort": 20,
              "parentId": 1200,
              "path": "done",
              "icon": "fa:delicious",
              "component": "bpm/task/done/index",
              "componentName": "BpmDoneTask",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1641609253000
          },
          {
              "id": 1216,
              "name": "流程任务分配规则查询",
              "permission": "bpm:task-assign-rule:query",
              "type": 3,
              "sort": 20,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642868813000
          },
          {
              "id": 2416,
              "name": "联系人管理",
              "permission": "",
              "type": 2,
              "sort": 20,
              "parentId": 2397,
              "path": "contact",
              "icon": "fa:address-book-o",
              "component": "crm/contact/index",
              "componentName": "CrmContact",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549296000
          },
          {
              "id": 1217,
              "name": "流程任务分配规则创建",
              "permission": "bpm:task-assign-rule:create",
              "type": 3,
              "sort": 21,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642868895000
          },
          {
              "id": 1218,
              "name": "流程任务分配规则更新",
              "permission": "bpm:task-assign-rule:update",
              "type": 3,
              "sort": 22,
              "parentId": 1193,
              "path": "",
              "icon": "",
              "component": "",
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1642868921000
          },
          {
              "id": 2546,
              "name": "客户公海",
              "permission": "",
              "type": 2,
              "sort": 30,
              "parentId": 2397,
              "path": "customer/pool",
              "icon": "fa-solid:swimming-pool",
              "component": "crm/customer/pool/index",
              "componentName": "CrmCustomerPool",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1705325374000
          },
          {
              "id": 2713,
              "name": "抄送我的",
              "permission": "bpm:process-instance-cc:query",
              "type": 2,
              "sort": 30,
              "parentId": 1200,
              "path": "copy",
              "icon": "ep:copy-document",
              "component": "bpm/task/copy/index",
              "componentName": "BpmProcessInstanceCopy",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1710683423000
          },
          {
              "id": 5,
              "name": "OA 示例",
              "permission": "",
              "type": 1,
              "sort": 40,
              "parentId": 1185,
              "path": "oa",
              "icon": "fa:road",
              "component": null,
              "componentName": null,
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1632126379000
          },
          {
              "id": 2410,
              "name": "商机管理",
              "permission": "",
              "type": 2,
              "sort": 40,
              "parentId": 2397,
              "path": "business",
              "icon": "fa:bus",
              "component": "crm/business/index",
              "componentName": "CrmBusiness",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549155000
          },
          {
              "id": 1185,
              "name": "工作流程",
              "permission": "",
              "type": 1,
              "sort": 50,
              "parentId": 0,
              "path": "/bpm",
              "icon": "fa:medium",
              "component": null,
              "componentName": null,
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1640867196000
          },
          {
              "id": 2398,
              "name": "合同管理",
              "permission": "",
              "type": 2,
              "sort": 50,
              "parentId": 2397,
              "path": "contract",
              "icon": "ep:notebook",
              "component": "crm/contract/index",
              "componentName": "CrmContract",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698547841000
          },
          {
              "id": 2422,
              "name": "回款管理",
              "permission": "",
              "type": 2,
              "sort": 60,
              "parentId": 2397,
              "path": "receivable",
              "icon": "ep:money",
              "component": "crm/receivable/index",
              "componentName": "CrmReceivable",
              "status": 0,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2428,
              "name": "回款计划",
              "permission": "",
              "type": 2,
              "sort": 61,
              "parentId": 2397,
              "path": "receivable-plan",
              "icon": "fa:money",
              "component": "crm/receivable/plan/index",
              "componentName": "CrmReceivablePlan",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698549489000
          },
          {
              "id": 2526,
              "name": "产品管理",
              "permission": "",
              "type": 2,
              "sort": 80,
              "parentId": 2397,
              "path": "product",
              "icon": "fa:product-hunt",
              "component": "crm/product/index",
              "componentName": "CrmProduct",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1701787526000
          },
          {
              "id": 2397,
              "name": "CRM 系统",
              "permission": "",
              "type": 1,
              "sort": 200,
              "parentId": 0,
              "path": "/crm",
              "icon": "simple-icons:civicrm",
              "component": "",
              "componentName": "",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1698570510000
          },
          {
              "id": 2560,
              "name": "数据统计",
              "permission": "",
              "type": 1,
              "sort": 200,
              "parentId": 2397,
              "path": "statistics",
              "icon": "ep:data-line",
              "component": "",
              "componentName": "",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1706280635000
          },
          {
              "id": 2524,
              "name": "系统配置",
              "permission": "",
              "type": 1,
              "sort": 999,
              "parentId": 2397,
              "path": "config",
              "icon": "ep:connection",
              "component": "",
              "componentName": "",
              "status": 1,
              "visible": true,
              "keepAlive": true,
              "alwaysShow": true,
              "createTime": 1700315880000
          }
      ],
      "msg": ""
  }
  },
]