import { useState } from 'react';

export default function InputField({ label, type = 'text', required = false, className = '', ...props }) {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className={`input-container ${className}`} style={{ position: 'relative', marginBottom: '20px', width: '100%' }}>
            <label style={{
                position: 'absolute',
                top: '-7px', /* Always float on the top border in Adobe XD design */
                left: '12px',
                fontSize: '13px',
                color: 'var(--primary-purple)', /* Label is always purple */
                backgroundColor: 'var(--bg-color)', /* Match the new background */
                padding: '0 4px',
                zIndex: 1,
                fontWeight: '500' /* Rubik Medium for floating labels */
            }}>
                {label} {required && <span style={{ color: 'var(--error-color)' }}>*</span>}
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
                    padding: '16px 14px',
                    border: `1px solid ${isFocused ? 'var(--primary-purple)' : 'var(--border-color)'}`,
                    borderRadius: '6px',
                    outline: 'none',
                    fontSize: '14px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-dark)'
                }}
                {...props}
            />
        </div>
    );
}
