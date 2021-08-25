/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  "process.env.BACKEND_URL": prod ? "/baby-app" : "",
};
