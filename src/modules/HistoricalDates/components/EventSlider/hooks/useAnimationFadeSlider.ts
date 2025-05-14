import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { UseCircleNavigationProps, UseCircleNavigationReturn } from "../../../types";
import { Event } from "../../../types";

interface UseAnimationFadeSliderProps {
  events: Event[];
  mobileTitleRef?: React.RefObject<HTMLDivElement>;
}

export const useAnimationFadeSlider = ({ events, mobileTitleRef }: UseAnimationFadeSliderProps) => {
  const [displayedEvents, setDisplayedEvents] = useState<Event[]>(events);
  const sliderRef = useRef<HTMLDivElement>(null);

  const prevEventsRef = useRef<Event[]>(events);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (JSON.stringify(events) !== JSON.stringify(prevEventsRef.current)) {
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }

      const fadeOut = gsap.to(sliderRef.current, {
        opacity: 0,
        y: -5,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setDisplayedEvents(events);
          prevEventsRef.current = events;
          const fadeIn = gsap.fromTo(
            sliderRef.current,
            { opacity: 0, y: 5 },
            {
              opacity: 1,
              duration: 2,
              ease: "power2.out",
              onComplete: () => {
                animationRef.current = null;
              },
            }
          );
          animationRef.current = fadeIn;
        },
      });

      if (mobileTitleRef?.current) {
        gsap.to(mobileTitleRef.current, {
          opacity: 0,
          y: -5,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            gsap.fromTo(
              mobileTitleRef.current,
              { opacity: 0, y: 5 },
              {
                opacity: 1,
                duration: 2,
                ease: "power2.out",
              }
            );
          },
        });
      }

      animationRef.current = fadeOut;
    }
  }, [events, mobileTitleRef]);

  return { displayedEvents, sliderRef };
};
