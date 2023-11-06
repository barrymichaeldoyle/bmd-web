import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Barry Michael Doyle | Lead React & Frontend Engineer",
    short_name: "Barry Michael Doyle",
    description: "Barry Michael Doyle | Lead React & Frontend Engineer",
    start_url: "/",
    display: "standalone",
    background_color: "#000",
    theme_color: "#63fbb4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
