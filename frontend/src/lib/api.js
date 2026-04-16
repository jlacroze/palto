const API_URL = import.meta.env.VITE_API_URL;

export const fetchPage = async () => {
  try {
    const res = await fetch(`${API_URL}/api/pages?populate=*`);
    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
};