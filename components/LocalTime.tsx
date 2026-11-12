"use client";

import React, { useEffect, useState } from "react";

export default function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Madrid",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime("");
      }
    };

    update();
    const timer = setInterval(update, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="font-mono text-xs tabular-nums text-text-muted">
      Malaga, ES{time ? ` · ${time}` : ""}
    </span>
  );
}

