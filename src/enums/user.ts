// enums/user.ts
export enum UserStatus {
  ALL = '',
  ENABLED = '启用',
  DISABLED = '禁用',
}

export enum PostStatus {
  ALL = '',
  JOINED = '已加入',
  NOT_JOINED = '未加入',
}

export enum ViewLevel {
  SELF = '展示组织内成员',
  CHILDREN = '展示下级组织成员',
  ALL = '展示所有成员',
}

// 类型定义
export type UserStatusType = UserStatus | '';
export type PostStatusType = PostStatus | '';
export type ViewLevelType = ViewLevel;