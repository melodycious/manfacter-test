import React, { useState } from 'react';
import Sidebar from './component/sidebar/sidebar.jsx';
import Navbar from './component/navbar/navbar.jsx';
import Dashboard from './component/dashboard/dashboard.jsx';
import Chatbot from './component/chatbot/chatbot.jsx';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
       <>
       <Navbar  />
       <Chatbot />
       <div className="flex h-screen">
         <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
         <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6 ">
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
