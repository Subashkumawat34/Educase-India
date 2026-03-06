import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '30px', /* Closer to the padding seen in XD */
            justifyContent: 'flex-end',
            paddingBottom: '40px'
        }}>

            <div style={{ marginBottom: 'auto', marginTop: 'auto' }}>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '500', // Rubik Medium
                    marginBottom: '10px',
                    color: 'var(--text-dark)'
                }}>Welcome to PopX</h1>

                <p style={{
                    fontSize: '18px',
                    color: 'var(--text-dark)',
                    opacity: 0.6, // Lighter opacity to match design
                    lineHeight: '1.4',
                    maxWidth: '280px'
                }}>
                    Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}> {/* Smaller gap between buttons */}
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
