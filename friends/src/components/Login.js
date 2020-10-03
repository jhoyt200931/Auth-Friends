import React, { useState } from 'react';



const Login = () =>{
    
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        console.log(credentials);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>
                    Username: 
                    <input type='text' name='username' id='username' value={credentials.username} onChange={handleChange} />
                </label>
                <label htmlFor='password'>
                    Password:
                    <input type='password' name='password' id='password' value={credentials.password} onChange={handleChange} />
                </label>
            </form>
        </div>
    )
}

export default Login;