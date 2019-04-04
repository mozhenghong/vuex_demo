<template>
  <div class="home">
    <ul>
      <li v-for="product in fruits" v-bind:key="product.name">
        <span>{{product.name}}</span>
        <span>{{product.price}}</span>
      </li>
    </ul>
    <button @click="reducefruitprice(3)">水果降价</button>
     <button @click="reducefruitpriceasyn(4)">水果异步降价</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapMutations,mapActions } from "vuex";

export default {
  name: "home",
  components: {},
  data() {
    return {
      fruits: this.$store.state.b.fruits
    };
  },
  methods: {
    ...mapMutations(["reducefruitprice", "reduceprice"]),
    ...mapActions(["reducefruitpriceasyn"])
  }
};
</script>

<style lang="scss">
.home {
  ul {
    display: flex;

    li {
      list-style: none;
      background: rgb(19, 104, 153);
      color: #fff;
      padding: 10px;
      margin: 2px;
      border-radius: 3px;
    }
  }
  button {
    background: rgb(19, 104, 153);
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px;
    margin-left: 50px;
  }
}
</style>
