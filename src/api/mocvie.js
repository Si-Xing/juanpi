import http from "utils/http.js"
export  const HomeListA = ()=>http({
    method:"get",
    url:"api/getGoods?page=1&zy_ids=p8&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
})
export  const HomeListB = ()=>http({
    method:"get",
    url:"api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp"
})
   