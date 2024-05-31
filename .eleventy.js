const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const CleanCSS = require('clean-css');

const shortcodes = {};

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(['md']);
  eleventyConfig.addPlugin(ErrorOverlay);

  // https://www.11ty.io/docs/quicktips/inline-css/
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Minifies HTML output
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Allows us to access our single stylesheet
  eleventyConfig.addPassthroughCopy('src/style.css');

  // Image shortcode until a better solution for IIS assets can be found
  eleventyConfig.addShortcode('image', function (url) {
    return `https://iis-live-leif.cloud.contensis.com${url}`;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      data: '_data',
    },
  };
};

