export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Japan Journey",
  description:
    "Explore Japan's education system and culture. Learn about the country's history, language, and more.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "News",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    press: "/press",
    apply: "/apply",
  },
}
