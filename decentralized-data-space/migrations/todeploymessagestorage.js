const MessageStorage = artifacts.require("MessageStorage");

module.exports = function(deployer){
    deployer.deploy(MessageStorage, "Sell/Buy data has been updated safely")
};