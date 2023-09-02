const OpenMindToken = artifacts.require("OpenMindToken");

module.exports = function (deployer) {
  const name = "OpenMind Token"; // Specify the token name
  const symbol = "OMD"; // Specify the token symbol
  const initialSupply = 10000; // Specify the initial supply

  deployer.deploy(OpenMindToken, name, symbol, initialSupply);
};
