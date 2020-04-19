import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({


    state: {
      loadedProducts: [],
      categories: []
    },


    mutations: {
      setLoadedProducts(state, products){
        state.loadedProducts = products
      },

      setCategories(state, categories){
        state.categories = categories;
      }
    },


    actions: {

      async nuxtServerInit(vuexContext, context) {
        const produtsArrRes = await axios.get('http://34.69.62.97:3000/products?page=3');
        vuexContext.commit('setLoadedProducts', produtsArrRes.data.products);

        const categoriesArrRes = await axios.get('http://34.69.62.97:3000/categories');
        vuexContext.commit('setCategories', categoriesArrRes.data);
      },

      setLoadedProducts(vuexContext, products){
        vuexContext.commit('setLoadedProducts', products);
      },

      setCategories(vuexContext, categories){
        vuexContext.commit('setCategories', categories);
      }
    },


    getters: {
      getLoadedProducts(state){
        return state.loadedProducts;
      },

      getCategories(state){
        return state.categories;
      }
    }
  });
}

export default createStore;
