"use client";

import React, { useState, useEffect } from "react";

function getCurrentDate() {
  const today: Date = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}/${month}/${year}`;
}

const DateComponent = () => {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    const currentDate = getCurrentDate();
    setToday(currentDate);
  }, []);

  return (
    <div>
      <h1 className="bg-black text-white text-2xl sm:text-3xl">{today}</h1>
    </div>
  );
};

export default DateComponent;
