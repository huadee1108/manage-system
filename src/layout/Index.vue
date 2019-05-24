<template>
  <el-container>
    <el-aside width="210px">
      <left-menu></left-menu>
    </el-aside>
    <el-container>
      <el-header style="border-bottom: 1px solid black">
        <head-nav></head-nav>
      </el-header>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeadNav from './components/HeadNav'
import LeftMenu from './components/LeftMenu'

export default {
  name: 'Layout',
  components: {
    HeadNav,
    LeftMenu
  }

}
</script>

<style lang="less" scoped>

</style>
