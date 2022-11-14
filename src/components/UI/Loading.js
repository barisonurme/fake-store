import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-4 border-zinc-700 border-b-white h-6 w-6 rounded-full mr-2 mix-blend-screen animate-spin"></div>
      Sending
    </div>
  );
};

export default Loading;