<script setup>
import { ref } from 'vue'

const isTree = ref(true)
const selectedKey = ref("5")
const openKeys5 = ref(["7"])

</script>

<template>
  <lay-menu v-model:selected-key="selectedKey" v-model:open-keys="openKeys5" v-model:tree="isTree">
    <h1>Max金融</h1>
    <lay-menu-item id="1">
      <router-link to="">
        <lay-icon type="layui-icon-chart"></lay-icon>
        财务报表
      </router-link>
    </lay-menu-item>
    <lay-sub-menu id="7">
      <template v-slot:title>
        <router-link to="">
          <lay-icon type="layui-icon-rmb"></lay-icon>
          财务管理
        </router-link>
      </template>
      <lay-menu-item id="8">
        <router-link to="">
          <lay-icon type="layui-icon-layer"></lay-icon>
          场景化
        </router-link>
      </lay-menu-item>
      <lay-menu-item id="9">
        <router-link to="">
          <lay-icon type="layui-icon-senior"></lay-icon>
          个人钱包
        </router-link>
      </lay-menu-item>
    </lay-sub-menu>

    <lay-menu-item id="10">
      <router-link to="">
        <lay-icon type="layui-icon-heart"></lay-icon>
        愿望清单
      </router-link>
    </lay-menu-item>

    <lay-sub-menu id="11">
      <template v-slot:title>
        <router-link to="">
          <lay-icon type="layui-icon-set"></lay-icon>
          设置
        </router-link>
      </template>
      <lay-menu-item id="12">
        <router-link to="">
          <lay-icon type="layui-icon-util"></lay-icon>
          系统设置
        </router-link>
      </lay-menu-item>
      <lay-menu-item id="13">
        <router-link to="">
          <lay-icon type="layui-icon-template-one"></lay-icon>
          字典配置
        </router-link>
      </lay-menu-item>
    </lay-sub-menu>


  </lay-menu>
</template>

<style scoped>
.layui-nav {
  height: 100vh;
  overflow-y: hidden;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
}
</style>