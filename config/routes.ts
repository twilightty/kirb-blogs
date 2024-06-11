import { Route } from "@/config/types";

const routes: Record<string, Route> = {
  blog: {
    name: "Blog",
    href: "/",
  },
  blogPost: {
    name: "Post",
    href: "/posts/[slug]",
  },
};

export default routes;
