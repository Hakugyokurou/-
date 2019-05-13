import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        starMap: null,
        data: {}
    },
    mutations: {
        setDf(state, val) {
            state.starMap = val;
        },
        set(state, val) {
            state.data[val[1]] = val[0];
        }
    },
    actions: {
        getDf() {
            let axios = this._vm.axios;
            axios.get('plan.json')
                .then((res) => {
                    this.commit('setDf', res.data.data)
                })
        },
        get() {
            let axios = this._vm.axios;
            let val = arguments[1];
            axios.get(`/api/constellation/getAll?consName=${val[0]}&type=${val[1]}&key=0db4a6757ed64712b97d60238e8c6bf1`)
                .then((res) => {
                    let arr = [res.data, val[1]];
                    this.commit('set', arr)
                })
        }
    }
})
