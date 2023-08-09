type ModeType = "light" | "dark" | "system";

interface NavItemType {
  title: string;
  href: string;
  icon?: string;
  children?: NavItemType[];
}

interface FooterType {
  copyright?: string;
  socials?: NavItemType[];
}

interface ThemeConfig {
  logo?: string | undefined;
  title: string;
  mode: ModeType;
  baseUrl: string;
  navbar?: NavItemType[];
  sidebar?: NavItemType[];
  footer?: FooterType;
}

export default ThemeConfig;
