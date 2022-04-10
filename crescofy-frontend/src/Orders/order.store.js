import { LIST_ORDERS } from "@/Core/store/action-types";
import api from './order.api'

const actions ={
    async [LIST_ORDERS]({ rootState}, {params}) {
        const resp = await api.get(rootState.user.userProfile.access,
                                   params);
        return resp.data;
      },
}
export default {
    namespaced: true,
    actions
  };
  