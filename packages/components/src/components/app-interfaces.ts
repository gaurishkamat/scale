export interface MenuItem {
  name: string;
  id: string;
  href: string;
  children?: MenuItem[];
  icon?: string;
  level: number;
  onClick?: (event: MouseEvent) => void;
}
