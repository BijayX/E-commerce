import React, { useState } from 'react';
import { Globe, Moon, Bell, Lock, Mail, Monitor } from 'lucide-react';

// Custom Toggle Switch Component
const Toggle: React.FC<{
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}> = ({ enabled, onChange }) => (
  <button
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${
      enabled ? 'bg-green-500' : 'bg-gray-200'
    }`}
    onClick={() => onChange(!enabled)}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

// Custom Select Component
const Select: React.FC<{
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}> = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between items-center w-32 px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        {options.find(opt => opt.value === value)?.label}
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option.value}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface SettingItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  icon,
  children
}) => (
  <div className="flex items-start sm:items-center justify-between py-4 border-b border-gray-100 last:border-0">
    <div className="flex gap-4">
      {icon && (
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100/80">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-base font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <div className="ml-4 flex-shrink-0">{children}</div>
  </div>
);

const Settings: React.FC = () => {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('english');
  const [twoFactor, setTwoFactor] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [desktopNotifications, setDesktopNotifications] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <div className="">
      <div className="">
        <SettingItem
          icon={<Moon size={20} className="text-gray-600" />}
          title="Theme"
          description="Customize how your theme looks on your device"
        >
          <Select
            value={theme}
            onChange={setTheme}
            options={[
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
              { value: 'system', label: 'System' }
            ]}
          />
        </SettingItem>

        <SettingItem
          icon={<Globe size={20} className="text-gray-600" />}
          title="Language"
          description="Select your language"
        >
          <Select
            value={language}
            onChange={setLanguage}
            options={[
              { value: 'english', label: 'English' },
              { value: 'spanish', label: 'Spanish' },
              { value: 'french', label: 'French' }
            ]}
          />
        </SettingItem>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h2>
        
        <SettingItem
          icon={<Lock size={20} className="text-gray-600" />}
          title="Two-factor Authentication"
          description="Keep your account secure by enabling 2FA via mail"
        >
          <Toggle enabled={twoFactor} onChange={setTwoFactor} />
        </SettingItem>

        <SettingItem
          icon={<Bell size={20} className="text-gray-600" />}
          title="Push Notifications"
          description="Receive push notifications"
        >
          <Toggle enabled={pushNotifications} onChange={setPushNotifications} />
        </SettingItem>

        <SettingItem
          icon={<Monitor size={20} className="text-gray-600" />}
          title="Desktop Notifications"
          description="Receive push notifications in desktop"
        >
          <Toggle enabled={desktopNotifications} onChange={setDesktopNotifications} />
        </SettingItem>

        <SettingItem
          icon={<Mail size={20} className="text-gray-600" />}
          title="Email Notifications"
          description="Receive email notifications"
        >
          <Toggle enabled={emailNotifications} onChange={setEmailNotifications} />
        </SettingItem>
      </div>
    </div>
  );
};

export default Settings;