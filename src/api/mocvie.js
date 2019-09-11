import http from "utils/http.js"
//首页精选专场
export  const HomeListA = ()=>http({
    method:"get",
    url:"api/getGoods?page=1&zy_ids=p8&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc"
})
//首页精选单品
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
//分类 
export const Classify =()=>http({
    method:"get",
    url:"cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1568182571570&callback=json"
})

