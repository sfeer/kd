<template>
  <div class="img"></div>
  <div class="img2"></div>
  <div class="img3"></div>
  <div class="img0"></div>
</template>

<style lang="less" scoped>
.img0 {
  position: absolute;
  top: 300px;
  width: 700px;
  height: 300px;
  background-image: url('1.jpg');
  background-size: 700px 300px;
  background-repeat: no-repeat;
  background-position: top;
}
.img {
  position: absolute;
  left: 150px;
  width: 400px;
  height: 300px;
  background-image: url('1.jpg');
  background-size: 400px 300px;
  background-repeat: no-repeat;
  background-position: top;
}
.img2 {
  position: absolute;
  width: 2px;
  height: 300px;
  background-image: url('1.jpg');
  background-size: 400px 300px;
  background-repeat: no-repeat;
  transform: scaleX(75);
  transform-origin: left;
}
.img3 {
  position: absolute;
  left: 550px;
  width: 2px;
  height: 300px;
  background-image: url('1.jpg');
  background-size: 400px 300px;
  background-repeat: no-repeat;
  background-position: -398px;
  transform: scaleX(75);
  transform-origin: left;
  overflow: hidden;
}
</style>
