import { useEffect, useState } from "react";
import { fetchPage } from "../lib/api";

const CACHE_KEY = "page-data";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const usePage = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);

        if (cached) {
          const { data, timestamp } = JSON.parse(cached);

          // ✅ si cache encore valide
          if (Date.now() - timestamp < CACHE_DURATION) {
            setSections(data);
            return;
          }
        }

        // 🔄 fetch fresh data
        const res = await fetchPage();
        const data = res?.data?.[0]?.sections || [];

        // 💾 save avec timestamp
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data,
            timestamp: Date.now(),
          })
        );

        setSections(data);
      } catch (e) {
        console.error("Error fetching page:", e);
      }
    };

    loadData();
  }, []);

  return { sections };
};