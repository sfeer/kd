export interface MenuItem {
  id: string;
  name: string;
  icon?: string;
  child?: MenuItem[];
}
