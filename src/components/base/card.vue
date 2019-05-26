<template>
  <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="item in 3" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>

<style>

  
  .el-carousel__item:nth-child(n) {
    background: url(./../../assets/card/python.jpg)
  }
  
  .el-carousel__item:nth-child(2n) {
    background: url(./../../assets/card/go.jpg)
  }
   .el-carousel__item:nth-child(3n) {
    background: url(./../../assets/card/javascript.jpg)
  }
</style>