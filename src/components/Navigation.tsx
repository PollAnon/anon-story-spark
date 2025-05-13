
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Plus, Inbox, User, Settings } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/home', icon: Home, label: 'Home' },
    { path: '/create', icon: Plus, label: 'Create' },
    { path: '/inbox', icon: Inbox, label: 'Inbox' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around items-center h-16 bg-white border-t border-gray-200 z-10">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center justify-center w-full h-full ${
            isActive(item.path)
              ? 'text-pollanon-pink'
              : 'text-gray-500'
          }`}
        >
          <item.icon className={`h-5 w-5 mb-1 ${isActive(item.path) ? 'fill-current' : ''}`} />
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};
