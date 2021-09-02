import { useEffect, useState } from "react";
import { weatherFilter } from "../util/weatherFilter";

export const useFilter = (startDate, endDate, location, data) => {
  const [weatherArr, setWeatherArr] = useState([]);

  useEffect(() => {
    if (data) {
      setWeatherArr(weatherFilter(startDate, endDate, location, data));
    }
  }, [data, startDate, endDate, location]);

  return weatherArr;
};
