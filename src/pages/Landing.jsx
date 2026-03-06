import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '24px',
            justifyContent: 'flex-end', /* Pushes content to the bottom as seen in design */
            paddingBottom: '40px'
        }}>

            <div style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '500',
                    marginBottom: '16px',
                    color: 'var(--text-dark)'
                }}>Welcome to PopX</h1>

                <p style={{
                    fontSize: '18px',
                    color: 'var(--text-dark)',
                    opacity: 0.7,
                    lineHeight: '1.4',
                    maxWidth: '280px'
                }}>
                    Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Button variant="primary" onClick={() => navigate('/signup')}>
                    Create Account
                </Button>
                <Button variant="secondary" onClick={() => navigate('/login')}>
                    Already Registered? Login
                </Button>
            </div>

        </div>
    );
}
