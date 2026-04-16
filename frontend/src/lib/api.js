const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:1337"
    : null;

export const fetchPage = async () => {
  if (!API_URL) return null;

  try {
    const res = await fetch(`${API_URL}/api/pages?populate=*`);
    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
};