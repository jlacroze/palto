import { useEffect, useState } from "react";
import { fetchPage } from "../lib/api";

export const usePage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        // ✅ 1. check cache
        const cached = sessionStorage.getItem("page-data");

        if (cached) {
          setSections(JSON.parse(cached));
          return;
        }

        // ✅ 2. fetch API
        const res = await fetchPage();

        const data = res?.data?.[0]?.sections || [];

        // ✅ 3. save cache
        sessionStorage.setItem("page-data", JSON.stringify(data));

        setSections(data);
      } catch (e) {
        console.error("Error fetching page:", e);
      }
    };

    loadData();
  }, []);

  return { sections };
};