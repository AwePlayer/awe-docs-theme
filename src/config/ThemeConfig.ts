interface ThemeConfig {
  logo?: string | undefined;
  title: string;
  mode: "light" | "dark" | undefined;
  navbar?: {
    title: string;
    href: string;
    icon?: string;
  }[];
}

export default ThemeConfig;
