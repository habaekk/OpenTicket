"use client";

import React, { useEffect, useState } from "react";
import { fetchSchedules } from "../services/scheduleService";
import ScheduleCard from "../components/ScheduleCard";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const data = await fetchSchedules();
        setSchedules(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getSchedules();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>스케줄을 불러오는 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>스케줄을 불러오는데 실패했습니다.</p>
      </div>
    );
  }

  return (
    <div>
    <HeroSection ></HeroSection>

    {/* Main Content */}
    <div className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">다가오는 티켓 일정</h1>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {schedules.map((schedule) => (
          <ScheduleCard key={schedule._id} schedule={schedule} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
