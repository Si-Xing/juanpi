const state = {
    listB: [],
    id: "",
    detailsInfo: [],
    shopCarList: [],
    color: true,
    cont: true,
    selAll: true,
}
const actions = {
    listBhandler({ commit }, data) {
        commit("listBhandler", data)
    }
}
const mutations = {
    listBhandler(state, data) {
        state.listB = data
    },
    idHandler(state, id) {
        if (typeof(id)=="object") {
            state.detailsInfo = id;
            sessionStorage.setItem("detailsInfo", JSON.stringify(state.detailsInfo))
        } else {
            state.id = id;
            location.href = "http://localhost:8080/#/details"
            for (var i = 0; i < state.listB.length; i++) {
                if (state.id == state.listB[i].goods_id) {
                    state.detailsInfo = state.listB[i];
                    sessionStorage.setItem("detailsInfo", JSON.stringify(state.detailsInfo))
                    break;
                }
            }
        }

    },
    clickHandler(state, id) {
        let flag = true;
        let index = -1;
        for (var i = 0; i < state.shopCarList.length; i++) {
            if (id == state.shopCarList[i].id) {
                index = i;
                flag = false;
                break;
            }
        }
        if (flag) {
            let obj = { status: 0, id: state.id, count: 1, oprice: state.detailsInfo.oprice, cprice: state.detailsInfo.cprice, num: state.detailsInfo.bottomTexts.rightText, title: state.detailsInfo.title, src: state.detailsInfo.pic_url };
            state.shopCarList.push(obj);
        } else {
            state.shopCarList[index].count++;
        }
        if (confirm("您想要跳转到购物车吗？")) {
            location.href = "http://localhost:8080/#/shopCar"
        }
    },
    changeHandler(state, e) {
        if (state.cont) {
            state.cont = !state.cont
            e.target.innerHTML = "&#xe60d;"
            e.target.style.color = "#ff464e"
        } else {
            state.cont = !state.cont
            e.target.innerHTML = "&#xe625;"
            e.target.style.color = "#666 "
        }
    },
    clickNum(state, index) {
        if (state.color) {
            state.color = !state.color
            state.shopCarList[index].status = 1;
        } else {
            state.color = !state.color
            state.shopCarList[index].status = 0;
        }
        var bStop = true;
        for (var i = 0; i < state.shopCarList.length; i++) {
            if (!state.shopCarList[i].status) {
                bStop = false;
                break;
            }
        }
        let arr = document.querySelectorAll(".selAll")
        if (bStop) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].innerHTML = "&#xe60d;"
                arr[i].style.color = "#ff464e"
            }
        } else {
            for (var i = 0; i < arr.length; i++) {
                arr[i].innerHTML = "&#xe625;"
                arr[i].style.color = "#666"
            }
        }
    },
    allSel(state) {
        let arr = document.querySelectorAll(".All");
        if (state.selAll) {
            for (var i = 0; i < arr.length; i++) {
                arr[i].innerHTML = "&#xe60d;"
                arr[i].style.color = "#ff464e"
            }
            state.selAll
        } else {
            for (var i = 0; i < arr.length; i++) {
                arr[i].innerHTML = "&#xe625;"
                arr[i].style.color = "#666"
            }
        }
        state.selAll = !state.selAll
    },
    subHandler(state, index) {
        if (state.shopCarList[index].count == 1) {
            state.shopCarList[index].count = 1;
        } else {
            state.shopCarList[index].count--;
        }

    },
    oddHandler(state, index) {
        state.shopCarList[index].count++;
    }
}
const getters = {
    goodsPrice(state) {
        let goodsCount = 0, goodsPriceSum = 0;
        for (var i = 0; i < state.shopCarList.length; i++) {
            if (state.shopCarList[i].status) {

                goodsCount += state.shopCarList[i].count;
                goodsPriceSum += Number((state.shopCarList[i].count * Number(state.shopCarList[i].cprice.replace("￥", ""))).toFixed(2))
            }
        }
        return {
            goodsCount,
            goodsPriceSum
        }



    }
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true,
}