import React from "react";

const CountState = ({ shouldShow, count }) => {
  return (
    <div>
      {shouldShow && (
        <div>
          <p>
            {count === 0
              ? "The count is zero."
              : count > 0
              ? "The count is positive."
              : "The count is negative."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountState;
