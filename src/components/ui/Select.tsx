import React from 'react';
import cn from 'classnames';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    error?: string;
}

const Select: React.FC<SelectProps> = ({
    className = '',
    error,
    children,
    ...props
}) => {
    return (
        <div className="w-full">
            <select
                className={cn(
                    'w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
                    {
                        'border-red-300 focus:ring-red-500': error,
                    },
                    className
                )}
                {...props}
            >
                {children}
            </select>
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
};

export default Select; 