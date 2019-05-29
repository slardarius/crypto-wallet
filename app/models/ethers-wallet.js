import {Wallet} from "./model-wallet";
import {ethers} from '../assets/ethers';
import store_wallet from '../store/store-wallet';


export class EthersWallet extends Wallet {
    constructor() {
        super();
    }

    onCreateWallet() {
        this._wallet = ethers.Wallet.createRandom();
        console.log(this._wallet);
    }


}