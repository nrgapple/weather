import { useCallback, useEffect, useState } from "react";
import { weatherTypes } from "../util/types";

export const useWeatherData = (url, fetcher) => {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState("");

  const getWeatherData = useCallback(async () => {
    const { data: weatherData, error: fetchError } = await fetcher(url);
    console.log(fetchError);
    if (fetchError) {
      setError(fetchError);
      setWeatherData([]);
      return;
    }
    const weatherObject = removeMissingData(weatherData).map(
      ({ date, town, weather }) => ({
        date,
        weather,
        location: town,
      })
    );
    setError(null);
    setWeatherData(weatherObject);
  }, [url, fetcher]);

  useEffect(() => {
    console.log("here");
    getWeatherData();
  }, [url, getWeatherData]);

  const removeMissingData = (data) =>
    data.filter(
      ({ date, town, weather }) =>
        town && weather && weatherTypes.includes(weather) && date
    );

  return [weatherData, error];
};
