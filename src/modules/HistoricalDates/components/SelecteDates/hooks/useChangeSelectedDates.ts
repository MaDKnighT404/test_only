import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import type { Period } from "../../../types";

export const useChangeSelectedDates = (activePeriod: Period) => {
  const startYearRef = useRef({ value: activePeriod.startYear });
  const endYearRef = useRef({ value: activePeriod.endYear });
  const [displayStartYear, setDisplayStartYear] = useState(activePeriod.startYear);
  const [displayEndYear, setDisplayEndYear] = useState(activePeriod.endYear);

  useEffect(() => {
    gsap.to(startYearRef.current, {
      value: activePeriod.startYear,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => setDisplayStartYear(Math.round(startYearRef.current.value)),
    });

    gsap.to(endYearRef.current, {
      value: activePeriod.endYear,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: () => setDisplayEndYear(Math.round(endYearRef.current.value)),
    });
  }, [activePeriod]);

  return { displayStartYear, displayEndYear };
};
