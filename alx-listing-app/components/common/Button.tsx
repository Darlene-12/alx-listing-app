import React from 'react';
import { ButtonProps } from '../../interfaces';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../../constants';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = BUTTON_VARIANTS[variant];
  const sizeClasses = BUTTON_SIZES[size];
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;