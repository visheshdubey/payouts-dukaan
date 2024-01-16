export interface NavItem {
  icon: JSX.Element;
  name: string;
  childrens?: ChildNavItem[];
  roles?: string[];
  isActive?: boolean;
}

export interface ChildNavItem {
  name: string;
  chipContent?: string;
  isActive?: boolean;
  roles?: string[];
}
