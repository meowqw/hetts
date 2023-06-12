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

    POST_PERSONAL_API({commit}, personal) {
        return axios(`${API_DOMAIN}/api/personal`, {
            method: "POST",
            data: personal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + personal.token
            }
        })
            .then((response) => {
                commit();
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },

    UPDATE_PERSONAL_API({commit}, personal) {
        return axios(`${API_DOMAIN}/api/personal/${personal.id}`, {
            method: "PATCH",
            data: personal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + personal.token
            }
        })
            .then((response) => {
                commit();
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },

    POST_LEGAL_API({commit}, legal) {
        return axios(`${API_DOMAIN}/api/legal`, {
            method: "POST",
            data: legal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + legal.token
            }
        })
            .then((response) => {
                commit();
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },

    UPDATE_LEGAL_API({commit}, legal) {
        return axios(`${API_DOMAIN}/api/legal/${legal.id}`, {
            method: "PATCH",
            data: legal,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + legal.token
            }
        })
            .then((response) => {
                commit();
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
    },
}