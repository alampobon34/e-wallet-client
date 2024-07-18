import React from "react";

const Loader = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <span className="loading loading-dots loading-md"></span>
    </div>
  );
};

export default Loader;
