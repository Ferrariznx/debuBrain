<template>
    <div>
        <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1">热门文章</el-menu-item>
        <el-submenu index="2">
            <template slot="title">前沿技术</template>
            <el-menu-item index="2-1">人工智能</el-menu-item>
            <el-menu-item index="2-2">Node.js</el-menu-item>
            <el-menu-item index="2-3">javascript</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">推荐书刊</a></el-menu-item>
        </el-menu>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-menu {
  padding-left:147px;
}
</style>

