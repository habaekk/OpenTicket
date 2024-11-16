// pages/index.js

import React, { useEffect, useState } from 'react';
import { fetchSchedules } from '../services/scheduleService';
import ScheduleCard from '../components/ScheduleCard';

const Home = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const getSchedules = async () => {
      const data = await fetchSchedules();
      setSchedules(data);
    };
    getSchedules();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">다가오는 티켓 일정</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {schedules.map((schedule) => (
          <ScheduleCard schedule={schedule} />
        ))}
      </div>
    </div>
  );
};

export default Home;
