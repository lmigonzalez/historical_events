import React from "react";
import { useHistory } from "react-router-dom";
import {InputGroup, FormControl} from 'react-bootstrap';

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
        {/* <h3>Search:</h3>
        <input
          className="date-search"
          type="date"
          value={newDate}
          onChange={handleChange}
          placeholder="Search"
          size="5"
        /> */}
        <InputGroup>
        <h3>Search: </h3>
          <FormControl
            placeholder="Username"
            type="date"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </div>
    </div>
  );
};

export default SubHeader;
