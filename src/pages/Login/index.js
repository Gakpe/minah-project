// pages/login.js
import { useState } from 'react';
import magic from "../../../utils";

const Login = () => {
    const [email, setEmail] = useState('');

    const handleLogin = async () => {
        try {
            const didToken = await magic.auth.loginWithMagicLink({ email });
            console.log(didToken);
            // Handle successful login (e.g., save token to state or redirect)
        } catch (error) {
            console.error('Error logging in with Magic Link:', error);
        }
    };

    return (
        <div>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleLogin}>Send Magic Link</button>
        </div>
    );
};

export default Login;
