import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg',
        secondary: 'bg-secondary hover:bg-secondary-dark text-white shadow-md hover:shadow-lg',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'text-gray-600 hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
