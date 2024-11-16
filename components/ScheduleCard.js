// components/ScheduleCard.js

import React from 'react';

const ScheduleCard = ({ schedule }) => {
  const { siteName, categoryName, eventName, openDate } = schedule;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{eventName}</h2>
      <p className="text-gray-600">{categoryName}</p>
      <p className="text-gray-600">{siteName}</p>
      <p className="text-gray-800 font-medium mt-2">
        {new Date(openDate).toLocaleString()}
      </p>
    </div>
  );
};

export default ScheduleCard;
