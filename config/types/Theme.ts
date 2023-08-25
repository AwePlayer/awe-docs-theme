export type ThemeModeType = "light" | "dark" | "system";

interface Theme {
  logo?: string | undefined;
  title: string;
  mode: ThemeModeType;
  baseUrl: string;
}

export default Theme;
