import React from "react";

export default function RecommendedTickets({ tickets }) {
  return (
    <div className="py-8 px-4 bg-gray-100">
      {/* 섹션 제목 */}
      <h2 className="text-3xl font-bold mb-6 text-center">추천 티켓</h2>

      {/* 티켓 리스트 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tickets.map((ticket) => (
          <div
            key={ticket._id}
            className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
          >
            {/* 티켓 이미지 */}
            <img
              src={ticket.image || "/default-ticket.jpg"} // 기본 이미지 경로 설정
              alt={ticket.eventName}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            {/* 티켓 정보 */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold">{ticket.eventName}</h3>
              <p className="text-gray-600">카테고리: {ticket.categoryName}</p>
              <p className="text-gray-600">오픈 날짜: {new Date(ticket.openDate).toLocaleString()}</p>
              <a
                href={ticket.link || "#"}
                className="inline-block mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition"
              >
                자세히 보기
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
