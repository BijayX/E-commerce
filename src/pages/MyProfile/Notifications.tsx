import React from 'react';
import { Package, Lock, User } from 'lucide-react';
import { format } from 'date-fns';
import huba2 from '../../assets/huba2.png'

// Types
interface Notification {
  id: string;
  type: 'profile' | 'order' | 'delivery' | 'feedback' | 'password';
  title: string;
  description: string;
  timestamp: Date;
  userImage?: string;
}

// Helper function for relative time
const getRelativeTime = (date: Date): string => {
  const now = new Date();
  const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
  
  if (diffInHours < 1) {
    return 'Just Now';
  } else if (diffInHours < 24) {
    return format(date, 'hh:mm a');
  } else {
    return 'Yesterday';
  }
};

// Notification Icon Component
const NotificationIcon: React.FC<{ type: Notification['type'] }> = ({ type }) => {
  const iconClasses = "w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center";
  
  switch (type) {
    case 'profile':
      return (
        <div className={iconClasses}>
          <User size={20} className="text-gray-600" />
        </div>
      );
    case 'order':
    case 'delivery':
      return (
        <div className={iconClasses}>
          <Package size={20} className="text-gray-600" />
        </div>
      );
    case 'password':
      return (
        <div className={iconClasses}>
          <Lock size={20} className="text-gray-600" />
        </div>
      );
    case 'feedback':
      return (
        <img 
          src={huba2} 
          alt="User" 
          className="w-10 h-10 rounded-full object-cover"
        />
      );
    default:
      return null;
  }
};

// Individual Notification Component
const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
  <div className="flex items-start gap-3 py-4">
    <NotificationIcon type={notification.type} />
    
    <div className="flex-1">
      <h3 className="text-gray-900 font-medium mb-1">
        {notification.title}
      </h3>
      <p className="text-gray-500 text-sm">
        {notification.type === 'feedback' ? (
          <span className="italic">"{notification.description}"</span>
        ) : (
          notification.description
        )}
      </p>
    </div>
    
    <span className="text-gray-500 text-sm whitespace-nowrap">
      {getRelativeTime(notification.timestamp)}
    </span>
  </div>
);

// Main Notifications Component
const Notifications: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'profile',
      title: 'Profile Update',
      description: 'You just update your profile picture',
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'order',
      title: 'Your order placed successfully',
      description: 'You place a new order',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    },
    {
      id: '3',
      type: 'delivery',
      title: 'Order delivered',
      description: 'Your order has been delivered successfully',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    },
    {
      id: '4',
      type: 'feedback',
      title: 'You share your feedback',
      description: 'It was an amazing experience with your company',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
    },
    {
      id: '5',
      type: 'password',
      title: 'Password Update successfully',
      description: 'Your password has been updated successfully',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="divide-y divide-gray-100">
        {notifications.map((notification) => (
          <NotificationItem 
            key={notification.id} 
            notification={notification} 
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;