const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "NathanialMcConnell.name - a personal landing page and blog", // <title>
  shortSiteTitle: "NathanialMcConnell.name Landing Page & Blog", // <title> ending for posts and pages
  siteDescription: "NathanialMcConnell.name is a collection of rhapsodies, rhetoric, and rhythms",
  siteUrl: "https://nathanialmcconnell.name",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "nathanial mcconnell",
  authorTwitterAccount: "fluxaugur",
  // info
  infoTitle: "nathanial mcconnell",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "NathanialMcConnell.name - a personal landing page and blog",
  manifestShortName: "NatMcConnell", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "nate@nathanialmcconnell.name",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/FluxAugur" },
    { name: "twitter", url: "https://twitter.com/FluxAugur" },
    { name: "facebook", url: "https://facebook.com/FluxAugur" }
  ]
};
