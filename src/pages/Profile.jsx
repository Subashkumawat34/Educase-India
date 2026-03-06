import { Camera } from 'lucide-react';

export default function Profile() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: 'var(--bg-color)' // The background of the screen
        }}>

            {/* Top Header */}
            <div style={{
                backgroundColor: '#FFFFFF', // The header has a white background
                padding: '24px',
                paddingTop: '28px',
                borderBottom: '1px solid #EBEBEB',
                zIndex: 1
            }}>
                <h1 style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    margin: 0,
                    color: 'var(--text-dark)'
                }}>Account Settings</h1>
            </div>

            <div style={{ padding: '30px', flex: 1 }}>
                <div style={{
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'flex-start', // Align to start since text will be beside it
                    marginBottom: '24px'
                }}>
                    <div style={{ position: 'relative' }}>
                        {/* The profile image in XD is smaller and circular */}
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
                            border: '2px solid var(--bg-color)' // Makes it pop over the image
                        }}>
                            <Camera size={13} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '14px' }}>
                        <h2 style={{ fontSize: '15px', fontWeight: '500', margin: '0 0 4px 0', color: 'var(--text-dark)' }}>Marry Doe</h2>
                        <p style={{ fontSize: '14px', margin: 0, color: 'var(--text-dark)', opacity: 0.8 }}>Marry@Gmail.Com</p>
                    </div>
                </div>

                <p style={{
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: 'var(--text-dark)',
                    opacity: 0.8,
                    marginBottom: '30px'
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>

                {/* Separator line */}
                <div style={{
                    borderTop: '1px dashed #CBCBCB', // Explicitly marked in the original subagent extraction
                    width: '100%',
                    opacity: 0.8,
                    marginBottom: '20px'
                }} />

                {/* Bottom Information Details section not clearly defined in original prompt,
            but adding placeholders based on second review mentioning "Full Name", etc. */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '30px' }}>
                    <div style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '12px' }}>
                        <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '6px' }}>Full Name</p>
                        <p style={{ fontSize: '15px' }}>Marry Doe</p>
                    </div>
                    <div style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '12px' }}>
                        <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '6px' }}>Email Address</p>
                        <p style={{ fontSize: '15px' }}>Marry@Gmail.Com</p>
                    </div>
                    <div style={{ borderBottom: '1px solid #EBEBEB', paddingBottom: '12px' }}>
                        <p style={{ fontSize: '12px', opacity: 0.6, marginBottom: '6px' }}>Phone Number</p>
                        <p style={{ fontSize: '15px' }}>+91 12345 67890</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
