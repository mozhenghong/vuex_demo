<template>
  <div class="about">
    <ul>
      <li v-for="product in products" v-bind:key="product.name">
        <span>{{product.name}}</span>
        <span>{{product.price}}</span>
      </li>
    </ul>
    <button @click="reduceprice">减少价格</button>
    <button @click="reducepriceasyn">异步减少价格</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: this.$store.state.a.products
    };
  },
  methods: {
    reduceprice() {
      this.$store.commit("reduceprice", 4);
    },
    reducepriceasyn() {
      //分发actions中的minusPriceAsync这个异步函数
      this.$store.dispatch('reducepriceasyn',3)
    }
  }
};
</script>

<style lang="scss">
.about {
  ul {
    li {
      list-style: none;
      background: rgb(154, 220, 241);
      color: #fff;
      margin: 5px;
      padding: 10px;
      border-radius: 4px;
    }
  }
  button {
    background: rgb(154, 220, 241);
    color: #fff;
    border: none;
    padding: 8px;
    border-radius: 4px;
    margin-left: 45px;
  }
}
</style>
