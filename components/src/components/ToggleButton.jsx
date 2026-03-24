import { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-wrapper" style={{ margin: '20px 0' }}>
      <strong>Toggle Button (CSS)</strong>
      <div
        className={`toggle-container ${isOn ? 'on' : ''}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div className="toggle-circle"></div>
      </div>
      <span>{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
