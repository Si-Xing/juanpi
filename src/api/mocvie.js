import http from "utils/http.js"
export  const HomeListA = ()=>http({
    method:"get",
    url:"api/getGoods?page=1&zy_ids=p8&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
})
export  const HomeListB = ()=>http({
    method:"get",
    url:"api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp"
})


//最后抢购
export const anapUp_api=(page=1,zy_ids="p8_c4_l4",app_name="zhe",catname="tab_hpzc",flag="tab_hpzc")=>http({
    method:"get",
    url:"/api/getGoods",
    data:{
        page:page,
        zy_ids:zy_ids,
        app_name:app_name,
        catname:catname,
        flag:flag
    }
})
// https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc
// https://webservice.juanpi.com/api/getGoods?page=3&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc
