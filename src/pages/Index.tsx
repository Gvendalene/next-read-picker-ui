
import React from 'react';
import Header from '@/components/Header';
import UploadSection from '@/components/UploadSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Header />
          <UploadSection />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="fixed top-10 left-10 text-6xl opacity-10 pointer-events-none">
        📖
      </div>
      <div className="fixed bottom-10 right-10 text-6xl opacity-10 pointer-events-none">
        📚
      </div>
      <div className="fixed top-1/2 right-20 text-4xl opacity-10 pointer-events-none">
        ✨
      </div>
    </div>
  );
};

export default Index;
