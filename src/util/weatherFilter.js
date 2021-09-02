export const weatherFilter = (startDate, endDate, location, data) => {
  if (!data) return [];

  return data
    .filter((data) => {
      if (startDate) {
        const condition = new Date(data.date) > new Date(startDate);
        return condition;
      }
      return true;
    })
    .filter((data) => {
      if (endDate) {
        return new Date(data.date) < new Date(endDate);
      }
      return true;
    })
    .filter((data) => {
      if (location) {
        return data.location.toLowerCase().includes(location.toLowerCase());
      }
      return true;
    });
};
