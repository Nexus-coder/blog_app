import React, { useState } from 'react';
import Link from 'next/link';

function LoginNav() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <nav>
            <Link href="/"><h1>My App</h1></Link>
            <ul>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
}

export default LoginNav;
