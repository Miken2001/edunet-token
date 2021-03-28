var EdToken = artifacts.require("./EdToken.sol");
var EdTokenSale = artifacts.require("./EdTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(EdToken, 50000000).then(function() {
    // The EdToken price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(EdTokenSale, EdToken.address, tokenPrice);
  });
};
