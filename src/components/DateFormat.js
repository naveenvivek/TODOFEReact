import React, { useState } from "react";



const DateTime = (props) => {
  const [lastUpdatedTime, setLastUpdatedTime] = useState(props.data);

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


  return (
    <div>

      {new Date(lastUpdatedTime).getDate()}
      -
      {new Date(lastUpdatedTime).getMonth() + 1}
      -
      {new Date(lastUpdatedTime).getFullYear()}
      {' '}
      {formatAMPM(new Date(lastUpdatedTime))}
    </div>
  );
};


export default DateTime;