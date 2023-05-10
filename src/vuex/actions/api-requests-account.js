import axios from "axios";
import { API_DOMAIN } from '/config.js'
export default {
    // получить все продукты
    GET_ACCOUNT_BY_EMAIL_FROM_API({ commit }, email) {
        return axios(`${API_DOMAIN}/account?email=${email}`, {
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
    // добавить account
    POST_ACCOUNT_API({ commit }, account) {
        return axios(`${API_DOMAIN}/account/`, {
            method: "POST",
            data: account,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                commit("SET_ACCOUNT_TO_STATE", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    UPDATE_ACCOUNT_API({ commit }, accountData) {
        return axios(`${API_DOMAIN}/account/${accountData.id}`, {
            method: "PATCH",
            data: accountData,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                commit("SET_ACCOUNT_TO_STATE", response.data);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    }
}