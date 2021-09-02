import React from "react";
import "../styles/EditableSection.css";
import DatePicker from "./DatePicker.js";
import TextField from "./TextField.js";

const EditableSection = ({
  startDate,
  endDate,
  location,
  onStartDateChange,
  onEndDateChange,
  onLocationChange,
}) => {
  return (
    <div className="editable-section">
      <DatePicker
        title="Start Date"
        onChange={onStartDateChange}
        value={startDate}
      />
      <DatePicker title="End Date" onChange={onEndDateChange} value={endDate} />
      <TextField
        title="Location"
        onChange={onLocationChange}
        value={location}
      />
    </div>
  );
};

export default EditableSection;
