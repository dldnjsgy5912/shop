/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    images: {
        domains: ["localhost", "d3t32hsnjxo7q6.cloudfront.net"],
    },
};

module.exports = nextConfig;
