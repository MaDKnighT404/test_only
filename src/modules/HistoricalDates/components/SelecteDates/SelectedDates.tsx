import React from "react";
import { Period } from "../../types";
import "./SelectedDates.scss";

import { useChangeSelectedDates } from "./hooks/useChangeSelectedDates";
interface SelectedDatesProps {
  activePeriod: Period;
}

const SelectedDates: React.FC<SelectedDatesProps> = ({ activePeriod }) => {
  const { displayStartYear, displayEndYear } = useChangeSelectedDates(activePeriod);

  return (
    <div className="selected-dates">
      <div className="selected-dates__year selected-dates__year--start">{displayStartYear}</div>
      <div className="selected-dates__year selected-dates__year--end">{displayEndYear}</div>
    </div>
  );
};

export default SelectedDates;
