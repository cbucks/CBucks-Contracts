const CBucks = artifacts.require("CRYPTOBUCKS");

module.exports = function(deployer) {
  deployer.deploy(CBucks);
};
