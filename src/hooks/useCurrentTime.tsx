"use client";

import { useEffect, useState } from "react";

export const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState<string | undefined>();

  useEffect(() => {
    // Update time every minute
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes.toString().padStart(2, '0');
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Display timezone abbreviation (CET, EST, etc.)
      const timezoneAbbr = timezone.split('/')[1] || timezone;
      setCurrentTime(`${formattedHours}:${formattedMinutes} ${ampm}, ${timezoneAbbr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);

   }, []);

    return currentTime; // Return the current time
};
