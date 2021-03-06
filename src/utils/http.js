import axios from "axios"
import  LoadingComponent from "../lib/loadimg/index.js"
import Loading from "lib/loadimg/index.js"
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
    Loading.open()
    return config
},err=>{
    return Promise.reject(err)
})
http.interceptors.response.use(res=>{
    if(res.status==200){
        Loading.close()
        return res.data;
    }
})
//响应
export default http
