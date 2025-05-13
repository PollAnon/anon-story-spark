
import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Star, CreditCard, LogOut, ExternalLink } from 'lucide-react';

const Profile = () => {
  return (
    <MainLayout>
      <div className="max-w-md mx-auto px-4 pt-6 pb-20">
        <div className="mb-6">
          <h1 className="text-2xl font-bold gradient-text">Your Profile</h1>
          <p className="text-gray-600">Manage your account and settings</p>
        </div>
        
        {/* User Info */}
        <div className="bg-white rounded-xl p-4 mb-6 shadow-md flex items-center">
          <div className="w-16 h-16 rounded-full bg-gradient-pollanon flex items-center justify-center text-white text-xl font-bold">
            JD
          </div>
          <div className="ml-4">
            <h2 className="font-bold text-lg">Jane Doe</h2>
            <p className="text-gray-500 text-sm">jane.doe@example.com</p>
            <Button variant="link" className="p-0 h-auto text-sm text-pollanon-pink">
              Edit Profile
            </Button>
          </div>
        </div>
        
        {/* Settings */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-medium mb-4">Account Settings</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 mr-3 text-gray-500" />
                  <span>Push Notifications</span>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-3 text-gray-500" />
                  <span>Privacy Mode</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-5 h-5 mr-3 text-gray-500" />
                Connected Accounts
              </Button>
              
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="w-5 h-5 mr-3 text-gray-500" />
                Subscription
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md">
            <h3 className="font-medium mb-4">Support</h3>
            
            <div className="space-y-4">
              <Button variant="ghost" className="w-full justify-start">
                <ExternalLink className="w-5 h-5 mr-3 text-gray-500" />
                Help Center
              </Button>
              
              <Button variant="ghost" className="w-full justify-start">
                <Star className="w-5 h-5 mr-3 text-gray-500" />
                Rate the App
              </Button>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="w-full border-red-300 text-red-500 hover:bg-red-50"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
