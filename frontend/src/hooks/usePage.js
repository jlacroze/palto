import { useEffect, useState } from "react";
import { fetchPage } from "../lib/api";

export const usePage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetchPage();

      if (!res) return;

      setSections(res.data?.[0]?.sections || []);
    };

    loadData();
  }, []);

  return { sections };
};