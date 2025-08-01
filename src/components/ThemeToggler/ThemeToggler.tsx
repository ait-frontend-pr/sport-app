"use client"

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // можно поставить html заглушку
  }
  return (
    <button className="p-2 m-4 border rounded"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? "🌞" : "🌛"}
    </button>
  );
}
