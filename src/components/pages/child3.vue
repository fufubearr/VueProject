<template>
  <div>
    <img class="card-img-top" src="https://picsum.photos/286/180/?image=652" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">卡片 3</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
  // created () {
  //   console.log(this.$route.params.id)
  //   const id = this.$route.params.id
  //   this.$http.get(`https://randomuser.me/api/?seed=${id}`).then((response) => {
  //     console.log(response)
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
