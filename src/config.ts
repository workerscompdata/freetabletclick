export const SITE = {
  website: "https://freetablet.click/", // replace this with your deployed domain
  author: "Free Tablet Click",
  profile: "https://freetablet.click/",
  desc: "Get your free government tablet and internet today. Complete 2026 guide for Lifeline, EBT, seniors, and students to access affordable connectivity.",
  title: "Free Government Tablet & Internet Guide 2026",
  ogImage: "freetablet-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // If you want archives hidden everywhere, keep false
  showArchives: false,

  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false, // Turned off so public users don't see a GitHub edit link
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en-US", // html lang code
  timezone: "America/New_York", // New York timezone (IANA format)
} as const;