// 这是一个辅助函数文件，用于处理数据转换和格式化。

/**
 * 从标签集合生成标签数据数组，用于 Astro 的 getStaticPaths 和页面渲染。
 * * 关键修改：为了支持中文标签，我们使用 encodeURIComponent() 
 * 而不是基于正则的英文 slugify，以确保生成的 URL 路径有效。
 * * @param {Set<string>} tagsSet - 唯一的标签集合 (例如: {"保山", "摄影"})
 * @returns {Array<{title: string, slug: string}>} - 包含原始标题和 URL 安全 slug 的数组
 */
export function generateTagData(tagsSet) {
  const tagsArray = Array.from(tagsSet);
  
  return tagsArray
    // 过滤掉空字符串或只有空格的标签
    .filter(tag => tag && tag.trim() !== '')
    .map(tag => ({
      title: tag,
      // 使用 encodeURIComponent 确保中文标签可以作为有效的 URL 路径片段
      // 例如："人像" -> "%E4%BA%BA%E5%83%8F"
      slug: encodeURIComponent(tag) 
    }));
}

/**
 * 格式化日期为可读的字符串
 * @param {Date} date - 要格式化的日期对象
 * @returns {string} 格式化后的日期字符串 (例如: 2023年11月23日)
 */
export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // 假设您希望日期以中文格式显示
  return new Date(date).toLocaleDateString('zh-CN', options);
}


// 您可以根据原文件，在此处添加其他辅助函数 (例如：时间阅读计算等)
// ...

