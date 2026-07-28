export interface NavigationSubItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface NavigationItem {
  label: string;
  href?: string;
  external?: boolean;
  ariaLabel?: string;
  /** 子選單項目（下拉選單） */
  subItems?: NavigationSubItem[];
}
