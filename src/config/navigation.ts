export interface NavItem {
  key: string;
  path: string;
  isContentType: boolean;
}

// 导航与内容类型留待后续 Part 按新游戏的信息架构重建
export const NAVIGATION_CONFIG: NavItem[] = [];

export const CONTENT_TYPES: string[] = [];
