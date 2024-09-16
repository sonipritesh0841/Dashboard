// src/layouts/DashboardLayout.jsx
import { useState } from 'react';
import { LayoutDashboard, UserCircle, Settings, Bell } from "lucide-react";
import { Input } from '@/components/ui/Input';
import SidebarLink from '@/components/SidebarLink';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
        <div className="flex items-center space-x-2 px-4">
          <LayoutDashboard size={24} />
          <span className="text-2xl font-extrabold">Raktsetu</span>
        </div>
        <nav className="space-y-1">
          <SidebarLink icon={LayoutDashboard} label="Dashboard" active />
          {/* Add more links here */}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center space-x-2">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 md:hidden">
                <LayoutDashboard size={24} />
              </button>
              <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Input type="search" placeholder="Search here" className="w-64" />
              <UserCircle size={24} />
              <Settings size={24} />
              <Bell size={24} />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
