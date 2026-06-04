/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/Life_Music_Association_1st",
        assetPrefix: "/Life_Music_Association_1st/",
        trailingSlash: true
      }
    : {}),
  images: {
    unoptimized: isGitHubPages,
    localPatterns: [
      {
        pathname: "/assets/**"
      }
    ]
  }
};

export default nextConfig;
