export function generateTagData(tagsSet) {
  const tagsArray = Array.from(tagsSet);
  return tagsArray.filter(tag => tag && tag.trim() !== '').map(tag => ({
    title: tag,
    slug: tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }));
}
