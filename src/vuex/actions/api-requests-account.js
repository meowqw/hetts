import axios from "axios";
import { API_DOMAIN } from '/config.js'
export default {
    // получить аккаунт
    GET_ACCOUNT({ commit }, token) {
        return axios(`${API_DOMAIN}/api/auth/user`, {
            method: "GET",
            headers: {
                'Authorization': 'Bearer ' + token
            }
            // data: data
        })
            .then((account) => {
                commit("SET_ACCOUNT_TO_STATE", account.data.data);
                return account;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
    // регистраница
    POST_ACCOUNT_REGISTER_API({ commit }, account) {
        return axios(`${API_DOMAIN}/api/auth/register`, {
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
    // логин
    POST_ACCOUNT_LOGIN_API({ commit }, account) {
        return axios(`${API_DOMAIN}/api/auth/login`, {
            method: "POST",
            data: account,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                commit("SET_TOKEN_TO_STATE", response.data['Authorization']);
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
}