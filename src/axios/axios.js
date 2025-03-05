import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    getEvents:()=>api.get('evento/'),
    getIngressos:()=>api.get('ingresso/'),
    getOrganizadores:()=>api.get('organizador/')
}

export default sheets;