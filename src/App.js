import React, { useState } from "react";
import EditableSection from "./components/EditableSection";
import "./styles/App.css";
import { useWeatherData } from "./hooks/useWeatherData";
import { useFilter } from "./hooks/useFilter";
import DisplaySection from "./components/DisplaySection";
import { weatherJsonFetcher } from "./util/fetch";

const WEATHER_DATA_URL = "test-data.json";

const App = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState(null);
  const [weatherData, error] = useWeatherData(
    WEATHER_DATA_URL,
    weatherJsonFetcher
  );
  const filteredData = useFilter(startDate, endDate, location, weatherData);

  return (
    <div className="App">
      <div style={{ color: "red" }}>
        {error && <div>There was an error loading the data: {error}</div>}
      </div>
      <EditableSection
        startDate={startDate}
        endDate={endDate}
        location={location}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
        onLocationChange={(event) => setLocation(event.target.value)}
      />
      <DisplaySection data={filteredData} />
    </div>
  );
};

export default App;
