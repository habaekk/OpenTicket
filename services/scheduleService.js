// services/scheduleService.js
import { dummySchedules } from '../data/dummySchedules';

export const fetchSchedules = async () => {
    try {
      // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      // if (!response.ok) {
      //   throw new Error('Failed to fetch schedules');
      // }
      // const data = await response.json();
      // return data;

      return dummySchedules;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  