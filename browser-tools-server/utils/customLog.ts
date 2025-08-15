export default function debugLog(level: 'INFO' | 'WARN' | 'ERROR', ...args: any[]) {
  const date = new Date(); // 获取当前时间
  const year = date.getFullYear(); // 获取年份
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 获取月份，补零
  const day = String(date.getDate()).padStart(2, '0'); // 获取日期，补零
  const hours = String(date.getHours()).padStart(2, '0'); // 获取小时，补零
  const minutes = String(date.getMinutes()).padStart(2, '0'); // 获取分钟，补零
  const seconds = String(date.getSeconds()).padStart(2, '0'); // 获取秒数，补零

  // 拼接成精确到年月日时分秒的字符串
  const timestamp = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const prefix = 'MCP LOG'
  // 定义颜色
  const colors = {
    INFO: '\x1b[32m', // 绿色
    WARN: '\x1b[33m', // 黄色
    ERROR: '\x1b[31m', // 红色
    RESET: '\x1b[0m', // 重置颜色
  };

  // 根据日志级别选择颜色
  const color = colors[level] || colors.RESET;

  // 输出带颜色的日志
  console.log(`${color}[${prefix}-${level} ${timestamp}]${colors.RESET}`, ...args);
}