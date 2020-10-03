import React, { useState } from 'react';
import { axiosWithAuth } from '../api/axiosWithAuth';


const Login = (props) =>{
    
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
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                props.history.push('/friends');
            })
            .catch(err => {
                console.error(err);
            });
    }

    return (
        <div>
            <form>
                <label htmlFor='username'>
                    Username: 
                    <input type='text' name='username' id='username' value={credentials.username} onChange={handleChange} />
                </label>
                <label htmlFor='password'>
                    Password:
                    <input type='password' name='password' id='password' value={credentials.password} onChange={handleChange} />
                </label>
                <button type='submit' onClick={handleSubmit} >Login</button>
            </form>
        </div>
    )
}

export default Login;