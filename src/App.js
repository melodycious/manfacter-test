import React, { useState } from 'react';
/* import Navbar from './components/navbar/Navbar'; */
import Sidebar from './component/sidebar/Sidebar.js';
import Navbar from './component/navbar/Navbar.js';
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 p-6 bg-gray-100">
          {/* Aquí iría el contenido de tu aplicación */}
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
