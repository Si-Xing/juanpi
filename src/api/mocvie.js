import http from "utils/http.js"
export  const HomeListA = (page=1,zy_ids='p8',app_name='zhe',catname='tab_hpzc',flag='tab_hpzc')=>http({
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
export  const HomeListB = ()=>http({
    method:"get",
    url:"/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp"
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
//首页详情   1771593_5809736
// https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=1454490_5107716_118415182&msort=1&goods_utype=C4&price_range=&cat_threeids=
export const homeDetails_api=(page=1,brand_id,msort=1,goods_utype='C4',price_range,cat_threeids)=>http({
    method:"get",
    url:"/api/getBrandGoods",
    data:{
        page:page,
        brand_id,brand_id,
        msort:msort,
        goods_utype:goods_utype,
        price_range:price_range,
        cat_threeids:cat_threeids
    }
})







// http://webservice.juanpi.com/api/getBrandClearanceLimitAndAds?cid=ppqc_jingxuan&zy_ids=c4_l4_0&app_name=zhe&catnam

// https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc
// https://webservice.juanpi.com/api/getGoods?page=3&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc
// https://m.juanpi.com/index/getMenu?select=4_1&zhouyi_ids=c4_l4
