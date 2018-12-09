import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import ajax from "./ajax";
import stg from "./stg";
import perm from "./perm";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // dic
    subjects: [],

    profile: null,

    modal: null,
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
    set(state, q) {
      state[q[0]] = q[1];
    },
    alertMsg(state, msg) {
      state.modal = {msg};
    },
    confirm(state, pars) {
      state.modal = {
        hdr: pars.hdr,
        msg: pars.msg,
        buttons: [
          {txt: 'Да', variant: 'success', cb: pars.okCb},
          {txt: 'Отмена', cb: pars.cancelCb},
        ],
      };
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
    refreshProfile({commit}) {
      console.log('refreshProfile');
      return ajax.reqAPI('profile').then(response => {
        commit('setProfile', response.data);
      });
    },
    reloadDic({dispatch}) {
      return Promise.all([
        dispatch('reloadSubjects'),
      ]);
    },
    reloadSubjects({commit}) {
      return ajax.reqAPI(`dic/subjects`, {without_token: true}).then(response => {
        commit('set', ['subjects', response.data]);
      });
    },
  },
})
