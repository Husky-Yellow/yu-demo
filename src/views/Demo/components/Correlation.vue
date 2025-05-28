<template>
  <div class="form-container">
    <div class="form-row">
      <div class="form-label">证件类型：</div>
      <div class="form-content">
        <div 
          class="radio-item" 
          :class="{ active: formData.idType === '身份证' }"
          @click="formData.idType = '身份证'"
        >
          <div class="radio-label id-card">身份证</div>
        </div>
        <div 
          class="radio-item" 
          :class="{ active: formData.idType === '护照' }"
          @click="formData.idType = '护照'"
        >
          <div class="radio-label passport">护照</div>
        </div>
      </div>
    </div>

    <div class="form-row">
      <div class="form-label">证件号码：</div>
      <div class="form-content">
        <input type="text" v-model="formData.idNumber" placeholder="请输入证件号码" />
      </div>
    </div>

    <div class="form-row" v-if="formData.idType === '身份证'">
      <div class="form-label">姓名：</div>
      <div class="form-content">
        <input type="text" v-model="formData.name" placeholder="请输入姓名" />
      </div>
    </div>

    <div class="form-row" v-if="formData.idType === '护照'">
      <div class="form-label">区域：</div>
      <div class="form-content">
        <select v-model="formData.region">
          <option value="">请选择区域</option>
          <option value="CN">中国</option>
          <option value="US">美国</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const formData = reactive({
  idType: '身份证',
  idNumber: '',
  name: '',
  region: ''
})
</script>

<style scoped>
.form-container {
  padding: 20px;
  max-width: 600px;
}

.form-row {
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
  position: relative;
}

.form-label {
  width: 100px;
  text-align: right;
  padding-right: 12px;
  line-height: 32px;
}

.form-content {
  flex: 1;
  display: flex;
  gap: 20px;
}

.radio-item {
  position: relative;
  cursor: pointer;
  padding: 6px 20px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: all 0.3s;
}

.radio-item.active {
  border-color: #409eff;
  background-color: #ecf5ff;
}

.radio-label {
  position: relative;
}

/* 身份证连接线 */
.id-card::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  width: 40px;
  height: 2px;
  background: #409eff;
  opacity: 0;
  transform-origin: left center;
  transition: all 0.3s;
}

.active .id-card::after {
  opacity: 1;
}

.id-card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(100% + 40px);
  width: 2px;
  height: 60px;
  background: #409eff;
  opacity: 0;
  transform-origin: top center;
  transition: all 0.3s;
}

.active .id-card::before {
  opacity: 1;
}

/* 护照连接线 */
.passport::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 100%;
  width: 40px;
  height: 2px;
  background: #67c23a;
  opacity: 0;
  transform-origin: left center;
  transition: all 0.3s;
}

.active .passport::after {
  opacity: 1;
}

.passport::before {
  content: '';
  position: absolute;
  top: 50%;
  left: calc(100% + 40px);
  width: 2px;
  height: 60px;
  background: #67c23a;
  opacity: 0;
  transform-origin: top center;
  transition: all 0.3s;
}

.active .passport::before {
  opacity: 1;
}

input, select {
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: all 0.3s;
  outline: none;
}

input:focus, select:focus {
  border-color: #409eff;
}

/* 动画效果 */
.form-row-enter-active,
.form-row-leave-active {
  transition: all 0.3s ease;
}

.form-row-enter-from,
.form-row-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>