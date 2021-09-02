import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import "../styles/DisplaySection.css";

const DisplaySection = ({ data }) => {
  return (
    <div className="display-section">
      {data.map((item, i) => (
        <WeatherCard
          key={i}
          date={item.date}
          weather={item.weather}
          location={item.location}
        />
      ))}
    </div>
  );
};

export default DisplaySection;
