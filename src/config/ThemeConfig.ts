type ModeType = "light" | "dark";

interface NavItemType {
  title: string;
  href: string;
  icon?: string;
  children?: NavItemType[];
}

interface ThemeConfig {
  logo?: string | undefined;
  title: string;
  mode: ModeType;
  baseUrl: string;
  navbar?: NavItemType[];
  sidebar?: NavItemType[];
}

export default ThemeConfig;
