import React, { useState, useRef } from "react";

import "./HistoricalDates.scss";
import CircleNavigation from "./components/CircleNavigation/CircleNavigation";
import EventSlider from "./components/EventSlider/EventSlider";
import { periods } from "./data/events";
import SelectedDates from "./components/SelecteDates/SelectedDates";
import NavigationControls from "./components/NavigationControls/NavigationControls";
import useIsMobile from "../../shared/hooks/useIsMobile";

const HistoricalDates: React.FC = () => {
  const isMobile = useIsMobile();
  const [activePeriodIndex, setActivePeriodIndex] = useState(0);
  const activePeriod = periods[activePeriodIndex];
  const mobileTitleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="historical-dates">
      <h2 className="historical-dates__header">Исторические даты</h2>

      <div className="historical-dates__content">
        <SelectedDates activePeriod={activePeriod} />
        <CircleNavigation
          periods={periods}
          activePeriodIndex={activePeriodIndex}
          onPeriodChange={setActivePeriodIndex}
          isMobile={isMobile}
          mobileTitleRef={mobileTitleRef}
        />
        {!isMobile && (
          <NavigationControls
            periods={periods}
            activePeriod={activePeriod}
            onPeriodChange={setActivePeriodIndex}
            isMobile={isMobile}
          />
        )}
      </div>

      <EventSlider events={activePeriod.events} mobileTitleRef={mobileTitleRef} />

      {isMobile && (
        <NavigationControls
          periods={periods}
          activePeriod={activePeriod}
          onPeriodChange={setActivePeriodIndex}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default HistoricalDates;
