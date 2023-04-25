import axios from "axios";
import { API_DOMAIN } from '/config.js'


export default {
    // получить все продукты
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/product`, {
            method: "GET",
        })
            .then((products) => {
                commit("SET_PRODUCTS_TO_STATE", products.data);
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
}