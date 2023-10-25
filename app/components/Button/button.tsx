import React from 'react';
import styles from './button.module.css';

// Define the interface for ButtonProps
interface ButtonProps {
  content: string;
  onClick?: () => void;
  disabled?: boolean;
}

// Create the Button functional component
const Button: React.FC<ButtonProps> = ({ content, onClick, disabled }) => {
  // function to handle the button click
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  // Construct JSX for button
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabledButton : ''}`}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default Button;