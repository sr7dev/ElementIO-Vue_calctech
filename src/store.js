import Vue from "vue";
import Vuex from "vuex";
import _ from "lodash";
import ajax from "./ajax";
import stg from "./stg";
import perm from "./perms";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appError: false,
        isCollapsed: false,
        // dic
        perms: [],
        langs: [],
        grades: [],
        subjects: [],
        topics: [],
        sub_topics: [],
        difficulties: [],
        task_kinds: [],
        task_types: [],
        attachment_types: [],
        roles: [],
        users: {},
        groups: {},

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
        toggleSidebar(state) {
          state.isCollapsed = !state.isCollapsed
        },
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
            return ajax.reqAPI('profile').then(response => {
                commit('setProfile', response.data);
                console.log(response.data);
            });
        },
        // reloadPerms({commit}) {
        //     return ajax.reqAPI(`dic/perms`).then(response => {
        //         commit('set', ['perms', response.data]);
        //         console.log('perms', response.data);
        //     });
        // },
        reloadDic({dispatch}) {
            return Promise.all([
                dispatch('reloadLangs'),
                dispatch('reloadGrades'),
                dispatch('reloadSubjects'),
                dispatch('reloadTopics'),
                dispatch('reloadSubTopics'),
                dispatch('reloadDifficulties'),
                dispatch('reloadTaskKinds'),
                dispatch('reloadTaskTypes'),
                dispatch('reloadAttachmentTypes'),
            ]);
        },
        reloadLangs({commit}) {
            return ajax.reqAPI(`dic/langs`, {without_token: true}).then(response => {
                commit('set', ['langs', response.data]);
            });
        },
        reloadGrades({commit}) {
            return ajax.reqAPI(`dic/grades`, {without_token: true}).then(response => {
                commit('set', ['grades', response.data]);
            });
        },
        reloadSubjects({commit}) {
            return ajax.reqAPI(`dic/subjects`, {without_token: true}).then(response => {
                commit('set', ['subjects', response.data]);
            });
        },
        reloadTopics({commit}) {
            return ajax.reqAPI(`dic/topics`, {without_token: true}).then(response => {
                commit('set', ['topics', response.data]);
            });
        },
        reloadSubTopics({commit}) {
            return ajax.reqAPI(`dic/sub_topics`, {without_token: true}).then(response => {
                commit('set', ['sub_topics', response.data]);
            });
        },
        reloadDifficulties({commit}) {
            return ajax.reqAPI(`dic/difficulties`, {without_token: true}).then(response => {
                commit('set', ['difficulties', response.data]);
            });
        },
        reloadTaskKinds({commit}) {
            return ajax.reqAPI(`dic/task_kinds`, {without_token: true}).then(response => {
                commit('set', ['task_kinds', response.data]);
            });
        },
        reloadTaskTypes({commit}) {
            return ajax.reqAPI(`dic/task_types`, {without_token: true}).then(response => {
                commit('set', ['task_types', response.data]);
            });
        },
        reloadRoles({commit}) {
            return ajax.reqAPI(`roles`).then(response => {
                commit('set', ['roles', response.data]);
            });
        },
        reloadUsers({commit}, pars) {
            return ajax.reqAPI(`usrs`, {pars}).then(response => {
                commit('set', ['users', response.data]);
            });
        },
        reloadGroups({commit}, pars) {
            return ajax.reqAPI(`groups`, {pars}).then(response => {
                commit('set', ['groups', response.data]);
            });
        },
        reloadAttachmentTypes({commit}) {
            return ajax.reqAPI(`dic/attachment_types`, {without_token: true}).then(response => {
                commit('set', ['attachment_types', response.data]);
            });
        }
        ,
    },
})
