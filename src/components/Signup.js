import React ,{ useEffect, useState} from 'react'
import '../css/Signup.css'
import { NavLink } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Validation from './Validation'

const Signup =({})=> {
    const [value, setValue] = useState();
    
    const [values,setvalues] = useState({
        fname:'',
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

    const blur = (e) =>{
        setErrors(Validation(values));
        setDataIsCorrect(true)
    }

    const handleformsubmit = (e) =>{
        e.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true)
    }
    
    
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            alert(JSON.stringify(values, null, 2));
            setvalues({fname:'',
            email: '',
            password :'',});
            }
    },[errors]);
    return (
    
        <div className='Sign-up template d-flex justify-Content-center align-items-center 100-w vh-100 bg-white'>
            <div className='border border-danger p-5 rounded form-conainer'>
                <form>
                <h3 className='text-center'>Sign Up</h3>
    
                <div className='mb-2'>
                    <label htmlFor='fname'>First Name</label>
                    <input type='text'
                    placeholder='Enter Your First Name'  
                    className='form-control' 
                    name='fname' 
                    value={values.fname}
                    onChange={handleChange}
                    />
                    {errors.fname && <p style={{
                        fontWeight: "bold",
                        color: "red"
                    }} className='error'>{errors.fname}</p>}
                </div>
    
                <div className='mb-2'>
                    <label htmlFor='lname'>Last Name</label>
                    <input type='text' 
                    placeholder='Enter Your Last Name'  
                    className='form-control'
                    />
                </div>
    
                <div className='mb-2'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' 
                    placeholder='Enter Email'  
                    className='form-control' 
                    name='email' 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={blur}
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
                    <input id='pass' 
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
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue} className='mt-3 p-2' name='phone'/>
                </div>
    
                <div className='d-grid'>
                    <button id='btm' type="submit" class="p-2 btn btn-primary" onClick={handleformsubmit}>Sign Up</button>
                </div>
    
                <p className='text-end mt-2'>
                    Already Registerd<NavLink to='/login' className='ms-2 sign'>Signin</NavLink>
                </p>
                
                </form>
            </div>
        </div>
    )
}

export default Signup