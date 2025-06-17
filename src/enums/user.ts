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

export const USER_STATUS_OPTIONS = [
  { label: '全部', value: UserStatus.ALL },
  { label: '启用', value: UserStatus.ENABLED },
  { label: '禁用', value: UserStatus.DISABLED },
];

export const POST_STATUS_OPTIONS = [
  { label: '全部', value: PostStatus.ALL },
  { label: '已加入', value: PostStatus.JOINED },
  { label: '未加入', value: PostStatus.NOT_JOINED },
];

export const VIEW_LEVEL_OPTIONS = [
  { label: '展示组织内成员', value: ViewLevel.SELF },
  { label: '展示下级组织成员', value: ViewLevel.CHILDREN },
  { label: '展示所有成员', value: ViewLevel.ALL },
];