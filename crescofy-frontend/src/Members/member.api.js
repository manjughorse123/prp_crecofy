import { API_URL, authHeader } from '@/Core/helpers/utils';
import axios from 'axios';

const RESOURCE_URL = `${API_URL}/api/v1/members/`;

export default {
  get(token, params) {
    let url = `${RESOURCE_URL}?`;
   
    if (params && params.prefs) {
      params.prefs.forEach((id) => {
        url += `&pref=${id}`;
      });
      delete params.prefs;  
    }

    return axios.get(url, {
      params: params,
      headers: authHeader(token)
    })
  },
  update(token, obj) {
    let url = `${RESOURCE_URL}${obj.id}/`;
    return axios.patch(url, obj, {
      headers: authHeader(token)
    })
  },
  get_recent(token) {
    let url = `${RESOURCE_URL}recent_member/`;
    return axios.get(url, {
      headers: authHeader(token)
    })
  },

  create(token, obj) {
    return axios.post(RESOURCE_URL, obj, {
      headers: authHeader(token)
    })
  },
  delete(token, objId) {
    let url = `${RESOURCE_URL}${objId}/`;
    return axios.delete(url, {
      headers: authHeader(token)
    })
  },
  get_receipts(token, params, objId) {
    let url = `${RESOURCE_URL}${objId}/receipts/`;
    return axios.get(url, {
      params: params,
      headers: authHeader(token)
    })
  },
  get_campaigns(token, params, objId) {
    let url = `${RESOURCE_URL}${objId}/campaigns/`;
    return axios.get(url, {
      params: params,
      headers: authHeader(token)
    })
  },
  get_campaign_orders(token, params, objId, campaignId) {
    let url = `${RESOURCE_URL}${objId}/campaigns/${campaignId}/orders`;
    return axios.get(url, {
      params: params,
      headers: authHeader(token)
    })
  },
  get_member_purchases(token, params, objId){
    let url = `${API_URL}/api/v1/getPurchasebyMember/${objId}/`
    return axios.get(url, {
      params: params,
      headers: authHeader(token)
    })
  },
  metrics(token, params) {
    return axios.get(RESOURCE_URL, {
      params,
      headers: authHeader(token)
    })
  },
  get_member_detail(token,objId) {
    let url = `${RESOURCE_URL}${objId}`
    return axios.get(url, {
      headers: authHeader(token)
    })
  }
}
