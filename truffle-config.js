require("dotenv").config();
const { MNEMONIC, PROJECT_ID } = process.env;

const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    networks: {
        goerli: {
            provider: () => new HDWalletProvider(MNEMONIC, PROJECT_ID), // Corrected IPROJECT_ID to PROJECT_ID
            network_id: "5", // Goerli's Id
            gas: 5500000,
            networkCheckTimeout: 10000, // Corrected networkCheckTimeoutnetworkCheckTimeout to networkCheckTimeout
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true,
        },
    },
    compilers: {
        solc: {
            version: '0.8.21',
        },
    },
};
//Contract address: 0xdb3b601Bd936e4b7e9bB93e8FbD92F4F1344626E