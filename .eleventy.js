module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("content/assets");

  eleventyConfig.addFilter("readableDate", function (value) {
    return new Date(value).toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection("publishedPosts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("content/posts/*.md")
      .filter((item) => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "content",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
