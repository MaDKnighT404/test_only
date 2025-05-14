export interface Event {
  id: string;
  year: number;
  description: string;
}

export interface Period {
  id: number;
  startYear: number;
  endYear: number;
  title: string;
  events: Event[];
}

export interface UseCircleNavigationProps {
  periods: Period[];
  activePeriodIndex: number;
}

export interface UseCircleNavigationReturn {
  circleRef: React.RefObject<HTMLDivElement>;
  dotsRef: React.MutableRefObject<(HTMLDivElement | null)[]>;
}
