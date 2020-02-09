module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('_src/assets');
  return {
    dir: {
      input: '_src'
    }
  }
}
