import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const Signup = () => {

    const [succeess, setSuccess] =useState(false)


    const [erroeMessage, setErrorMessage]= useState('')

    const handleSignUp = e => {
        e.preventDefault()
       
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password)
    //  reset error and status
        setErrorMessage('')
        setSuccess(false)

       if (password.length < 6 ) {
           setErrorMessage('password should be 6 chracter or longer')
           return
       }

       const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

       if (!passwordRegex.test(password)) {
           setErrorMessage('At least one uppercase, one lowercase, one number, one special chracter')
           return
       }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user)
            setSuccess(true)
        })
        .catch(error =>{
            console.log('ERROR', error.message)
            setErrorMessage(error.message)
            setSuccess(false)
        })
    }

    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <h3 className="text-3xl font-bold">Sign Up now!</h3>
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
            {
                erroeMessage && <p className='text-red-600'>{erroeMessage}</p>
            }
            {
                succeess && <p className='text-green-600'>Signup is successfully</p>
            }
        </div>

    );
};

export default Signup;