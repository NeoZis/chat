import Vuex from 'vuex';
import state from './state';
import mutations from "./mutations";
import actions from "./actions";

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations
  })
}

export default store;
