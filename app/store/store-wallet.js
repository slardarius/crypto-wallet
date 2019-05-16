import Vuex from 'vuex';
import Vue from 'nativescript-vue';
import {ethers} from '../assets/ethers';
Vue.use(Vuex);

const store_wallet = new Vuex.Store({
    state: {
        wallet: {},
    },
    mutations: {
        set(state, {type, value}) {
            state[type] = value
        }
    },
    actions: {
        createWallet({commit}, query) {
            if (query.length) {
                // const wallet = new ethers.Wallet.fromMnemonic(query);
                // console.log(wallet);

            }
        }
    }
});

export default  store_wallet;