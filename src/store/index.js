import Vue from 'vue'
import Vuex from 'vuex'
import config from "@/config"
import parse from "@/lib/log-parser"
import toObj from "@/lib/log-object"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        logfiles: [],
        selectedIndex: 0,
        config: config()
    },
    getters: {
        selectedLogFile: state => {
            if (state.logfiles.length > 0) {
                return state.logfiles[state.selectedIndex]
            }
            return []
        },
        filenames: state => {
            return state.logfiles.map(x => x.name)
        },
        selectedIndex: state => {
            return state.selectedIndex
        },
        fileCount: state => {
            return state.logfiles.length
        },
        config: state => {
            return state.config
        }
    },
    mutations: {
        addLogFile(state, logfile) {
            state.logfiles.push(logfile)
        },
        setSelectedIndex(state, index) {
            state.selectedIndex = index
        },
        removeLogFile(state, index) {
            var logfiles = [...state.logfiles]
            switch (index) {
                case 0:
                    logfiles.shift()
                    break;
                case state.logfiles.length - 1:
                    logfiles.pop()
                    break;
                default:
                    logfiles = [].concat(...logfiles.slice(0, index), ...logfiles.slice(index + 1))
            }
            state.logfiles = logfiles
            state.selectedIndex = 0
        }
    },
    actions: {
        importLogFile({ commit, state }, logfile) {
            logfile.logs = logfile.logs.map(x => toObj(state.config.headers, parse(x)))
            commit('addLogFile', logfile)
        },
        setSelectedIndex({ commit }, index) {
            commit('setSelectedIndex', index)
        },
        removeLogFile({ commit }, index) {
            commit('removeLogFile', index)
        }
    },
})
