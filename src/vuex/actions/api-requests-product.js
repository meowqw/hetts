import axios from "axios";
import { API_DOMAIN } from '/config.js'


export default {
    // получить все продукты
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/api/products`, {
            method: "GET",
        })
            .then((products) => {
                commit("SET_PRODUCTS_TO_STATE", products.data.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },

    // получить продукты к фильтром
    GET_PRODUCTS_WITH_FILTER_FROM_API({ commit }, filterData) {
        return axios(`${API_DOMAIN}/api/products?${filterData}`, {
            method: "GET",
        })
            .then((products) => {
                commit("SET_PRODUCTS_TO_STATE", products.data.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
}