
import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-16">
      <div className="animate-fade-in">
        <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 mb-6 animate-scale-in">
          📚 Next Read
        </h1>
        <div className="relative">
          <p className="text-xl text-gray-600 max-w-lg mx-auto leading-relaxed animate-fade-in">
            Overwhelmed by your TBR? Let us pick your{' '}
            <span className="relative">
              <span className="text-blue-600 font-semibold">next book</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></span>
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
