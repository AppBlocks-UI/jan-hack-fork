import React from 'react';
import { Navbar } from './Navbar';
// import { Footer } from './Footer';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 min-w-[320px] max-w-[640px] mx-auto">
      <Navbar />
      <main className="container mx-auto px-10 py-8">
        {children} 
      </main>
      {/* <Footer /> */}
    </div>
  );
};