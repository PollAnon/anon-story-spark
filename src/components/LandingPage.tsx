
import React from 'react';
import { AuthForm } from './AuthForm';

export const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 py-12 bg-gradient-to-br from-pollanon-pink to-pollanon-orange">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold gradient-text mb-2">PollAnon</h1>
            <p className="text-gray-600">Create anonymous polls and share them with your friends!</p>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-6 mb-8">
            <div className="flex space-x-4">
              <div className="animate-float w-16 h-16 bg-pollanon-pink rounded-full flex items-center justify-center text-2xl">
                🤔
              </div>
              <div className="animate-float animation-delay-300 w-16 h-16 bg-pollanon-orange rounded-full flex items-center justify-center text-2xl">
                📊
              </div>
              <div className="animate-float animation-delay-600 w-16 h-16 bg-pollanon-blue rounded-full flex items-center justify-center text-2xl">
                🔒
              </div>
            </div>
          </div>
          
          {/* Auth Form */}
          <AuthForm />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>© 2023 PollAnon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
