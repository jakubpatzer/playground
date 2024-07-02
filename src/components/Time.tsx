"use client";
import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState<string>("");

  const padWithZero = (number: number): string => {
    return number.toString().padStart(2, "0");
  };

  const updateTime = () => {
    const date = new Date();
    const formattedTime = `${padWithZero(date.getHours())}:${padWithZero(
      date.getMinutes()
    )}:${padWithZero(date.getSeconds())}`;
    setTime(formattedTime);
  };

  useEffect(() => {
    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <p>Current Time: {time}</p>
    </div>
  );
};

export default Time;
