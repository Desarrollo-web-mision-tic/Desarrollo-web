import React from 'react';
import { useAuth } from '../auth';

const Logout = () => {
    const auth = useAuth();
    const logout = (e) => {
        e.preventDefault();
        auth.logout()
      };

    return (
        <>
        <form onSubmit={logout}>
            <button type='submit'>Logout</button>
        </form>
        </>
    );
};

export default Logout;