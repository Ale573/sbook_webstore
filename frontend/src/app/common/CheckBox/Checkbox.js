import React from "react";

const CheckBox = props => {
  return (
    <div>
      <input
        className="checkbox"
        type={props.type}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
      />
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
    </div>
  );
};

export default CheckBox;
