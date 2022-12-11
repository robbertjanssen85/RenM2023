<template>
  <div
    class="circle"
    :style="{
      backgroundImage: `url('${require('../assets/fris/' + image + '.jpg')}')`
    }">
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-size: cover;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -80px;
  margin-top: 80px;
  position: relative;
}
</style>
