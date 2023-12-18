<template>
  <lay-layout class="example">
    <lay-layout>
      <lay-side>
        <MyMenu/>
      </lay-side>
      <lay-body>content</lay-body>
    </lay-layout>
  </lay-layout>
</template>

<script>
import MyMenu from "@/components/MyMenu.vue";

export default {
  name: 'App',
  components: {MyMenu}
}
</script>

<style>
.example{
  height: 100vh;
}
</style>
