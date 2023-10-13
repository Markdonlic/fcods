export default function manifest() {
  return {
    name: "FCO Digital Services",
    short_name: "FCODS",
    description: "First Citi Online Digital Services",
    start_url: "/",
    display: "standalone",
    background_color: "#0066ff",
    theme_color: "#0066ff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
