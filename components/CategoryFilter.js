import React, { useState } from "react";

const categories = ["뮤지컬", "콘서트", "연극", "전시", "클래식"]; // 고정된 카테고리

export default function CategoryFilter({ schedules }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]); // 첫 번째 카테고리를 기본 선택

  return (
    <div className="py-8 px-4">
      {/* 타이틀 */}
      <h1 className="text-2xl font-bold mb-6">카테고리별 티켓 일정</h1>

      {/* 카테고리 버튼 섹션 */}
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full font-bold ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-400 hover:text-white transition`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 선택된 카테고리의 내용 */}
      <div className="mt-6">
        <ul className="space-y-4">
          {schedules
            .filter((schedule) => schedule.categoryName === selectedCategory)
            .map((schedule) => (
              <li
                key={schedule._id}
                className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{schedule.eventName}</h3>
                <p className="text-gray-600">사이트: {schedule.siteName}</p>
                <p className="text-gray-600">오픈 날짜: {new Date(schedule.openDate).toLocaleString()}</p>
              </li>
            ))}
          {/* 선택된 카테고리에 일정이 없을 경우 */}
          {schedules.filter((schedule) => schedule.categoryName === selectedCategory).length === 0 && (
            <li className="text-gray-600">해당 카테고리에 일정이 없습니다.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
