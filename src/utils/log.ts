/**
 * 通用日志输出（仅开发环境）
 */
const isDev = import.meta.env?.DEV

export function consoleLog(
  value: unknown,
  label?: string,
  type: 'log' | 'warn' | 'error' | 'info' = 'log'
): void {
  if (!isDev) return
  const prefix = label ? `[${label}]` : ''
  // @ts-ignore
  console[type](prefix, value)
}

export function consoleLogObject(
  obj: unknown,
  label?: string
): void {
  if (!isDev) return
  const prefix = label ? `[${label}]` : 'Object Log'
  console.group(prefix)
  console.log(obj)
  console.groupEnd()
}

export function consoleLogTable(
  data: unknown[],
  label?: string
): void {
  if (!isDev) return
  const prefix = label ? `[${label}]` : 'Table Log'
  console.group(prefix)
  console.table(data)
  console.groupEnd()
}