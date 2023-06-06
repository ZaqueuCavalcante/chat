export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "IManager",
  description: "IManager Web.",
  mainNav: [
    {
      title: "Vendas",
      href: "/",
    },
    {
      title: "Financeiro",
      href: "/",
    },
    {
      title: "Estoque",
      href: "/",
    },
  ],
  links: {
    docs: "https://ui.shadcn.com",
  },
}
