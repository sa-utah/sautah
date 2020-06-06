module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_src/assets');
  eleventyConfig.addPassthroughCopy('_src/favicon.ico');
  return {
    dir: {
      input: '_src'
    }
  }
}
