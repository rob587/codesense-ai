import React from "react";
import ScoreBadge from "./ScoreBadge";
import ReviewSection from "./ReviewSection";

const ReviewResults = (review, loading) => {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-500">
        <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />
        <p>Analisi in corso...</p>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-600">
        <p className="text-5xl">{"🤖"}</p>
        <p className="text-lg font-medium">Nessuna review ancora</p>
        <p className="text-sm">Incolla il tuo codice e clicca Analizza</p>
      </div>
    );
  }

  return <></>;
};

export default ReviewResults;
