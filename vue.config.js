const path=require("path");

module.exports={
    // publicPath:"goods",
    devServer:{
        // proxy:{
        //     "/Zgio":{
        //         target:"https://m.juanpi.com",
        //         changeOrigin:true
        //     }
        // }
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
            }
        }
    }
}