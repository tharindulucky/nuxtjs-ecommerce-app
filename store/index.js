import Vuex from 'vuex';
import axios from 'axios';
import Cookie from 'js-cookie';

const createStore = () => {
  return new Vuex.Store({


    state: {
      loadedProducts: [],
      categories: [],
      access_token: null
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
      },

      updateProduct(state, editedProduct){
        const productId = state.loadedProducts.findIndex(product => product.id === editedProduct.id);
        state.loadedProducts[productId] = editedProduct;
      },

      setAccessToken(state, access_token){
        state.access_token = access_token;
      },

      clearAccessToken(state){
        state.access_token = null;
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


      getMyProducts(vuexContext){
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': vuexContext.getters.getAccessToken
        };

        return axios.get(process.env.baseUrl + '/products/myproducts?page=0', {headers: headers}).then(result => {
          return result.data.products.sort((a, b) => b.id - a.id);
        }).catch(e => {
          console.log(e);
        });
      },


      addProduct(vuexContext, product){
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': vuexContext.getters.getAccessToken
        };
        return axios.post(process.env.baseUrl + '/products', product, {headers: headers}).then(result => {
          vuexContext.commit('addProduct', result.data.product);
          return true;
        }).catch(e => {
          console.log(e);
          return false;
        });
      },


      updateProduct(vuexContext, updatedProduct){
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': vuexContext.getters.getAccessToken
        };
        return axios.patch(process.env.baseUrl + '/products/' + updatedProduct.id, updatedProduct, {headers: headers}).then(result => {
          vuexContext.commit('updateProduct', result.data.product);
          return true;
        }).catch(e => {
          console.log(e);
          return false
        });
      },


      createUser(vuexContext, newUser){
        const headers = {
          'Content-Type': 'application/json',
        };
        return axios.post(process.env.baseUrl + '/users/signup', newUser, {headers: headers}).then(result => {
          return true;
        }).catch(e => {
          console.log(e);
          return false;
        });
      },


      authenticateUser(vuexContext, user){
        const headers = {
          'Content-Type': 'application/json',
        };
        return axios.post(process.env.baseUrl + '/users/login', user, {headers: headers}).then(result => {
          vuexContext.commit('setAccessToken', result.data.token);

          localStorage.setItem("token", result.data.token);
          localStorage.setItem("tokenExpiration", new Date().getTime() + 3600 * 1000);

          Cookie.set("jwt", result.data.token);
          Cookie.set("expirationDate", new Date().getTime() + 3600 * 1000);


          return true;
        }).catch(e => {
          console.log(e);
          return false;
        });
      },



      initAuth(vuexContext, req){
        let token;
        let tokenExpirationDate

        if(req){
          if(!req.headers.cookie){
            return;
          }
          const jwtCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith("jwt="));
          const jwtExpirationDate = req.headers.cookie.split(";").find(c => c.trim().startsWith("expirationDate="));
          if(!jwtCookie){
            return;
          }
          token = jwtCookie.split("=")[1];
          tokenExpirationDate = jwtCookie.split("=")[1];
        }else{
          token = localStorage.getItem('token');
          tokenExpirationDate = localStorage.getItem('tokenExpiration');
        }

        if(new Date() > tokenExpirationDate || !token){
          vuexContext.commit('clearAccessToken');
          return;
        }

        vuexContext.commit('setAccessToken', token);
      },



      logout(vuexContext){
        vuexContext.commit("clearAccessToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if(process.client){
          localStorage.removeItem("token");
          localStorage.removeItem("tokenExpiration");
        }
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
        return "Bearer "+state.access_token;
      },

      isAuthenticated(state){
        return state.access_token != null;
      }
    }
  });
}

export default createStore;
