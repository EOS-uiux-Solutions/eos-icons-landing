import React from "react";

const Icon = props => {
  const { name, size, color } = props;

  const sizes = {
    small: 16,
    normal: 18,
    medium: 32,
    large: 48
  };

  const style = {
    margin: "10px"
  };

  return (
    <i
      className="eos-icons"
      style={{
        ...style,
        color: color || "black",
        fontSize: sizes[size] || sizes.normal
      }}
    >
      {name}
    </i>
  );
};

export default Icon;
