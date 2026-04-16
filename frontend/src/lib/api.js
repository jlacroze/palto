const API_URL = import.meta.env.VITE_API_URL;

export const fetchPage = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/pages?populate[sections][populate]=*`
  );

  return res.json();
};