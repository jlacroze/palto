const API_URL = import.meta.env.VITE_API_URL;

export const getMediaUrl = (media, fallback) => {
  if (!media) return fallback;
  if (media.formats?.medium?.url) return media.formats.medium.url;
  if (media.formats?.small?.url) return media.formats.small.url;
  if (media.url?.startsWith("http")) return media.url;
  if (media.url) return `${API_URL}${media.url}`;
  return fallback;
};

export const getSection = (sections, component) =>
  sections.find((s) => s.__component === component);
