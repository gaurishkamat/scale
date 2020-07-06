export interface MenuItem {
  name: string;
  href: string;
  children?: MenuItem[];
  icon?: string;
  level: number;
}
