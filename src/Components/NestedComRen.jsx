import React, { useState } from "react";
import "./NestedCompRen.css";
const NestedComRen = ({ data }) => {
  const [trackvalue, setTrackvalue] = useState([data]);
  const [result, setResult] = useState([]);
  const handleClick = (e) => {
    setTrackvalue([...trackvalue, e.children]);
    setResult([...result, e.name]);
  };

  const handleBack = () => {
    let val = [...trackvalue];
    val.splice(trackvalue.length - 1, 1);
    setTrackvalue(val);

    // remove value added on back option pressed
    let res = [...result];
    res.splice(result.length - 1, 1);
    setResult(res);
  };
  const handleReset = () => {
    setTrackvalue([data]);
    setResult([]);
  };
  const handleSubmit = () => {
    console.log(result);
    setTrackvalue([data]);
    setResult([]);
  };
  return (
    <div className="container">
      {result.length > 0 && (
        <div className="results">
          <ul>
            {result.map((item, index) => {
              return (
                <div key={index} style={{ marginLeft: `${index * 10}px` }}>
                  <i class="fa fa-caret-right"></i>
                  <li>{item}</li>
                </div>
              );
            })}
          </ul>
        </div>
      )}

      {trackvalue[trackvalue.length - 1].length > 0 ? (
        trackvalue[trackvalue.length - 1].map((item, index) => {
          return (
            <button
              key={index}
              className="options"
              onClick={() => handleClick(item)}
            >
              {item.name}
            </button>
          );
        })
      ) : (
        <p>Shall we submit your options</p>
      )}
      <div className="actionitems">
        <button
          onClick={() => handleBack()}
          disabled={trackvalue.length <= 1 ? true : false}
        >
          Back
        </button>
        <button
          onClick={() => handleReset()}
          disabled={trackvalue.length <= 1 ? true : false}
        >
          Reset
        </button>
        {trackvalue[trackvalue.length - 1].length === 0 && (
          <button onClick={() => handleSubmit()}>Submit</button>
        )}
      </div>
    </div>
  );
};
export default NestedComRen;
