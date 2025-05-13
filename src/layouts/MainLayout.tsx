
import React from 'react';
import { Navigation } from '../components/Navigation';

interface MainLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  showNavigation = true 
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pb-16">
        {children}
      </main>
      {showNavigation && <Navigation />}
    </div>
  );
};
