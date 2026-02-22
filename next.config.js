/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [require("remark-gfm")],
        rehypePlugins: [require("rehype-highlight")],
    },
});

module.exports = withMDX(nextConfig);
