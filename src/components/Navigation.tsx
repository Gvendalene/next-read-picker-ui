
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Shuffle, Home } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            📚 Next Read
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button 
                variant={isActive('/') ? 'default' : 'ghost'}
                className="flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            
            <Link to="/shelf">
              <Button 
                variant={isActive('/shelf') ? 'default' : 'ghost'}
                className="flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                My Shelf
              </Button>
            </Link>

            {/* Future: Add more navigation items here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
