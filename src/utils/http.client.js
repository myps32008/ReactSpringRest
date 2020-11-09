import axios, { AxiosInstance } from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

const http_instance = axios.create({
    baseURL: `${base_url}/api/`
});

let init = function (...inst) {

    const _user = localStorage.getItem("user");

    const user = JSON.parse(_user === null ? "{}" : _user);

    if (user != undefined && user!= undefined && user.token != "") {
        inst.forEach(ins => {
            ins.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
        });
    }
}

init(http_instance);

export default {
    crm: http_instance
}

export const ahal = (user, ...instance) => {
    if(user != undefined && user.token != undefined){
        instance.forEach(ins => {
            ins.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
        })
    }
}


export const rhal = (...instance) => {
    instance.forEach(ins => {
        delete ins.defaults.headers.common["Authorization"];
    })
}