import { useState } from 'react';
import { Input, Button } from 'antd';

const EmailForm = ({ onEmailSubmit, disabled }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        onEmailSubmit(email);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
                <h3 className='form-header text-xl'>Login</h3>
                <div className='input-wrapper w-80 mb-4'>
                    <Input
                        placeholder='Enter your email'
                        size='small'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Button
                    className={"w-full bg-button_border rounded-md py-3 px-3 h-fit"}
                    type='primary'
                    size='small'
                    disabled={disabled}
                    onClick={handleSubmit}
                >
                    Send Magic Link
                </Button>
            </form>
            <style jsx>{`
        form {
          text-align: center;
          margin-top: 20px;
        }

        .form-header {
          font-size: 22px;
          margin: 25px 0;
        }

        .input-wrapper {
          margin: 0 auto;
        }
      `}</style>
        </div>
    );
};

export default EmailForm;
