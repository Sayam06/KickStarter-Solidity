import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4E5Ed0ff96724bF93CC3659533519c179501848e"
);

export default instance;
