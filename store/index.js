import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({


    state: {
      loadedProducts: [],
      categories: [],
      access_token: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZGVtby5jb20iLCJ1c2VySWQiOjEsInVzZXJMZXZlbCI6InVzZXIiLCJpYXQiOjE1ODc0NDQ5MDUsImV4cCI6MTU4NzQ0ODUwNX0.SZvaKXDfWx9QudvTYYvx3hT2ganCv6UX52Cda3W_2lI"
    },


    mutations: {
      setLoadedProducts(state, products){
        state.loadedProducts = products
      },

      setCategories(state, categories){
        state.categories = categories;
      },

      addProduct(state, product){
        state.loadedProducts.push(product);
        state.myProducts.push(product);
      },

      updateProduct(state, editedProduct){
        const productId = state.loadedProducts.findIndex(product => product.id === editedProduct.id);
        state.loadedProducts[productId] = editedProduct;

        console.log(editedProduct);
        const myProductId = state.myProducts.findIndex(product => product.id === editedProduct.id);
        state.myProducts[myProductId] = editedProduct;
      }
    },


    actions: {

      async nuxtServerInit(vuexContext, context) {

          const produtsArrRes = await axios.get(process.env.baseUrl + '/products?page=0');
          vuexContext.commit('setLoadedProducts', produtsArrRes.data.products);

          const categoriesArrRes = await axios.get(process.env.baseUrl + '/categories');
          vuexContext.commit('setCategories', categoriesArrRes.data);
      },

      setLoadedProducts(vuexContext, products){
        vuexContext.commit('setLoadedProducts', products);
      },


      setCategories(vuexContext, categories){
        vuexContext.commit('setCategories', categories);
      },

      addProduct(vuexContext, product){

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': vuexContext.state.access_token
        };

        return axios.post(process.env.baseUrl + '/products', product, {headers: headers}).then(result => {
          vuexContext.commit('addProduct', result.data.product);
        }).catch(e => {
          console.log(e);
        });
      },

      updateProduct(vuexContext, updatedProduct){

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': vuexContext.state.access_token
        };

        console.log(updatedProduct);
        return axios.patch(process.env.baseUrl + '/products/' + updatedProduct.id, updatedProduct, {headers: headers}).then(result => {
          vuexContext.commit('updateProduct', result.data.product);
        }).catch(e => {
          console.log(e);
        });
      }
    },


    getters: {
      getLoadedProducts(state){
        return state.loadedProducts;
      },

      getCategories(state){
        return state.categories;
      },

      getAccessToken(state){
        return state.access_token;
      }
    }
  });
}

export default createStore;
