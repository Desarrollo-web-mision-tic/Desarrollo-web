import React from 'react';
import { useAuth } from '../auth';
import Logout from '../components/Logout';

const Account = () => {
    const auth = useAuth();

    return (
        <>
            <div class="login">
        <div class="form-container">
            <h1 class="title">My account</h1>

            <form action="/" class="form">
                <div>
                    <label for="name" class="label">Name</label>
                    <p class="value">Diego Andres Salas</p>
                    
                    <label for="email" class="label">Email address</label>
                    <p class="value">{auth.user.username}</p>
    
                    <label for="password" class="label">Password</label>
                    <p class="value">***********</p>
                </div>

                <input type="submit" value="Edit  " class="secundary-button login-button" />
            </form>
        </div>
            <Logout/>
    </div>
            
        </>
    );
};

export default Account;