<template>
  <div>
    <!-- 左侧标签 -->
    <el-row>
      <el-col :span="4">
        <el-menu
          :default-active="activeType"
          @select="handleSelect"
          class="vertical-menu"
        >
          <el-menu-item v-for="item in typeList" :key="item.value" :index="item.value">
            {{ item.label }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <!-- 右侧内容可为空或展示提示 -->
      </el-col>
    </el-row>

    <!-- 详情弹窗组件 -->
    <DetailDialog
      :visible="dialogVisible"
      :type="activeType"
      :detail="currentDetail"
      @update:visible="dialogVisible = $event"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import DetailDialog from './DetailDialog.vue'
defineOptions({ name: 'ExhibitionPeopleUserDeleteDetail' })
// 左侧标签类型
const typeList = [
  { label: '户籍人口', value: 'hukou' },
  { label: '信访人员', value: 'xinfang' },
  { label: '吸毒人员', value: 'xidu' },
  { label: '困境儿童', value: 'kunjing' }
]

const activeType = ref('hukou')
const dialogVisible = ref(false)

// mock 详情数据
const detailMap = {
  hukou: {
    name: '张三',
    idType: '居民身份证',
    idNumber: '33************19',
    gender: '男',
    birthday: '1990-01-01',
    nation: '汉族',
    // ...其他字段
  },
  xinfang: {
    name: '李四',
    idNumber: '33************29',
    gender: '女',
    birthday: '1985-05-05',
    nation: '汉族',
    // ...其他字段
  },
  xidu: {
    name: '王五',
    idNumber: '33************39',
    gender: '男',
    birthday: '1980-03-03',
    nation: '汉族',
  },
  kunjing: {
    name: '赵六',
    idNumber: '33************49',
    gender: '女',
    birthday: '2010-06-06',
    nation: '汉族',
  }
}

const currentDetail = computed(() => detailMap[activeType.value])

function handleSelect(type: string) {
  activeType.value = type
  dialogVisible.value = true
}
</script>

<style scoped>
.vertical-menu {
  min-width: 120px;
}
</style>
