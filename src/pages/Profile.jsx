import { Camera } from 'lucide-react';

export default function Profile() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'var(--bg-color)'
        }}>
            <div style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                paddingTop: '28px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                zIndex: 1
            }}>
                <h1 style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    margin: 0,
                    color: 'var(--text-dark)'
                }}>Account Settings</h1>
            </div>

            <div style={{ padding: '32px 24px', flex: 1, backgroundColor: '#F7F8F9' }}>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    marginBottom: '24px'
                }}>
                    <div style={{ position: 'relative' }}>
                        <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=Marry"
                            alt="Profile"
                            style={{
                                width: '76px',
                                height: '76px',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                objectFit: 'cover',
                                border: '1px solid #eee'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            backgroundColor: 'var(--primary-purple)',
                            color: 'white',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '2px solid var(--bg-color)',
                        }}>
                            <Camera size={12} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h2 style={{ fontSize: '16px', fontWeight: '500', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>Marry Doe</h2>
                        <p style={{ fontSize: '14px', margin: 0, color: 'var(--text-dark)', opacity: 0.8 }}>Marry@Gmail.Com</p>
                    </div>
                </div>

                <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: 'var(--text-dark)',
                    opacity: 0.8
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>

                <div style={{
                    marginTop: '32px',
                    borderTop: '2px dashed #CBCBCB',
                    width: '100%',
                    opacity: 0.5
                }} />
            </div>
        </div>
    );
}
