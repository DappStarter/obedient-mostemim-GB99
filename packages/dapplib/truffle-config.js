require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember pupil inflict permit forget spot'; 
let testAccounts = [
"0x53a93b186ffea68455f03b06619c6a931b6d82576fa57d4fbb0939956271d4e3",
"0xaf0bbc70b8dd692d2ad542878dd58cd6d3d58d321c76064c536c98ba2a665871",
"0x81f4b1d6a3e43a2a5ccec6522b08b562142999bc6e2d2c984c3810a16d03cad0",
"0x0f77cb764ce5d2e3a350cd1ee701794bfb1787e419002b8c6b1875a01101fd92",
"0x30fb5f750c9562f889bbb798c3a40a0262972fe210c0ee126fa75c4a921f1d06",
"0x52ecd51f835a83da85670ecf9a6743d60aca0fa656d313aacebfb69b11cf50fb",
"0xb43d5bff03bf162efd6eb30867c686ec8c88880370e0dca06a676bbed2727d39",
"0xc83b83c5b6a42061cefa036896de16190702442f8c757e99f84941beb8afda8e",
"0x7904b957ccd34a666cfda637617f9970a06498dbf5366ae711fc3edf64960e51",
"0x5a49af90f2ba8bd3750352c83232b92fbfdce29dc08804648f4ae71ff4cd0d20"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


