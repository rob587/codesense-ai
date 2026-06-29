import React from "react";

const ReviewSection = ({ title, emoji, items, renderItem }) => {
  if (!items || items.length === 0) return null;
  return (
    <>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
        <h3 className="font-semibold text-white mb-4">
          {emoji} {title}
        </h3>
        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-3">
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
