import {GET_METRICS} from '@/Core/store/action-types';

import offerApi from '@/Offers/offer.api';
import orderApi from '@/Orders/order.api';
import campaignApi from '@/Campaigns/campaign.api';
//import paymentApi from '@/Payments/payment.api';
//import storeApi from '@/Stores/store.api';
import memberApi from '@/Members/member.api';
import productApi from '@/Products/product.api'

const initialState = {};
const state = {...initialState};

const actions = {
    async [GET_METRICS]({rootState}, params) {
        let options = [rootState.user.userProfile.access, params];
        const [  offer, campaign] = await Promise.all([
            //storeApi.metrics(...options),
            //paymentApi.metrics(...options),
            offerApi.metrics(...options),
            campaignApi.metrics(...options),
        ]);
        // const [ campaign]=await Promise.all([
        //     campaignApi.metrics(...options),
        // ])
        const [ order,member]=await Promise.all([
            orderApi.metrics(...options),
            memberApi.metrics(...options),
        ])
        // const [ member]=await Promise.all([
        //     memberApi.metrics(...options),
        // ])
        const [product] =await Promise.all([
            productApi.metrics(...options)
        ])
        console.log("in sdwdew=>",member,product)
        return {
            //totalStores: store.headers['x-total-count'],
            //totalEarnings: payment.headers['x-total-price'],
            totalOrders: order.data.count,
            totalCompaigns: campaign.data.count,
            totalOffers: offer.data.length,
            totalMembers: member.data.count,
            totalProducts: product.data.length
        };
    },
};

const mutations = {};
const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
};
