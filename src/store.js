import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import ajax from "./ajax";
import stg from "./stg";
import perm from "./perm";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appLoading: false,
    profile: null,
  },
  getters: {
    phps: (state) => (ids) => {
      return (state.profile && _.find(state.profile.perms, x => (ids.indexOf(x) > -1)));
    },
    php: (state, getters) => (ids) => {
      return getters.phps(_.concat([perm.All], ids));
    },
  },
  mutations: {
    setAppLoading(state, value) {
      state.appLoading = value;
    },
    setProfile(state, value) {
      // if (!!state.profile !== !!value) {
      //   if (value) {
      //   } else {
      //   }
      // }
      if (!value) {
        stg.set('auth_token', '');
      }
      state.profile = value;
    },
  },
  actions: {
    refreshProfile({commit, dispatch, state, getters}) {
      console.log('refreshProfile');
      return ajax.reqAPI('profile').then(response => {
        commit('setProfile', response.data);
      });
    },
  },
})
