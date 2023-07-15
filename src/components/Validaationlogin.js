const Validaationlogin = (values)=> {
    let errors={};

    if(!values.email){
        errors.email="Email is Required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if(!values.password){
        errors.password= "Password is required."
    } else if (values.password.length<6){
        errors.password="Password must be more than 6 charecters."
    }
return errors;
};

export default Validaationlogin