import React from "react";

import { AiFillStar } from "react-icons/ai";

const Ratings = (props) => {
  const { rating } = props;
  return (
    <div className="text-xs">
      <div className="flex items-center">
        <AiFillStar className="text-yellow-500" />
        {`${rating.rate}/5 (${rating.count})`}
      </div>
    </div>
  );
};

export default Ratings;
