import React, { useState } from 'react';

const Colors = ({ colors }) => {

    const [showMore, setShowMore] = useState(false);

    const toggleMoreColors = () => {
      setShowMore(!showMore);
    };

  return (
    < div className="text-sm font-bold mb-4 text-blue-600">Colors
        <ul className="text-black">
          {colors.map((color) => (
              <li key={color.name} className="color-item flex items-center px-0 pb-6">
                  <div className={`w-6 h-6 rounded-full ${color.hex}`}></div>
                  <span className="text-xs pl-6">{color.name}</span>
              </li>
          ))}
      </ul>
      {showMore && (
        <ul className="text-black more-colors">
          <li className="color-item flex items-center px-0 pb-6">
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
            <span className="text-xs pl-6">Purple</span>
          </li>
          <li className="color-item flex items-center px-0 pb-6">
            <div className="w-6 h-6 rounded-full bg-pink-500"></div>
            <span className="text-xs pl-6">Pink</span>
          </li>
        </ul>
      )}
        <div className="text-right">
        <button className="text-xs font-normal text-gray-500" onClick={toggleMoreColors}>
            {showMore ? 'Less colors' : 'More colors'}
        </button>
        </div>
    </div>
  );
};

export default Colors;