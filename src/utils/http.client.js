import axios from 'axios';
import Cookies from 'universal-cookie';

const base_url = process.env.NODE_ENV === "production" ? 
    "" : 
    "http://localhost:8080";

const http_instance = axios.create({
    baseURL: `${base_url}/api/`
});

let init = function (...inst) {
    debugger;
    const cookies = new Cookies();;
    const _user = cookies.get("user");

    const user = JSON.parse(_user ? _user : "{}");

    if (!user && !user.token) {
        inst.forEach(ins => {
            ins.defaults.headers.common['Authorization'] = 'Bearer ' + user.token;
        });
    }
}

init(http_instance);

export default {
    internal: http_instance
}

export const ahal = (user, ...instance) => {
    if(!user && !user.token){
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