global.fetch = require('node-fetch');
const dotenv = require('dotenv');

const { ACCESS_TOKEN, PROJECT_ID, CMS_ALIAS } = dotenv.config().parsed;

const contensisConfig = {
  accessToken: ACCESS_TOKEN,
  language: 'en-GB',
  projectId: PROJECT_ID,
  rootUrl: `https://cms-${CMS_ALIAS}.cloud.contensis.com`,
  versionStatus: 'published',
};

// const contensisClient = () => Client.create(config);

module.exports = { contensisConfig };

