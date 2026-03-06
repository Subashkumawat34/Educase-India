import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: 'yes'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const isFormValid = formData.name.trim() !== '' &&
        formData.phone.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.password.trim() !== '';

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '24px',
            overflowY: 'auto'
        }}>
            <div style={{ marginTop: '20px', marginBottom: '32px' }}>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '500',
                    color: 'var(--text-dark)'
                }}>Create your PopX account</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <InputField label="Full Name" name="name" required value={formData.name} onChange={handleChange} placeholder="Marry Doe" />
                <InputField label="Phone number" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Marry Doe" />
                <InputField label="Email address" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Marry Doe" />
                <InputField label="Password" name="password" type="password" required value={formData.password} onChange={handleChange} placeholder="Marry Doe" />
                <InputField label="Company name" name="company" value={formData.company} onChange={handleChange} placeholder="Marry Doe" />

                <div style={{ marginTop: '16px' }}>
                    <label style={{ fontSize: '13px', color: 'var(--text-dark)', marginBottom: '8px', display: 'block' }}>
                        Are you an Agency? <span style={{ color: 'red' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={formData.isAgency === 'yes'}
                                onChange={handleChange}
                                style={{ accentColor: 'var(--primary-purple)', width: '20px', height: '20px' }}
                            />
                            Yes
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                            <input
                                type="radio"
                                name="isAgency"
                                value="no"
                                checked={formData.isAgency === 'no'}
                                onChange={handleChange}
                                style={{ accentColor: 'var(--primary-purple)', width: '20px', height: '20px' }}
                            />
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '32px', marginBottom: '16px' }}>
                <button
                    style={{
                        opacity: isFormValid ? 1 : 0.6,
                        pointerEvents: isFormValid ? 'auto' : 'none',
                        width: '100%',
                        padding: '16px',
                        borderRadius: '6px', /* The XD design for the signup button is generally rounded similar to inputs */
                        border: 'none',
                        fontSize: '16px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        backgroundColor: 'var(--primary-purple)',
                        color: 'white',
                        transition: 'opacity 0.2s',
                        marginTop: 'auto'
                    }}
                    onClick={() => {
                        if (isFormValid) navigate('/profile');
                    }}
                >
                    Create Account
                </button>
            </div>
        </div>
    );
}
