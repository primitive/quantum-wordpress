const isProd = process.env.NODE_ENV === 'production';

if (!process.env.WORDPRESS_API_URL) {
  throw new Error("WORDPRESS_API_URL is not set. Please add it to your environment variables.");
}

if (!URL.canParse(process.env.WORDPRESS_API_URL)) {
  throw new Error("WORDPRESS_API_URL is not a valid URL. Please provide a properly formatted URL.");
}


const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL,
);

// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: protocol.slice(0, -1),
//         hostname,
//         port,
//         pathname: `${pathname}/**`,
//       },
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: process.env.WORDPRESS_API_URL },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
    // Use the CDN in production and localhost for development.
    // assetPrefix: isProd ? 'https://quantum-wordpress.vercel.app/' : undefined,
}
