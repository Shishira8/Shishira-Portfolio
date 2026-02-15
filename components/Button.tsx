
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  // Support React.MouseEvent to allow event manipulation like preventDefault()
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, onClick, className = "" }) => {
  const baseStyles = "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-200 rounded-md";
  const variants = {
    primary: "bg-zinc-100 text-zinc-950 hover:bg-white shadow-sm",
    secondary: "bg-zinc-900 text-zinc-100 border border-zinc-800 hover:bg-zinc-800",
    ghost: "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  // Fix: Pass onClick to anchor tag to support custom click behaviors (e.g., smooth scrolling)
  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedStyles}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};
