import * as DeptApi from '@/api/system/dept'
/**
 * 岗位树递归查询工具模块
 * 提供递归查询岗位的多种方法
 */

/**
 * 岗位节点类型定义
 */
export interface PositionNode {
  id: number;                     // 岗位ID
  name: string;                   // 岗位名称
  code: string;                   // 岗位编码
  parentId: number | null;        // 父岗位ID
  level: number;                  // 岗位层级
  status: number;                 // 状态：0-禁用，1-启用
  children?: PositionNode[];      // 子岗位列表
  [key: string]: any;             // 扩展属性
}

/**
 * 递归查询岗位通用函数
 * @param positions 岗位列表
 * @param condition 查询条件函数，返回true表示找到目标岗位
 * @param options 查询选项
 * @returns 找到的岗位列表
 */
export const findPositionsRecursively = (
  positions: DeptApi.DeptFormData[],
  condition: (position: PositionNode) => boolean,
  options: {
    maxDepth?: number;            // 最大递归深度，默认不限制
    includeChildren?: boolean;    // 是否包含匹配岗位的子岗位，默认false
  } = {}
): PositionNode[] => {
  const { maxDepth = Infinity, includeChildren = false } = options;
  const result: PositionNode[] = [];

  // 定义递归遍历函数
  const traverse = (nodes: PositionNode[], currentDepth: number = 0) => {
    // 超过最大深度限制则终止
    if (currentDepth > maxDepth) return;

    nodes.forEach(node => {
      // 匹配条件时添加到结果
      if (condition(node)) {
        result.push(node);
        // 不包含子岗位时跳过子节点遍历
        if (!includeChildren) return;
      }

      // 递归处理子节点
      if (node.children && node.children.length > 0) {
        traverse(node.children, currentDepth + 1);
      }
    });
  };

  traverse(positions);
  return result;
};

/**
 * 根据ID查询岗位
 * @param positions 岗位列表
 * @param positionId 岗位ID
 * @returns 找到的岗位或null
 */
export const findPositionById = (
  positions: DeptApi.DeptFormData[],
  positionId: number
): PositionNode | null => {
  const result = findPositionsRecursively(
    positions,
    (position) => position.id === positionId
  );
  return result[0] || null;
};

/**
 * 根据名称模糊查询岗位
 * @param positions 岗位列表
 * @param name 岗位名称关键词
 * @returns 匹配的岗位列表
 */
export const findPositionsByName = (
  positions: DeptApi.DeptFormData[],
  name: string
): PositionNode[] => {
  return findPositionsRecursively(
    positions,
    (position) => position.name.includes(name)
  );
};

/**
 * 根据层级查询岗位
 * @param positions 岗位列表
 * @param level 目标层级
 * @returns 匹配的岗位列表
 */
export const findPositionsByLevel = (
  positions: DeptApi.DeptFormData[],
  level: number
): PositionNode[] => {
  return findPositionsRecursively(
    positions,
    (position) => position.level === level
  );
};

/**
 * 根据状态查询岗位
 * @param positions 岗位列表
 * @param status 目标状态(0-禁用，1-启用)
 * @returns 匹配的岗位列表
 */
export const findPositionsByStatus = (
  positions: DeptApi.DeptFormData[],
  status: number
): PositionNode[] => {
  return findPositionsRecursively(
    positions,
    (position) => position.status === status
  );
};

/**
 * 获取岗位的所有子岗位
 * @param positions 岗位列表
 * @param parentId 父岗位ID
 * @returns 子岗位列表
 */
export const getChildPositions = (
  positions: DeptApi.DeptFormData[],
  parentId: number
): PositionNode[] => {
  const target = findPositionById(positions, parentId);
  return target?.children || [];
};

/**
 * 获取岗位的层级路径
 * @param positions 岗位列表
 * @param positionId 岗位ID
 * @returns 层级路径数组
 */
export const getPositionPath = (
  positions: DeptApi.DeptFormData[],
  positionId: number
): PositionNode[] => {
  const path: PositionNode[] = [];
  const findPath = (node: PositionNode) => {
    path.push(node);
    if (node.parentId === null) return;

    const parent = findPositionById(positions, node.parentId);
    if (parent) findPath(parent);
  };

  const position = findPositionById(positions, positionId);
  if (position) findPath(position);

  return path.reverse(); // 从根节点到当前节点
};