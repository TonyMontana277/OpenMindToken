const MyToken = artifacts.require("OpenMindToken");

module.exports = (deployer) => {
    deployer.deploy(MyToken, "OpenMindToken", "OMD", 100000);
};