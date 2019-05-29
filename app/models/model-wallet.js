export class Wallet {
    constructor() {
        this._wallet = '';
        this._address = '';
        this._private_key = '';
        this._provider = '';
    }
    /*
        * GETTER/SETTER;
     */
    get address() {
        return this._address;
    }
    set address(adr) {
        this._address = adr ? adr : '';
    }
    /*
    * Methods;
     */
    onCreateWallet() {}
    onSaveWalletInStore() {}
    onCreateProvider() {}
    onMakeTransaction() {}
}