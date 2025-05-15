import { useChangeSelectedDates } from "./hooks/useChangeSelectedDates";
import type { Period } from "../../types";

import "./SelectedDates.scss";

const SelectedDates = ({ activePeriod }: { activePeriod: Period }) => {
  const { displayStartYear, displayEndYear } = useChangeSelectedDates(activePeriod);

  return (
    <div className="selected-dates">
      <div className="selected-dates__year selected-dates__year--start">{displayStartYear}</div>
      <div className="selected-dates__year selected-dates__year--end">{displayEndYear}</div>
    </div>
  );
};

export default SelectedDates;
