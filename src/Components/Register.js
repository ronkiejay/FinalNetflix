import React, {useState} from 'react'
import { FormControl, Form, Button, Card } from "react-bootstrap";
import movieContext from '../context/moviesContext';
//import { useContext, UseRef} from 'react';

//import NewUserContext from "./context/NewUserContext";

const Register = () => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        age: "",
        email: "",
        password: "",

    })

    const registrationSubmit = (e) =>{

        e.preventDefault();

        fetch("http://localhost:5100/customers", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            alert(`Hello ${user.firstName}, you are successfully registered!`)
        })
        .catch(err=>console.log(`Error : ${err}`))
    }

    return (
       <div className="register">
            <Card style={{ width: "50vw", padding: "1rem" }} className="home-card">
            <Form className="register-form" action="/" method="POST" onSubmit={registrationSubmit}>
                <h3>Register New User</h3>
                <div className="form-group">
                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="First Name"
                    name="fname"
                    value= {user.firstName}
                    onChange={(event)=>{
                        setUser({
                            ...user, firstName:event.target.value
                        })
                    }}
                    />     

                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Last Name"
                    name="lname"
                    value= {user.lastName}
                    onChange={(event)=>{
                        setUser({
                            ...user, lastName:event.target.value
                        })
                    }}
                    />            
                </div>
                <div className="form-group">
                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Email Address"
                    name="email"
                    value= {user.email}
                    onChange={(event)=>{
                        setUser({
                            ...user, email:event.target.value
                        })
                    }}
                    />
                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Phone Number"
                    name="email"
                    value= {user.phoneNumber}
                    onChange={(event)=>{
                        setUser({
                            ...user, phoneNumber:event.target.value
                        })
                    }}
                    />
                    <FormControl
                    type="text"
                    id="nav-search"
                    placeholder="Age"
                    name="email"
                    value= {user.age}
                    onChange={(event)=>{
                        setUser({
                            ...user, age:event.target.value
                        })
                    }}
                    />
                </div>
                <div className="form-group">
                    <FormControl
                        type="text"
                        id="nav-search"
                        placeholder="Username"
                        name="username"
                        value= {user.username}
                        onChange={(event)=>{
                            setUser({
                                ...user, username:event.target.value
                            })
                        }}
                    />
                </div>
                <div className="form-group">
                    <FormControl
                        type="text"
                        id="nav-search"
                        placeholder="Password"
                        name="password"
                        value= {user.password}
                        onChange={(event)=>{
                            setUser({
                                ...user, password:event.target.value
                            })
                        }}
                    />
                </div>
               
                <Button className="register-button" type="submit">Register</Button>
            </Form>
            </Card>
                              
        </div>
    )
}

export default Register