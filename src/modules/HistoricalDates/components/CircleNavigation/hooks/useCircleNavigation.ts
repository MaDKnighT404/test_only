import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { UseCircleNavigationProps, UseCircleNavigationReturn } from "../../../types";

export const useCircleNavigation = ({
  periods,
  activePeriodIndex,
}: UseCircleNavigationProps): UseCircleNavigationReturn => {
  const circleRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const positionDots = () => {
      if (!circleRef.current) return;

      const dots = dotsRef.current.filter(Boolean) as HTMLDivElement[];
      if (dots.length === 0) return;

      const radius = 265;
      const totalDots = periods.length;

      // Начинаем с 13 часов
      const startAngle = -Math.PI / 2 + Math.PI / 6;

      // Установка начальных позиций точек
      dots.forEach((dot, index) => {
        const angle = ((2 * Math.PI) / totalDots) * index + startAngle;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        gsap.set(dot, {
          x,
          y,
          xPercent: -50,
          yPercent: -50,
        });
      });

      const targetRotation = -(360 / totalDots) * activePeriodIndex;

      // Анимируем вращение всего круга
      gsap.to(circleRef.current, {
        duration: 1.5,
        rotation: targetRotation,
        ease: "power2.inOut",
      });

      // И точек вокруг своей оси
      dots.forEach((dot) => {
        gsap.to(dot, {
          duration: 1.5,
          rotation: -targetRotation,
          ease: "power2.inOut",
        });
      });
    };

    positionDots();
    window.addEventListener("resize", positionDots);
    const timeoutId = setTimeout(positionDots, 100);
    return () => {
      window.removeEventListener("resize", positionDots);
      clearTimeout(timeoutId);
    };
  }, [activePeriodIndex, periods.length]);

  return {
    circleRef,
    dotsRef,
  };
};
