export interface NavigationItem {
  /** 翻译键，同时作为 content/<locale>/ 下的分类目录名 */
  key: string;
  /** 分类列表页 URL */
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "updates", path: "/updates", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
  { key: "features", path: "/features", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.key);
