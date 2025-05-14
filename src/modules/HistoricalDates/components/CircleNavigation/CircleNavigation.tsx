import React from "react";
import "./CircleNavigation.scss";
import { Period } from "../../types";
import { useCircleNavigation } from "./hooks/useCircleNavigation";

interface CircleNavigationProps {
  periods: Period[];
  activePeriodIndex: number;
  onPeriodChange: (index: number) => void;
  isMobile: boolean;
  mobileTitleRef?: React.RefObject<HTMLDivElement>;
}

const CircleNavigation: React.FC<CircleNavigationProps> = ({
  periods,
  activePeriodIndex,
  onPeriodChange,
  isMobile,
  mobileTitleRef,
}) => {
  const { circleRef, dotsRef } = useCircleNavigation({
    periods,
    activePeriodIndex,
  });

  if (isMobile) {
    return (
      <div className="circle-navigation__mobile" ref={mobileTitleRef}>
        {periods[activePeriodIndex].title}
      </div>
    );
  }

  return (
    <div className="circle-navigation">
      <div className="circle-navigation__circle-container">
        <div className="circle-navigation__circle" ref={circleRef}>
          {periods.map((period, index) => (
            <div
              key={period.id}
              ref={(el) => (dotsRef.current[index] = el)}
              className={`circle-navigation__dot ${
                index === activePeriodIndex ? "circle-navigation__dot--active" : ""
              }`}
              onClick={() => onPeriodChange(index)}
            >
              <div className="circle-navigation__dot-inner" data-index={index + 1}>
                {activePeriodIndex === index ? index + 1 : ""}
              </div>
              <div className="circle-navigation__dot-label">{period.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircleNavigation;
