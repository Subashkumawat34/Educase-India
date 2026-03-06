export default function Button({ children, variant = 'primary', className = '', ...props }) {
    const baseStyle = {
        width: '100%',
        padding: '16px',
        borderRadius: '10px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'opacity 0.2s',
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--primary-purple)',
            color: 'white',
        },
        secondary: {
            backgroundColor: 'var(--secondary-purple)',
            color: 'var(--text-dark)',
        },
        disabled: {
            backgroundColor: 'var(--border-color)',
            color: 'white',
            cursor: 'not-allowed'
        }
    };

    return (
        <button
            style={{ ...baseStyle, ...variants[variant] }}
            className={className}
            disabled={variant === 'disabled'}
            {...props}
        >
            {children}
        </button>
    );
}
