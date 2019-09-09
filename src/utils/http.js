import axios from "axios"

const server=axios.create({
    timeout:2000,
    withCredentials:true
})

server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase()=="GET"){
        config.params={...config.data}
    }else if(config.method.toUpperCase()=="POST"){
        config.headers["content-type"]="appliaction/x-www-from-urlencoded";
    }

    return config;
},(err)=>{
    Promise.reject(err)
})


server.interceptors.pesponse.use((res)=>{
    if(res.statusText=="OK"){
        return res.data
    }
},(err)=>{
    Promise.reject(err)
})


export default (method,url,data={})=>{
    if (method.toUpperCase=="GET") {
        return server.get(url,{
            params:data
        })
    } else if (method.toUpperCase=="POST") {
        return server.post(url,data)
    }
}

