import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Input = React.forwardRef(({ label, error, className, ...props }, ref) => {
    return (
        <div className="w-full">
            {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <input
                ref={ref}
                className={twMerge(
                    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50 disabled:bg-gray-100",
                    error ? "border-red-500 focus:ring-red-200" : "border-gray-300",
                    className
                )}
                {...props}
            />
            {error && <span className="text-sm text-red-500 mt-1 block">{error}</span>}
        </div>
    );
});

Input.displayName = 'Input';
export default Input;
