import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Login.css'



const Login = ({signin}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrorMsg] = useState('');

    const handleSubmit =async (event)=>{
        event.preventDefault();
        setErrorMsg('');

        try{
            const response = await axios.post('https://finance-api-ochre.vercel.app/login',{username, password});
            console.log(response.data);
            if(response.data.success===true){
                navigate('/admin')
                signin()
                

            }
            else if(response.data !== "Login Successfull"){
                setErrorMsg(" * Invalid")
                const timeOutMsg = setTimeout(()=>setErrorMsg(''),3000);
                return ()=>clearTimeout(timeOutMsg)
            }
        }catch(error){
            if(error.response){
                setErrorMsg(error.response.data);
            }else{
                setErrorMsg("Network Error");
            }}}

  return (
    <div className='login'>
    
        <h1 className='login-h1'>Login</h1>
        <a href='/' className='login-back'>HomePage</a>
        {errormsg && <p className='error-login'>{errormsg}</p>}
        
        <form onSubmit={handleSubmit} className='login-form'>
            <div className='login-container'>
                <div>
                    <label htmlFor='name'>UserName</label>
                    <input type='text' id='name' placeholder='Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className='pass'>
                    <label htmlFor='pass' >Password</label>
                    <input type='password' id='pass' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='login-btn' type='submit'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
