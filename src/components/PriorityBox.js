import React from "react";

function Book(props) {
  const renderPriority = () => {
    if (props.priority === 1)
      return (
        <div className="priorityContainer">
          <div className="priorityBox pB1Active"></div>
          <div className="priorityBox "></div>
          <div className="priorityBox "></div>
        </div>
      );
    if (props.priority === 2)
      return (
        <div className="priorityContainer">
          <div className="priorityBox pB1Active"></div>
          <div className="priorityBox pB2Active"></div>
          <div className="priorityBox "></div>
        </div>
      );
    if (props.priority === 3)
      return (
        <div className="priorityContainer">
          <div className="priorityBox pB1Active"></div>
          <div className="priorityBox pB2Active"></div>
          <div className="priorityBox pB3Active"></div>
        </div>
      );
  };

  return renderPriority();
}

export default Book;
