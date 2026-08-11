/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // /api/mcp is called cross-origin from bookchaowalit-devhub-frontend's
    // Playground. Without this, the browser blocks reading the response
    // even though the route itself works — see devhub's PRODUCT.md.
    async headers() {
        // trailingSlash: true above means requests normalize to /api/mcp/ —
        // matching both so the header applies regardless of redirect order.
        return [
            {
                source: '/api/mcp',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
                ],
            },
            {
                source: '/api/mcp/',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS' },
                    { key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization' },
                ],
            },
        ];
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
