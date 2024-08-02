import React, { useState } from 'react';
import Sidebar from './component/sidebar/Sidebar.js';
import Navbar from './component/navbar/Navbar.js';
import Dashboard from './component/dashboard/Dashboard.js';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
       <>
       <Navbar  />
       <div className="flex h-screen">
         <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
         <div className="flex-1 flex flex-col">

          <main className="flex-1 p-6 bg-gray-100">
            <h1 className="text-2xl font-bold">
              <Dashboard />
            </h1>
          </main>
        </div>
      </div>
      </>
  );
}

export default App;
