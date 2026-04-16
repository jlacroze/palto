const API_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

export const fetchPage = async () => {
  const res = await fetch(`${API_URL}/api/pages?populate=*`);
  return res.json();
};