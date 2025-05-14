import React from "react";
import "./App.scss";
import HistoricalDates from "../modules/HistoricalDates/HistoricalDates";

const App: React.FC = () => {
  return (
    <main className="app">
      <HistoricalDates />
    </main>
  );
};

export default App;
