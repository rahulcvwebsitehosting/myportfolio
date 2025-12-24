
import React, { useState } from 'react';

const ToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button 
      onClick={() => setIsOn(!isOn)}
      className={`relative w-24 h-12 rounded-full border-2 border-black transition-colors duration-300 flex items-center p-1 ${isOn ? 'bg-black' : 'bg-transparent'}`}
    >
      <div className={`w-8 h-8 rounded-full border-2 border-black transition-transform duration-300 ${isOn ? 'translate-x-12 bg-[#F1F0D1]' : 'translate-x-0 bg-black'}`} />
    </button>
  );
};

export default ToggleSwitch;
