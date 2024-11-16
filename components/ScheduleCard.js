
import React from 'react';

const ScheduleCard = ({ schedule }) => {
  const { siteName, categoryName, eventName, openDate } = schedule;

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold mb-1">{eventName}</h2>
      <p className="text-sm text-gray-500 mb-2">{categoryName}</p>
      <p className="text-sm text-gray-500 mb-4">{siteName}</p>
      <p className="text-gray-800 font-medium">
        티켓오픈: {new Date(openDate).toLocaleString()}
      </p>
    </div>
  );
};

export default ScheduleCard;