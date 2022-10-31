import React from 'react';
import { useAuth } from '../auth';

const Account = () => {
    const auth = useAuth();

    return (
        <>
            <h1>Account</h1>
            <p>Welcome, {auth.user.username}</p>
        </>
    );
};

export default Account;