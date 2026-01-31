/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seedglobalhealth.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vitalrecord.tamu.edu",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.clemson.edu",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cdc.gov",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pxl-mayoedu.terminalfour.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.wateraid.org",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
