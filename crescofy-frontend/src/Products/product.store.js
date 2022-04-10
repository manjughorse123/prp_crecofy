import {
    LIST_PRODUCTS,
    TRENDING_PRODUCTS,
    CONNECTED_PRODUCTS,
    RECOMMENDED_PRODUCTS,
    CATEGORIESVISECOUNT,
    SELECTED_PRODUCTS,
    DELETE_SELECTED_PRODUCT,
    LIST_PRODUCTS_ALL
} from '@/Core/store/action-types';

import {SET_PRODUCTS_LIST, SET_SELECTED_PRODUCTS, REMOVE_SELECTED_PRODUCT} from '@/Core/store/mutation-types';
import api from './product.api';

const initialState = {};
const state = {...initialState};

const actions = {
    async [LIST_PRODUCTS]({rootState, commit}, {params, persist}) {
        var response = await api.get(rootState.user.userProfile.access, params);
        if (persist == true)
            commit(SET_PRODUCTS_LIST, response.data);
        return response.data;
    },

    async [LIST_PRODUCTS_ALL]({rootState, commit}) {
        var response = await api.get(rootState.user.userProfile.access);
        commit(SET_PRODUCTS_LIST, response.data);
        return response.data;
    },

    async [TRENDING_PRODUCTS]({rootState}, {direction, params}) {
        let response = await api.trend(rootState.user.userProfile.access,
            direction, params)
        return response.data;
    },

    async [RECOMMENDED_PRODUCTS]({rootState}, product_ids) {
        let response = await api.recommendations(rootState.user.userProfile.access,
            product_ids)
        return response.data;
    },

    async [CONNECTED_PRODUCTS]({rootState}, params) {
        let response = await api.connected(rootState.user.userProfile.access,
            params)
        return response.data;
    },
    async [CATEGORIESVISECOUNT]({rootState}, params) {
        const response = await api.get_categoriesvisecount(rootState.user.userProfile.access, params.id)
        return response.data;
    },
    async [SELECTED_PRODUCTS]({commit}, data) {
        commit(SET_SELECTED_PRODUCTS, data);
        return data;
    },
    async [DELETE_SELECTED_PRODUCT]({commit}, id) {
        commit(REMOVE_SELECTED_PRODUCT, id);
        return id;
    }
};

const mutations = {
    [REMOVE_SELECTED_PRODUCT](state, id) {
        state.selectedProducts = state.selectedProducts.filter(product => product !== id)
    },
    [SET_SELECTED_PRODUCTS](state, data) {
        if (Array.isArray(data)) {
            state.selectedProducts = data
        } else {
            if (state.selectedProducts) {
                state.selectedProducts.push(data);
            } else {
                state.selectedProducts = []
                state.selectedProducts.push(data);
            }

        }
        console.log("dnrkes", state.selectedProducts)
    },
    [SET_PRODUCTS_LIST](state, productsList) {
        if (!Array.isArray(productsList)) {
            productsList = productsList.results;
        }
        state.productsList = productsList
            .map(v => {
                // vueform/multiselect require value prop
                v.value = v.id;
                return v;
            });
    },
};

const getters = {
    productsList(state) {
        return state.productsList;
    },
    getProdById: (state) => (id) => {
        return state.productsList ? state.productsList.find(prod => prod.id === id) : []
    },
    selectedProducts(state) {
        console.log(state.selectedProducts)
        return state.selectedProducts;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
