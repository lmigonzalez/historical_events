import React from "react";
import { useHistory } from "react-router-dom";

const SubHeader = (props) => {
  const history = useHistory();
  const { newDate, setNewDate } = props;

  const handleChange = (e) => {
    setNewDate(e.target.value);
    history.push("/search");
  };

  return (
    <div className="sub-header">
      <div className="sub-content">
        <h3>Search:</h3>
        <input
          className="date-search"
          type="date"
          value={newDate}
          onChange={handleChange}
          placeholder="Search"
          size="5"
        />
      </div>
    </div>
  );
};

export default SubHeader;
