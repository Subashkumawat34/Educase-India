import { useState } from 'react';

export default function InputField({ label, type = 'text', required = false, className = '', ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className={`input-container ${className}`} style={{ position: 'relative', marginBottom: '20px', width: '100%' }}>
            <label style={{
                position: 'absolute',
                top: (isFocused || hasValue) ? '-8px' : '16px',
                left: '12px',
                fontSize: (isFocused || hasValue) ? '12px' : '15px',
                color: isFocused ? 'var(--primary-purple)' : 'var(--text-dark)',
                backgroundColor: 'var(--bg-color)',
                padding: '0 4px',
                transition: 'all 0.2s ease',
                pointerEvents: 'none',
                zIndex: 1,
                fontWeight: isFocused ? '500' : '400'
            }}>
                {label} {required && <span style={{ color: 'red' }}>*</span>}
            </label>
            <input
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => {
                    setIsFocused(false);
                    setHasValue(!!e.target.value);
                }}
                onChange={(e) => setHasValue(!!e.target.value)}
                style={{
                    width: '100%',
                    padding: '16px 16px',
                    border: `1px solid ${isFocused ? 'var(--primary-purple)' : 'var(--border-color)'}`,
                    borderRadius: '6px',
                    outline: 'none',
                    fontSize: '15px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-dark)'
                }}
                {...props}
            />
        </div>
    );
}
