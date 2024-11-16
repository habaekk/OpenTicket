import React from "react";

export default function HeroSection({
  title = "티켓 오픈 스케줄, 한눈에 확인하세요!",
  description = "뮤지컬, 콘서트, 연극 등 다양한 카테고리의 티켓 정보를 제공합니다. 지금 검색하고 알림을 설정해 보세요.",
  buttonText = "지금 검색하기",
  buttonLink = "/search",
  imageSrc = "/hero-image.webp",
  imageAlt = "티켓 이미지",
}) {
  return (
    <div className="bg-green-600 text-white py-16 px-4 max-h-[500px]">
      <div className="container mx-auto flex flex-col items-center text-center md:flex-row md:text-left md:justify-between">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{description}</p>
          <a
            href={buttonLink}
            className="bg-orange-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-orange-400"
          >
            {buttonText}
          </a>
        </div>
        {/* Right Image
        <div className="mt-0 md:mt-0 md:w-1/2 object-cover">
          <img src={imageSrc} alt={imageAlt} className="w-full h-full " />
        </div> */}
      </div>
    </div>
  );
}
