import React, { useEffect } from "react";
import "./css/nav.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Nav() {
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
    document.querySelectorAll('.darkMode').forEach((element) => {
      element.style.color = isDarkMode ? 'white' : 'black';
      element.style.border = isDarkMode ? '2px solid #7f00ff' : '';
    });
  }, [isDarkMode]);

  return (
    <div className="navigation">
      <div className="btn">
        <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          moonColor="white"
          sunColor="black"
        />
      </div>
    </div>
  );
}
