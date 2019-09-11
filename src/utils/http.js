import axios from "axios"
<<<<<<< HEAD
import  LoadingComponent from "../lib/loadimg/index.js"
=======
import Loading from "lib/loadimg/index.js"
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
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
<<<<<<< HEAD
    LoadingComponent.open()
=======
    Loading.open()
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
    return config
},err=>{
    return Promise.reject(err)
})
<<<<<<< HEAD
//响应
http.interceptors.response.use(res=>{
    if(res.status==200){
        LoadingComponent.close()
        return res.data;
        
    }
})

=======
http.interceptors.response.use(res=>{
    if(res.status==200){
        Loading.close()
        return res.data;
    }
})
//响应
>>>>>>> 3c6b92ffad672a842a4e41bee7c8d9725b3bfa9d
export default http
