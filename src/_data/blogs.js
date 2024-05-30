const { Client } = require('contensis-delivery-api');
const { contensisConfig } = require('../util/contensisClient');

const getBlogPosts = async () => {
  const client = Client.create(contensisConfig);
  try {
    const res = await client.entries.list({
      contentTypeId: 'blogPost',
      pageOptions: {
        pageSize: 10,
      },
      order: ['-entryTitle'],
    });

    if (res && res.items) {
      const mappedItems = res.items.map((item) => {
        return {
          id: item.sys.id,
          slug: item.sys.slug,
          title: item.entryTitle,
          description: item.entryDescription,
          image: {
            src: item.primaryImage.asset.sys.uri,
            alt: item.altText,
          },
        };
      });
      return mappedItems;
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = getBlogPosts;

