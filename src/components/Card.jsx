import React from "react";

const Card = ({ toolName, url }) => {
  return (
    <div className="card">
      <img src={url} alt={toolName} className="rounded-full w-16 tool-image" />
      <h3>{toolName}</h3>
    </div>
  );
};

export default Card;
