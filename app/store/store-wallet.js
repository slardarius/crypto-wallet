import Vuex from 'vuex';
import Vue from 'nativescript-vue';
import {ethers} from '../assets/ethers.js';
Vue.use(Vuex);
import { SecureStorage } from "nativescript-secure-storage";


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
            const buff = query;
            const phrases = buff.join(' ');
            console.log(phrases);
            // 'radar blur cabbage chef fix engine embark joy scheme fiction master release'
            // 'company pipe cage scheme once bubble discover stock comic filter usual scheme'
            const wallet = ethers.Wallet.fromMnemonic(phrases);
            console.log(wallet);
            console.log(wallet.privateKey);
            console.log(wallet.address);
            const secureStorage = new SecureStorage();
            ['privateKey', 'address'].forEach(key => {
                secureStorage.setSync(
                    {
                        key,
                        value: wallet[key]
                    }
                ); 
            });

        }
    }
});

export default  store_wallet;