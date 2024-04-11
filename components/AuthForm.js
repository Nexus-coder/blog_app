import React, { useState } from 'react';

function AuthForm() {
    const [isLoginMode, setIsLoginMode] = useState(true); // Start in login mode
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLoginMode) {
            // Handle login logic
            console.log('Login:', email, password);
        } else {
            // Handle signup logic
            console.log('Signup:', username, email, password);
        }
    };

    const switchModeHandler = () => {
        setIsLoginMode((prevState) => !prevState);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <button type="submit">
                {isLoginMode ? 'Login' : 'Sign Up'}
            </button>
            <button type="button" onClick={switchModeHandler}>
                Switch to {isLoginMode ? 'Sign Up' : 'Login'}
            </button>
        </form>
    );
}

export default AuthForm;
