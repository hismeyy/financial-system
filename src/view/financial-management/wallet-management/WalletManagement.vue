<script setup>

</script>

<template>
  <lay-button type="primary" size="sm">添加账户</lay-button>
  <lay-row space="10" style="margin-top: 10px">
    <lay-col md="8">
      <lay-card title="招商银行" class="card">
        <div class="card-info">
          <h3>账户余额: $1000</h3>
          <span>
          账户备注: 用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱量的钱用来存储自己大量的钱
        </span>
          <div class="card-btns">
            <lay-button type="primary" size="xs">修改</lay-button>
            <lay-button type="danger" size="xs">删除</lay-button>
          </div>
        </div>
      </lay-card>
    </lay-col>
    <lay-col md="8">
      <lay-card title="招商银行" class="card">
        <div class="card-info">
          <h3>账户余额: $1000</h3>
          <span>
          账户备注: 用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱量的钱用来存储自己大量的钱
        </span>
          <div class="card-btns">
            <lay-button type="primary" size="xs">修改</lay-button>
            <lay-button type="danger" size="xs">删除</lay-button>
          </div>
        </div>
      </lay-card>
    </lay-col>
    <lay-col md="8">
      <lay-card title="招商银行" class="card">
        <div class="card-info">
          <h3>账户余额: $1000</h3>
          <span>
          账户备注: 用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱用来存储自己大量的钱量的钱用来存储自己大量的钱
        </span>
          <div class="card-btns">
            <lay-button type="primary" size="xs">修改</lay-button>
            <lay-button type="danger" size="xs">删除</lay-button>
          </div>
        </div>
      </lay-card>
    </lay-col>
  </lay-row>
</template>

<style scoped>
.card-container {
  margin-top: 15px;
  display: flex;
  justify-content: left;

}

/*  列表  */
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-info h3 {
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.2;
}

.card-info span {
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 4px;
}

.card-btns {
  display: flex;
  justify-content: flex-start; /* 按钮靠左对齐 */
  margin-top: 10px;
}

.grid-demo {
  padding: 10px;
  line-height: 50px;
  border-radius: 2px;
  text-align: center;
  background-color: var(--global-checked-color);
  color: #fff;
}
</style>