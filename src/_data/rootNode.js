const { Client } = require('contensis-delivery-api');
const { contensisConfig } = require('../util/contensisClient');

const getRootNode = async () => {
  const client = Client.create(contensisConfig);
  try {
    const res = await client.nodes.getRoot();
    return res;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getRootNode;

