// components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center text-gray-600">
      <p>&copy; {new Date().getFullYear()} 티켓 스케줄 뷰어</p>
    </footer>
  );
};

export default Footer;
