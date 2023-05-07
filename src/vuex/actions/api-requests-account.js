import axios from "axios";
import { API_DOMAIN } from '/config.js'
export default {
    // получить все продукты
    GET_ACCOUNT_BY_EMAIL_FROM_API({ commit }) {
        return axios(`${API_DOMAIN}/account`, {
            method: "GET",
            // data: data
        })
            .then((account) => {
                commit("SET_ACCOUNT_TO_STATE", account.data);
                return account;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
}