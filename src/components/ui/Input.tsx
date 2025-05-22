import React, { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            className = '',
            fullWidth = false,
            helperText,
            leftIcon,
            rightIcon,
            ...props
        },
        ref
    ) => {
        const inputClasses = [
            'border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            error ? 'border-red-500' : 'border-gray-300',
            leftIcon ? 'pl-10' : '',
            rightIcon ? 'pr-10' : '',
            fullWidth ? 'w-full' : '',
            props.disabled ? 'bg-gray-100 text-gray-500 cursor-not-allowed' : '',
            className,
        ].join(' ');

        const containerClasses = [
            fullWidth ? 'w-full' : '',
            'mb-4',
        ].join(' ');

        return (
            <div className={containerClasses}>
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            {leftIcon}
                        </div>
                    )}
                    <input ref={ref} className={inputClasses} {...props} />
                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                </div>
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                {helperText && !error && (
                    <p className="mt-1 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input; 