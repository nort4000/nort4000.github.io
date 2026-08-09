import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NortIT",
    short_name: "NortIT",
    description: "Wsparcie IT dla firm w Warszawie i okolicach.",
    start_url: "/",
    display: "standalone",
    background_color: "#050816",
    theme_color: "#050816",
  };
}
