import Routes from "@/config/routes";
import { Settings } from "@/config/types";

/* Defining the settings for the site. */
const settings: Settings = {
  applicationName: "Blog Template",
  theme: {
    primaryColor: "blue",
  },
  headerSize: 60,
  enablePageProgress: true,
  headerLinks: [
    {
      link: Routes.blog.href,
      label: Routes.blog.name,
      activeLinks: [Routes.blog.href, Routes.blogPost.href],
    },
  ],
  giscus: {
    repo: "dgelineau/next-mantine-blog-template",
    repoId: "R_kgDOHv0e6Q",
    category: "Giscus",
    categoryId: "DIC_kwDOHv0e6c4CQqsR",
    mapping: "pathname",
    loading: "lazy",
    lang: "en",
  },
};

export default settings;
