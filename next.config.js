/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")(["react-swm-icon-pack"]);

// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = withTM({
  reactStrictMode: true,
});
