import React from 'react';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

const Button = ({ children, className, active = false, ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'cursor-pointer px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded transition-colors disabled:cursor-default',
        {
          'bg-gray-200': active,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
