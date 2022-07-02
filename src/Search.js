import React, { useState } from "react";
import "./Search.css";
import {DateRangePicker} from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


function Search(){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate:startDate,
        endDate: endDate,
        key: "selection",
    };
    function handleSelect(range){
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }

    return(
        <div className="search">
            <DateRangePicker 
            ranges={[selectionRange]} 
            onChange={handleSelect}
            />
        </div>
    )
}

export default Search
