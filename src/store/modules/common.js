export default {
    state: () => ({
        isLoading: false,
    }),

    getters: {
        checkLoading(state) {
            return state.isLoading
        },
    },

    mutations: {
        SET_LOADING(state, payload) {
            state.isLoading = payload
        },
    },

    actions: {
        setLoading({ commit }, data) {
            commit('SET_LOADING', data)
        },
    },
}
