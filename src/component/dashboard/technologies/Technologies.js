import React from 'react';
import '../technologies/technologies.css';
import man1 from './image/man1.jpg';
import man2 from './image/man2.jpg';
import man3 from './image/man3.jpg';
import man4 from './image/man4.jpg';
import man5 from './image/man5.jpg';
import man6 from './image/man6.jpg';


const Technologies = () => {
  const technologies = [
    {
      name: 'FDM',
      description: 'Fused Deposition Modeling',
      moreInfo: 'More information',
      image: man1
    },
    {
        name: 'SLA',
        description: 'Stereolithography',
        moreInfo: 'More information',
        image: man2
      },
      {
        name: 'SLS',
        description: 'Selective Laser Sintering',
        moreInfo: 'More information',
        image: man3
      },
      {
        name: 'DMLS',
        description: 'Direct Metal Laser Sintering',
        moreInfo: 'More information',
        image: man4
      },
      {
        name: 'CNC',
        description: 'Machining',
        moreInfo: 'More information',
        image: man5
      },
      {
        name: 'MJF',
        description: 'HP Multi Jet Fusion',
        moreInfo: 'More information',
        image: man6
      },
  ];

  return (
    <div className="grid gap-4 col-span-4">
    <div className="technology-container gap-2 place-content-start">
      {technologies.map((tech) => (
        <div key={tech.name} className="technology-card">
          <h3 className="text-xs">{tech.name}</h3>
          <img src={tech.image} alt={tech.name} />
          <p className="text-xs font-normal">{tech.description}</p>
          <button className="bg-blue-500 text-white p-2 rounded font-normal">{tech.moreInfo}</button>
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default Technologies;