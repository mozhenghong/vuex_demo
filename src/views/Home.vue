<template>
  <div class="home">
    <ul>
      <li v-for="product in fruits" v-bind:key="product.name">
        <span>{{product.name}}</span>
        <span>{{product.price}}</span>
      </li>
    </ul>
    <button @click="reducefruitprice">水果降价</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapMutations } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {
      fruits: this.$store.state.b.fruits
    };
  },
  methods: {
    reducefruitprice() {
      this.$store.commit("reducefruitprice", 4);
    },
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
}
</style>
