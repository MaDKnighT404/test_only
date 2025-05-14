import Chevron from "../../../../shared/components/Chevron";
import { Period } from "../../types";
import "./NavigationControls.scss";

interface NavigationControlsProps {
  periods: Period[];
  activePeriod: Period;
  onPeriodChange: (index: number) => void;
  isMobile: boolean;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  periods,
  activePeriod,
  onPeriodChange,
  isMobile,
}) => {
  const activePeriodIndex = periods.findIndex((period) => period.id === activePeriod.id);

  const isFirstPeriod = activePeriodIndex === 0;
  const isLastPeriod = activePeriodIndex === periods.length - 1;

  const handlePrevClick = () => {
    if (!isFirstPeriod) {
      onPeriodChange(activePeriodIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPeriod) {
      onPeriodChange(activePeriodIndex + 1);
    }
  };

  return (
    <div className="circle-navigation-controls">
      <div className="circle-navigation-controls__counter">
        {String(activePeriodIndex + 1).padStart(2, "0")}/{String(periods.length).padStart(2, "0")}
      </div>

      <div className="circle-navigation-controls__buttons">
        <button
          className={`circle-navigation-controls__button  ${
            isMobile ? "circle-navigation-controls__button--mobile" : ""
          }`}
          onClick={handlePrevClick}
          disabled={isFirstPeriod}
        >
          <Chevron direction="left" />
        </button>
        <button
          className={`circle-navigation-controls__button  ${
            isMobile ? "circle-navigation-controls__button--mobile" : ""
          }`}
          onClick={handleNextClick}
          disabled={isLastPeriod}
        >
          <Chevron direction="right" />
        </button>
      </div>
    </div>
  );
};

export default NavigationControls;
