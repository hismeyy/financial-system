<script setup>

</script>

<template>
  <lay-button type="primary" size="sm">添加场景</lay-button>


  <div class="scene-list">
    <div class="scene-row scene-header">
      <div class="scene-cell">序号</div>
      <div class="scene-cell">场景名称</div>
      <div class="scene-cell">绑定账户</div>
      <div class="scene-cell">预算金额</div>
      <div class="scene-cell">当前状态</div>
      <div class="scene-cell">创建时间</div>
      <div class="scene-cell">操作</div>
    </div>
    <div class="scene-row">
      <div class="scene-cell">1</div>
      <div class="scene-cell">场景 1</div>
      <div class="scene-cell">账户 A</div>
      <div class="scene-cell">$1000</div>
      <div class="scene-cell">进行中</div>
      <div class="scene-cell">2023-12-04</div>
      <div class="scene-cell">
        <lay-button type="normal" size="xs">详细</lay-button>
        <lay-button type="primary" size="xs">修改</lay-button>
        <lay-button type="danger" size="xs">删除</lay-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene-list {
  width: 100%;
  margin-top: 10px;
}

.scene-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #eee; /* 添加分隔线 */
}

.scene-header {
  background-color: #f2f2f2;
  font-weight: bold; /* 加粗表头文字 */
  cursor: default; /* 禁用选择 */
}

.scene-cell {
  flex: 1;
  text-align: center;
  font-size: 14px; /* 缩小单元格字体 */
}

.scene-row:hover {
  background-color: #f5f5f5;
}
</style>