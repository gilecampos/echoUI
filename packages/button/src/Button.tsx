import React from 'react';
import './button.css';

export interface ButtonProps {
  type?: string;
  style?: object;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type = 'primary',
  size = 'medium',
  style,
  className,
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${size}`, `button--${type}`, `${className}`].join(' ')}
      style={style}
      {...props}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button
