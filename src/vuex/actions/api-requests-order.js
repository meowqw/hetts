import axios from "axios";
import { API_DOMAIN } from '/config.js'
export default {
    // получить все продукты
    GET_ORDER_BY_ACCOUNT_FROM_API({ commit }, accountId) {
        return axios(`${API_DOMAIN}/order?account_id=${accountId}`, {
            method: "GET",
            // data: data
        })
            .then((order) => {
                commit("SET_ORDER_TO_STATE", order.data);
                return order;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // добавить account
    POST_ORDER_API({ commit }, account) {
        return axios(`${API_DOMAIN}/order/`, {
            method: "POST",
            data: account,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                commit("SET_ORDER_TO_STATE", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
}