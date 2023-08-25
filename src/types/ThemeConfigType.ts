export type ThemeModeType = "light" | "dark" | "system";

interface NavItemType {
  title: string;
  href: string;
  icon?: string;
  children?: NavItemType[];
}

interface FooterType {
  copyright?: string;
  socials?: NavItemType[];
  categories?: any;
}

interface NavBarType {
  left?: NavItemType[];
  right?: NavItemType[];
}

interface ThemeConfig {
  logo?: string | undefined;
  title: string;
  mode: ThemeModeType;
  baseUrl: string;
  navbar?: NavBarType;
  sidebar?: NavItemType[];
  footer?: FooterType;
}

export default ThemeConfig;
