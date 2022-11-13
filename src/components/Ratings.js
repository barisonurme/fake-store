import React from "react";

const Ratings = (props) => {
  const { rating } = props;
  return <div className="text-xs">{`Ratings: ${rating.rate}/5 (${rating.count})`}</div>;
};

export default Ratings;
