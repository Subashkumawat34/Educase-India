import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

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
            padding: '30px',
            overflowY: 'auto'
        }}>
            <div style={{ marginTop: '20px', marginBottom: '32px' }}>
                <h1 style={{
                    fontSize: '28px',
                    fontWeight: '500', // Rubik Medium
                    color: 'var(--text-dark)'
                }}>Create your PopX account</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <InputField label="Full Name" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" />
                <InputField label="Phone number" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
                <InputField label="Email address" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Enter email address" />
                <InputField label="Password" name="password" type="password" required value={formData.password} onChange={handleChange} placeholder="Enter password" />
                <InputField label="Company name" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" />

                <div style={{ marginTop: '0px' }}>
                    <label style={{ fontSize: '14px', color: 'var(--text-dark)', marginBottom: '12px', display: 'block', fontWeight: '400' }}>
                        Are you an Agency?<span style={{ color: 'var(--error-color)', marginLeft: '4px' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                            <input
                                type="radio"
                                name="isAgency"
                                value="yes"
                                checked={formData.isAgency === 'yes'}
                                onChange={handleChange}
                                className="custom-radio"
                                style={{ accentColor: 'var(--primary-purple)', width: '22px', height: '22px' }}
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
                                className="custom-radio"
                                style={{ accentColor: 'var(--primary-purple)', width: '22px', height: '22px' }}
                            />
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '32px', marginBottom: '0px' }}>
                <Button
                    variant={isFormValid ? 'primary' : 'disabled'}
                    onClick={() => {
                        if (isFormValid) navigate('/profile');
                    }}
                >
                    Create Account
                </Button>
            </div>
        </div>
    );
}
