// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "basket duty dust demand provide over fire frequent forget soup usage gain",
  "https://rinkeby.infura.io/v3/05ff3d0932e5451a82d419eb27f57fe8"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting to deploy from account: ", accounts[0]);
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({
      data: compiledFactory.bytecode,
    })
    .send({ from: accounts[0], gas: "1000000" });

  console.log("Contract deployed to: ", result.options.address);
  provider.engine.stop();
};

deploy();
