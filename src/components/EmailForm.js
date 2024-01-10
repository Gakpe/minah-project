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
                <h3 className='form-header text-textOrange text-3xl font-semibold'>Login</h3>
                <div className='input-wrapper w-80 mb-4'>

                    <Input

                        rootClassName={"border-textOrange border rounded-2xl bg-[#FBF4F2] h-11 w-full"}
                        placeholder='Enter your email'
                        size='small'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Button
                    className={"w-full gradientedBackground hover:border-textOrange hover:scale-105 text-white rounded-full py-3 px-3 h-fit"}

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
