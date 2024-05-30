// const { default: axios } = require('axios');

// // Example using Axios to fetch a REST query

// require('dotenv').config();
// const getBlogPosts = async () => {
//   try {
//     const res = await axios.get(
//       `https://cms-${process.env.CMS_ALIAS}.cloud.contensis.com/api/delivery/projects/${process.env.PROJECT_ID}/entries/search?where=%5B%7B"field"%3A"sys.contentTypeId"%2C"contains"%3A"blogPost"%7D%5D&pageSize=10&accessToken=${process.env.ACCESS_TOKEN}`
//     );
//     return res.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = getBlogPosts;

