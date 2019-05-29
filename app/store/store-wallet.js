import Vuex from 'vuex';
import Vue from 'nativescript-vue';
Vue.use(Vuex);

const store_wallet = new Vuex.Store({
    state: {
        wallet: {},
        address: '',
        private_key: '',
        provider: '',
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