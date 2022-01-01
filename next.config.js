/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    // The build process has its own tsconfig.json, which ignores the cypress directory.
    tsconfigPath: './tsconfig.build.json',
  },
}
