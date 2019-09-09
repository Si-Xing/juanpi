import axios from "axios"
<<<<<<< HEAD
const http = axios.create({
    timeout:2000,
    //是否允许携带cookie
    withCredentials:true
}) 
//拦截器
//请求
http.interceptors.request.use(config=>{
    if(config.method=="get"){
        config.params = {...config.data}
    }else if(config.method=="post"){
        //根据后端要求来配置请求头
        //config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    return config
},err=>{
    return Promise.reject(err)
})
http.interceptors.response.use(res=>{
    if(res.status==200){
        return res.data;
    }
})
//响应
export default http
=======
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


>>>>>>> 0acee20ce6ed6827caf1b3c755e8a070593f48ac
