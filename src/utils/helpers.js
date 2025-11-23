/**
 * 从标签集合生成标签数据数组，用于 Astro 的 getStaticPaths 和页面渲染。
 * * 使用 encodeURIComponent 来确保中文标签生成的 URL 路径有效。
 * * @param {Set<string> | string[]} tagsSet - 唯一的标签集合或数组
 * @returns {Array<{title: string, slug: string}>} - 包含原始标题和 URL 安全 slug 的数组
 */
export function generateTagData(tagsSet) {
  const tagsArray = Array.from(tagsSet);
  
  return tagsArray
    .filter(tag => tag && tag.trim() !== '')
    .map(tag => ({
      title: tag,
      // 关键修复：使用 encodeURIComponent 确保中文标签可以作为有效的 URL 路径片段
      slug: encodeURIComponent(tag) 
    }));
}

/**
 * 格式化日期为可读的字符串
 * @param {Date | string} date - 要格式化的日期
 * @returns {string} 格式化后的日期字符串 
 */
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('zh-CN', options);
}

