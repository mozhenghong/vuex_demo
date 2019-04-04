import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const moduleA = {
  state: {
    products: [
      { name: '鼠标', price: '20' },
      { name: '键盘', price: '40' },
      { name: '耳机', price: '60' },
      { name: '显示屏', price: '80' }
    ]
  },
  getters: {
    saleproducts: (state) => {
      return state.products.map((product) => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
    }
  },
  mutations: {
    reduceprice(state, reduce) {
      return state.products.forEach(product => {
        product.price -= reduce
      })
    }
  },
  actions: {
    reducepriceasyn(context,reduce){
      setTimeout(() => {
        context.commit('reduceprice',reduce)
      },1000);
    }
  }
}
const moduleB = {
  state: {
    fruits: [
      { name: '草莓', price: '20' },
      { name: '菠萝', price: '40' },
      { name: '芒果', price: '60' },
      { name: '樱桃', price: '80' }
    ]
  },
  getters: {
    salefruits: (state) => {
      return state.fruits.map((product) => {
        return {
          name: product.name,
          price: product.price / 2
        }
      })
    }
  },
  mutations: {
    reducefruitprice(state, reduce) {
      return state.fruits.forEach(product => {
        product.price -= reduce
      })
    }
  },
  actions: {
    reducefruitpriceasyn(context,reduce){
      setTimeout(() => {
        context.commit('reducefruitprice',reduce)
      },1000);
    }
  }
}
export default new Vuex.Store({
  modules: {
    a:moduleA,
    b:moduleB
  }
});
