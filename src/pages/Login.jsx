import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import InputField from '../components/InputField';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isFormValid = email.trim() !== '' && password.trim() !== '';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '30px',
        }}>
            <div style={{ marginTop: '20px', marginBottom: '32px' }}>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '500',
                    marginBottom: '14px',
                    color: 'var(--text-dark)',
                    lineHeight: '1.2'
                }}>Signin to your<br />PopX account</h1>
                <p style={{
                    fontSize: '18px',
                    color: 'var(--text-dark)',
                    opacity: 0.6,
                    lineHeight: '1.4',
                    maxWidth: '280px'
                }}>
                    Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <InputField
                    label="Email Address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                />
                <InputField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                />

                {/* The design explicitly shows the Login button placed immediately after the inputs, 
            not pushed entirely to the bottom like the signup page. It is also grey (#CBCBCB) when disabled. */}
                <Button
                    variant={isFormValid ? 'primary' : 'disabled'}
                    style={{ marginTop: '10px' }}
                    onClick={() => {
                        if (isFormValid) navigate('/profile');
                    }}
                >
                    Login
                </Button>
            </div>
        </div>
    );
}
