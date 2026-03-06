export default function Button({ children, variant = 'primary', className = '', style = {}, ...props }) {
    const baseStyle = {
        width: '100%',
        padding: '16px',
        borderRadius: '6px',
        border: 'none',
        fontSize: '16px',
        fontWeight: '500',  // Rubik Medium
        cursor: 'pointer',
        transition: 'opacity 0.2s',
        ...style
    };

    const variants = {
        primary: {
            backgroundColor: 'var(--primary-purple)',
            color: 'white',
        },
        secondary: {
            backgroundColor: 'rgba(108, 37, 255, 0.29)', // #6C25FF4B
            color: 'var(--text-dark)',
        },
        disabled: {
            backgroundColor: 'var(--border-color)', // #CBCBCB grey default state
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
