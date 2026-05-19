const API_URL = import.meta.env.VITE_API_URL;

export const fetchPage = async () => {
  const res = await fetch(
    `${API_URL}/api/pages?populate[sections][populate]=*`
  );

  if (!res.ok) throw new Error(`API error: ${res.status}`);

  return res.json();
};
