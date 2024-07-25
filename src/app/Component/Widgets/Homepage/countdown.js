"use client";
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setIsMounted(true);
    if (isMounted) {
      setTimeLeft(calculateTimeLeft());
      const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [targetDate, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex space-x-3 text-center">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="lmd:min-w-14 lg:p-1.5 p-1.5 bg-[#475D6F] text-white rounded-md">
          <div className="bg-[linear-gradient(180deg,_#FFFFFF_47.37%,_#E2E2E2_50%)] inline-block text-transparent bg-clip-text lmd:text-xl sm:text-base text-xs font-bold lmd:leading-none lg:leading-none sm:leading-none leading-none mb-[2px] [text-shadow:0px_1px_2px_rgb(30_29_39_/_0%),_1px_2px_4px_rgb(0_0_0_/_18%)]">{timeLeft[interval]}</div>
          <div className="text-[8px] font-semibold uppercase [text-shadow:0px_1px_2px_rgb(30_29_39_/_19%),_1px_2px_4px_rgb(0_0_0_/_45%)]">{interval}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
