import React, { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
    helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        { label, error, className = '', fullWidth = false, helperText, ...props },
        ref
    ) => {
        const textareaClasses = [
            'border rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            error ? 'border-red-500' : 'border-gray-300',
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
                <textarea ref={ref} className={textareaClasses} {...props} />
                {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
                {helperText && !error && (
                    <p className="mt-1 text-sm text-gray-500">{helperText}</p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

export default Textarea; 