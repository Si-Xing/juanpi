<template>
    <div>
    <div class="top_w">
        <img src="https://jp.juancdn.com/jpwebapp/images/go_load_new.png" alt="">
    </div>
    <div class="search">
        <div class="left">
            <span class="padd ">
                <i class="iconfont">&#xe61d;</i>
            </span>
            <span class="padd img">
                <img src="http://s2.juancdn.com/bao/170926/8/2/59ca3863a9fcf823cd42cfcb_84x60.png" alt="">
            </span>
            <span class="txt">搜索</span>
        </div>
        <div class="right">
            <img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png" alt="">
        </div>

    </div>
    <div class="banner">
        <img src="https://goods1.juancdn.com/jas/190903/1/6/5d6e0a1a33b0897ccd4ee6ce_1080x418.jpg" alt="">
        <ul>
            <li></li>
        </ul> 
    </div>
    <div class="topBanner">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
    <div class="centerBanner">
        <div class="right"></div>
        <div class="left">
            <div class="a"></div>
            <div class="b"></div>
        </div>
        <div class="left">
            <div class="c"></div>
            <div class="d"></div>
        </div>
    </div>
    <div class="center"></div> 
        <div class="mainTitle">
        <ul>
            <li>
                <router-link to="/home/listA" tag="div">精选专场</router-link>
            </li>
            <li>
                <router-link tag="div" to="/home/listB">精选单品</router-link>
            </li>
        </ul>
        
    </div>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"Home",
    components:{
    }
}
</script>
<style>
.top_w{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:.56rem;
}
.top_w img{
    width:100%;
    height:100%;
}
.search{
    width:100%;
    height:.43rem;
    padding-left:.14rem;
    display: flex;
    align-items: center;
}
.search .left{
    width:3.17rem;
    height:.28rem;
    background-color: #f2f2f2;
    border-radius: .1rem;
    display: flex;
    align-items: center;
}
.search .left i{
    display: block;
    font-size:.2rem;
}
.search .padd{
    margin: 0  .05rem;
}
.search .img img{
    width:.21rem;
    height:100%;
    display: block;
}
.search .left .txt{
    line-height:.28rem;
    font-size:.12rem;
    color: rgb(153, 153, 153);
}
.search .right img{
    height:.44rem;
    width:.44rem;
}
.banner{
    height:1.45rem;
    width:100%;
}
.banner img{
    height:100%;
    width:100%
}
.topBanner ul{
    width:100%;
    display: flex;
    height:.84rem;

}
.topBanner li{
    flex:1;
    background: url("https://goods3.juancdn.com/jas/190902/5/9/5d6cb3b533b08971d16f3df0_270x242.png?iopcmd=convert&Q=85&dst=png");
    background-position: 50% 50%;
    background-size: cover ;
}
.centerBanner{
   height:2.32rem; 
}

.centerBanner div{
    width:100%;
    float:left;
    height:2.32rem;
}
.centerBanner .right{
    width:40%;
    background: url( "https://s2.juancdn.com/jas/190905/d/e/5d70bb8fb6f8ea2df5693f27_424x656.gif" );
    background-position: 50% 50%;
    background-size: cover ;
}
.centerBanner .left{
    width:30%;
}
.centerBanner .left div{
    width:100%;
    height:50%
}

.centerBanner .left .a{
    background: url( "https://goods7.juancdn.com/jas/190905/c/9/5d70bba3b6f8ea303728aae2_328x328.png?iopcmd=convert&Q=85&dst=png" );
    background-position: 50% 50%;
    background-size: cover ;
}
.centerBanner .left .b{
    background: url( "https://goods5.juancdn.com/jas/190905/9/c/5d70bbb833b0891f1e199af4_328x328.png?iopcmd=convert&Q=85&dst=png" );
    background-position: 50% 50%;
    background-size: cover ;
}
.centerBanner .left .c{
    background: url( "https://goods3.juancdn.com/jas/190905/4/5/5d70bbad33b0891eac285fd7_328x328.png?iopcmd=convert&Q=85&dst=png" );
    background-position: 50% 50%;
    background-size: cover ;
}
.centerBanner .left .d{
    background: url( "https://goods7.juancdn.com/jas/190905/d/6/5d70bbc233b0891eb24f92f4_328x328.png?iopcmd=convert&Q=85&dst=png" );
    background-position: 50% 50%;
    background-size: cover ;
}
.center{
    background: url( "https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png?iopcmd=convert&Q=85&dst=png" );
    background-position: 50% 50%;
    background-size: cover ;
    height:.48rem;
    width:100%;
    border-top:.1rem solid #f2f2f2;
}
.mainTitle{
    height:.54rem;
    width:100%;
    border-top:.1rem solid #f2f2f2;
}
.mainTitle ul li{
    text-align: center;
    float:left;
    line-height:.44rem;
    padding: 0 .1rem;
    font-size:.16rem;
    color:#333;
   
}
.mainTitle ul li div{
    width:.64rem;
    height:.44rem;
    border-bottom: 4px solid #fff;
}
.mainTitle ul li .router-link-active{
    border-bottom: 4px solid #ff464e;
}
</style>