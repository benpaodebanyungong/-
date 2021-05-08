<template>
  <div>
    <div class="payment">
      <div class="backC">
        <router-link to="/"
          ><img src="../assets/imgs/payment.jpg" alt=""
        /></router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "payment",
  data() {
    return {};
  },
};
</script>
  
<style scoped lang="scss">
.payment {
  background-color: rgb(255, 143, 31);
}
.payment .backC {
  margin: 0 auto;
  width: 500px;
  height: 500px;
}
.payment .backC img {
  width: 500px;
  height: 500px;
}
</style>