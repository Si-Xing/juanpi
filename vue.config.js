<<<<<<< HEAD
const path=require("path");

module.exports={
    // publicPath:"goods",
    devServer:{
        proxy:{
            "/api":{
                target:"https://webservice.juanpi.com/",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "assets":path.join(__dirname,"./src/assets"),
                "components":path.join(__dirname,"./src/components"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "utils":path.join(__dirname,"./src/utils"),
=======
const path = require("path");
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://webservice.juanpi.com",
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.join(__dirname, "./src"),
                "api": path.join(__dirname, "./src/api"),
                "assets": path.join(__dirname, "./src/assets"),
                "common": path.join(__dirname, "./src/common"),
                "components": path.join(__dirname, "./src/components"),
                "lib": path.join(__dirname, "./src/lib"),
                "router": path.join(__dirname, "./src/router"),
                "store": path.join(__dirname, "./src/store"),
                "utils": path.join(__dirname, "./src/utils"),
                "views": path.join(__dirname, "./src/views")
>>>>>>> 0acee20ce6ed6827caf1b3c755e8a070593f48ac
            }
        }
    }
}