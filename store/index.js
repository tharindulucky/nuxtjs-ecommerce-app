import Vuex from 'vuex';
import axios from 'axios';

const createStore = () => {
  return new Vuex.Store({


    state: {
      loadedProducts: [],
      myProducts: [],
      categories: [],
      access_token: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRlbW9AZGVtby5jb20iLCJ1c2VySWQiOjEsInVzZXJMZXZlbCI6InVzZXIiLCJpYXQiOjE1ODczMjcyNzAsImV4cCI6MTU4NzMzMDg3MH0.u6Ea8QtlFt898IDzCzZXqYAnMKFnVvRQ9sp6o6xZtnY"
    },


    mutations: {
      setLoadedProducts(state, products){
        state.loadedProducts = products
      },

      setMyProducts(state, products){
        state.myProducts = products
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
          const produtsArrRes = await axios.get('http://34.69.62.97:3000/products?page=0');
          vuexContext.commit('setLoadedProducts', produtsArrRes.data.products);

          const headers = {
            'Content-Type': 'application/json',
            'Authorization': vuexContext.state.access_token
          };

          const myProductsArrRes = await axios.get('http://34.69.62.97:3000/products/myproducts?page=0', {headers: headers});
          vuexContext.commit('setMyProducts', myProductsArrRes.data.products);

          const categoriesArrRes = await axios.get('http://34.69.62.97:3000/categories');
          vuexContext.commit('setCategories', categoriesArrRes.data);
      },

      setLoadedProducts(vuexContext, products){
        vuexContext.commit('setLoadedProducts', products);
      },

      setMyProducts(vuexContext, products){
        vuexContext.commit('setCategories', products);
      },

      setCategories(vuexContext, categories){
        vuexContext.commit('setCategories', categories);
      },

      addProduct(vuexContext, product){

        const headers = {
          'Content-Type': 'application/json',
          'Authorization': vuexContext.state.access_token
        };

        return axios.post('http://34.69.62.97:3000/products', product, {headers: headers}).then(result => {
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
        return axios.patch('http://34.69.62.97:3000/products/' + updatedProduct.id, updatedProduct, {headers: headers}).then(result => {
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

      getMyProducts(state){
        return state.myProducts;
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
