const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const bundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        responsive: {
          adapter: require("responsive-loader/sharp"),
        },
        optimizeImagesInDev: true,
      },
    ],
    [bundleAnalyzer],
  ],
  nextConfig
);
