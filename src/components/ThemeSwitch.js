import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeSwitch() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        cursor: 'pointer',
        backgroundColor: isDarkMode ? '#333' : '#fff',
        border: `2px solid ${isDarkMode ? '#fff' : '#333'}`,
        borderRadius: '20px',
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}
    >
      {isDarkMode ? (
        <FaSun style={{ color: '#fff', fontSize: '16px' }} />
      ) : (
        <FaMoon style={{ color: '#333', fontSize: '16px' }} />
      )}
    </div>
  );
}

export default ThemeSwitch;
