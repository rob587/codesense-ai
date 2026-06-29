import React from "react";

const ScoreBadge = ({ score }) => {
  const getColor = () => {
    if (score >= 8) return "bg-green-900 text-green-300";
    if (score >= 5) return "bg-yellow-900 text-yellow-300";
    return "bg-red-900 text-red-300";
  };
  return (
    <>
      <span className={`text-2xl font-bold px-4 py-1 rounded-xl ${getColor()}`}>
        {score}/10
      </span>
    </>
  );
};

export default ScoreBadge;
