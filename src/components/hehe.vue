<template>
  <div>

      我是hehe组件
      <router-link to="/001">去home</router-link>
      <button @click="goHome()">去home</button>
  </div>
</template>

<script>
export default {
methods:{
    goHome(){
        this.$router.push({name:"Home",params:{name:"张三疯"}})
    }
}
}

</script>
<style scoped>
</style>