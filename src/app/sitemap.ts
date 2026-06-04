import type { MetadataRoute } from "next";

const routes = ["", "/about", "/courses", "/courses/level", "/courses/fast", "/courses/fusion", "/courses/advanced", "/classes", "/books", "/institution", "/stories", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://kmla.example.com${route}`,
    lastModified: new Date()
  }));
}
