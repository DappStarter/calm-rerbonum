require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot chaos rice meadow universe install hat army genuine'; 
let testAccounts = [
"0x2eeb81dd74a8e111714c2538ab5d44d056c94219d0d358ba9187f6ec5e2c78b6",
"0xfc756c62bc9f674c29b72f7bfcdaa473f7b685ef1c708d5ddaed70a88ec357c0",
"0xa0595e64948cd205273f9e01c3d7f3ea008d9f40df46d2a6dc6c8b7458514167",
"0x652ed38415bff1d3cd3b1b97f708eb12d3d0adb0e33b2821a924cfec758734a6",
"0xbecff5cb2577e2a72d5bc6ad342844cbb25c7f9aec022e3869dee21175d13d8a",
"0xc34c6a2fcde067d9cc3d6679671b809b5a823c5c5c21bfaa8b53f555b02e8479",
"0xa661e7962cadb9f183bd0e2505a53f6ba6ec7c2cadc98ab69736762e169b24de",
"0x2e94797e2afd4ebae48d18a55d081d1dc4f6ee47e87302927d2fef1b44c04fcb",
"0x72b47815ff96c42963e3596be1c1bc3d882b9fbd641117b625b3199359b27a21",
"0x40e8843fc3bec3f6ec22698ac0da41f72797dfa65559483ff636b94f73ae99f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
