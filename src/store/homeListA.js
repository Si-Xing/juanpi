const state ={
    listA:[],
}
const actions ={
    listAhandler({commit},data){
        commit("listAhandler",data)
    }
}
const mutations={
    listAhandler(state,data){
        state.listA=data
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced: true,
}