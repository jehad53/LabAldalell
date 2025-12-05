import React from 'react';
import { twMerge } from 'tailwind-merge';

const Select = React.forwardRef(({ label, error, options, className, placeholder, ...props }, ref) => {
    return (
        <div className="w-full">
            {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
            <select
                ref={ref}
                className={twMerge(
                    "w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:opacity-50 disabled:bg-gray-100 bg-white",
                    error ? "border-red-500 focus:ring-red-200" : "border-gray-300",
                    className
                )}
                {...props}
            >
                {placeholder && <option value="">{placeholder}</option>}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <span className="text-sm text-red-500 mt-1 block">{error}</span>}
        </div>
    );
});

Select.displayName = 'Select';
export default Select;
