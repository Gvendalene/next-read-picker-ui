
import React from 'react';
import Header from '@/components/Header';
import UploadSection from '@/components/UploadSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Header />
          <UploadSection />
        </div>
      </div>
      
      {/* Enhanced Decorative Elements with Animation */}
      <div className="fixed top-10 left-10 text-6xl opacity-10 pointer-events-none animate-pulse">
        📖
      </div>
      <div className="fixed bottom-10 right-10 text-6xl opacity-10 pointer-events-none animate-pulse">
        📚
      </div>
      <div className="fixed top-1/2 right-20 text-4xl opacity-10 pointer-events-none animate-bounce">
        ✨
      </div>
      <div className="fixed top-20 right-1/4 text-3xl opacity-5 pointer-events-none animate-pulse">
        📑
      </div>
      <div className="fixed bottom-32 left-20 text-5xl opacity-5 pointer-events-none animate-bounce">
        🎯
      </div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-200 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-indigo-200 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default Index;
