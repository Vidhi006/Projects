import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
    const [first,setfirst]= useState({name:"" ,email:"" , password:"",geolocation:""});
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:500/api/createuser",{
            method: 'POST' ,
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify()
        })
    }
    return (
        <>
        <div className='container'>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={first.name} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={first.email} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={first.password} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Address</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='address' value={first.geolocation} />
                </div>
                <button type="submit" className=" m-3 btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
            </form>
            </div>
        </>
    )
}
