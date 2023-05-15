import axios from "axios";
import { API_DOMAIN } from '/config.js'
export default {
    // получить все продукты
    GET_ORDER_BY_ACCOUNT_FROM_API({ commit }, accountId) {
        return axios(`${API_DOMAIN}/orders?account_id=${accountId}`, {
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
    POST_ORDER_API({ commit }, order) {
        return axios(`${API_DOMAIN}/api/orders`, {
            method: "POST",
            data: order,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + order.token
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