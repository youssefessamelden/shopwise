import React,{ useEffect, useState} from 'react'
import '../css/Login.css'
import { NavLink } from 'react-router-dom'
import Validaationlogin from './Validaationlogin';

function Login() {
        
        const [values,setvalues] = useState({
            email: '',
            password :'',
        });
        
        const [errors,setErrors] = useState({});
        const[dataIsCorrect , setDataIsCorrect] = useState(false);
    
        const handleChange = (e) =>{
            setvalues({
                ...values,[e.target.name]:e.target.value,
            })
        }
    
        const handleformsubmit = (e) =>{
            e.preventDefault();
            setErrors(Validaationlogin(values));
            setDataIsCorrect(true)
        }
        
        
        useEffect(()=>{
            if(Object.keys(errors).length === 0 && dataIsCorrect){
                alert(JSON.stringify(values, null, 2));
                setvalues({
                email: '',
                password :'',
                });
            }
        },[errors]);

    return (
    
        <div className='login template d-flex justify-Content-center align-items-center 100-w vh-100 bg-white'>
            <div className='border border-danger p-5 rounded form-conainer'>
                <form>
                <h3 className='text-center'>Sign In</h3>
    
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input 
                    type='email' 
                    placeholder='Enter Email'  
                    className='form-control'
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p style={{
                        fontWeight: "bold",
                        color: "red"
                    }} className='error'>{errors.email}</p>}
                    <div className='invalid-feedback'>
                        Please Enter Your Correct Email
                    </div>
                </div>
    
                <div className='mb-2'>
                    <label htmlFor='password'>Password</label>
                    <input 
                    type='password' 
                    placeholder='Enter Password' 
                    className='form-control'
                    name='password' 
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p style={{
                        fontWeight: "bold",
                        color: "red"
                    }} className='error'>{errors.password}</p>}
                    <div className='invalid-feedback'>
                        Please Enter Your Correct Password
                    </div>
                </div>
    
                <div className='mb-2'>
                    <label htmlFor='checkbox' className='custom-control custom-chheckbox' id='check'>Remember me</label>
                    <input type='checkbox' className='custom-input-label ms-2' />
                </div>
    
                <div className='d-grid'>
                    <button type="submit" class="p-2 btn btn-primary" onClick={handleformsubmit}>Sign in</button>
                </div>
    
                <p className='text-end mt-2'>
                    Forgot <a className='sign' href='/'>password?</a> <NavLink to='/signin' className='ms-2 sign'>Sign Up</NavLink>
                </p>
                </form>
            </div>
        </div>
    )
}

export default Login