import axios from "axios"
import loading from "lib/loadimg/index.js"
const server = axios.create({
    timeout:10000,
    withCredentials:true
})
server.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "POST"){
        //config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    loading.open()
    return config;
},err=>{
    return Promise.reject(err);
})

server.interceptors.response.use(res=>{
    if(res.status == 200){
        loading.close()
        return res.data;
    }
})

export default server;


