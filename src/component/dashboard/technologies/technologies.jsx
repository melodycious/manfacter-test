import React, { useState } from 'react';
import '../technologies/technologies.css';
import man1 from './image/man1.jpg';
import man2 from './image/man2.jpg';
import man3 from './image/man3.jpg';
import man4 from './image/man4.jpg';
import man5 from './image/man5.jpg';
import man6 from './image/man6.jpg';
import { CiCircleInfo } from "react-icons/ci";

const Technologies = () => {
  const technologies = [
    {
      name: 'FDM',
      description: 'Fused Deposition Modeling',
      moreInfo: 'Functional and durable parts. 10-100% solid parts, Medium-high precision. Rapid prototyping or mass production.',
      image: man1
    },
    {
      name: 'SLA',
      description: 'Stereolithography',
      moreInfo: 'More information about SLA',
      image: man2
    },
    {
      name: 'SLS',
      description: 'Selective Laser Sintering',
      moreInfo: 'More information about SLS',
      image: man3
    },
    {
      name: 'DMLS',
      description: 'Direct Metal Laser Sintering',
      moreInfo: 'More information about DMLS',
      image: man4
    },
    {
      name: 'CNC',
      description: 'Machining',
      moreInfo: 'More information about CNC',
      image: man5
    },
    {
      name: 'MJF',
      description: 'HP Multi Jet Fusion',
      moreInfo: 'More information about MJF',
      image: man6
    },
  ];

  const [selectedTech, setSelectedTech] = useState(null);

  return (
    <div>
      <div className="grid technology-container grid-cols-3">
        {technologies.map((tech) => (
          <div key={tech.name} className="technology-card">
            <h3 className="text-xs">{tech.name}</h3>
            <img src={tech.image} alt={tech.name} />
            <p className="text-xs font-normal">{tech.description}</p>
            <button
              className="bg-blue-500 text-white p-1 rounded font-normal"
              onClick={() => setSelectedTech(tech)}
            >
              More information
            </button>
          </div>
        ))}
      </div>
      {selectedTech && (
        <div className="info-box bg-blue-100 p-3 rounded mt-3">
          <div className="flex items-center">
            <div className="me-0"><CiCircleInfo size={24} className="text-blue-600" /></div>
            <div>
            <p className="ml-2 text-gray-500 font-normal tracking-tight">{selectedTech.moreInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Technologies;
