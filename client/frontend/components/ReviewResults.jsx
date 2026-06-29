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
        <p className="text-5xl"></p>
        <p className="text-lg font-medium">Nessuna review ancora</p>
        <p className="text-sm">Incolla il tuo codice e clicca Analizza</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col gap-4 overflow-y-auto max-h-screen pr-1">
        {/* Score + Summary */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-white">Quality Score</h2>
            <ScoreBadge score={review.qualityScore} />
          </div>
          <p className="text-gray-400 text-sm">{review.summary}</p>
        </div>

        {/* Bugs */}
        <ReviewSection
          title="Bug trovati"
          emoji="🐛"
          items={review.bugs}
          renderItem={(item) => (
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.severity === "critical"
                      ? "bg-red-900 text-red-300"
                      : item.severity === "warning"
                        ? "bg-yellow-900 text-yellow-300"
                        : "bg-blue-900 text-blue-300"
                  }`}
                >
                  {item.severity}
                </span>
                {item.line !== "N/A" && (
                  <span className="text-gray-500 text-xs">
                    riga {item.line}
                  </span>
                )}
              </div>
              <p className="text-gray-300 text-sm">{item.description}</p>
              <p className="text-green-400 text-xs">
                {"✅"} {item.fix}
              </p>
            </div>
          )}
        />

        {/* Performance */}
        <ReviewSection
          title="Performance"
          emoji="⚡"
          items={review.performance}
          renderItem={(item) => (
            <div className="flex flex-col gap-1">
              <p className="text-gray-300 text-sm">{item.description}</p>
              <p className="text-green-400 text-xs">
                {"✅"} {item.fix}
              </p>
            </div>
          )}
        />

        {/* Best Practices */}
        <ReviewSection
          title="Best Practices"
          emoji="📋"
          items={review.bestPractices}
          renderItem={(item) => (
            <div className="flex flex-col gap-1">
              <p className="text-gray-300 text-sm">{item.description}</p>
              <p className="text-green-400 text-xs">
                {"✅"} {item.fix}
              </p>
            </div>
          )}
        />

        {/* Refactoring */}
        <ReviewSection
          title="Suggerimenti refactoring"
          emoji="🔧"
          items={review.refactoring}
          renderItem={(item) => (
            <div className="flex flex-col gap-1">
              <p className="text-gray-300 text-sm">{item.description}</p>
              <pre className="bg-gray-800 text-indigo-300 text-xs p-2 rounded-lg overflow-x-auto mt-1">
                {item.example}
              </pre>
            </div>
          )}
        />

        {/* Positives */}
        <ReviewSection
          title="Punti positivi"
          items={review.positives}
          renderItem={(item) => (
            <p className="text-gray-300 text-sm">
              {"✅"} {item}
            </p>
          )}
        />
      </div>
    </>
  );
};

export default ReviewResults;
