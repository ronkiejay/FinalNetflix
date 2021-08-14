import React, {useState} from 'react'
import {Link} from "react-router-dom";
import { Navbar, Nav, Container, Button,FormControl, Form } from 'react-bootstrap'
import image1 from "../img/logo.jpg";


const Navigation = () => {

    const [scenes, setScenes] = useState({
        title: "",
        description: "",
        category: "",
    })


    // const searchData = (e) =>{

    //     e.preventDefault();

    //     fetch("http://localhost:5100/scenes/title",{
    //         method: "GET",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(movie.title)
    //     })        
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMovie(data.json)
    //     })
    //     .catch(err=>console.log(`Error : ${err}`))
    
    // }
    return (
        <>
            <Navbar className="navbar" collapseOnSelect fixed="top" expand='sm' variant="dark">
                <Navbar.Brand href="#home">
                    <img src={image1} className="logo" alt="logo"/>
                    <span>
                        <h4>Rapha</h4>
                    </span>
                </Navbar.Brand>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="topNav">
                        <Nav className="allLinks">
                            <Nav.Link className="home" href="/">Rapha</Nav.Link>
                            <Nav.Link href="/listings">Listings</Nav.Link>
                            <Nav.Link href="/showings">Showing</Nav.Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <div className="col-sm-4 text-center">
                    <Form action={`http://localhost:5100/scenes/title/${scenes.title}`} method= "GET" inline className="searchForm" >
                        <input type="text" placeholder="Search" className="mr-sm-1" 
                        onChange={(event)=>{
                            setScenes({
                                ...scenes, title:event.target.value
                            })
                        }}/>
                        <span>
                            <Button type="submit">Search</Button>
                        </span>
                        
                    </Form>
                </div>
                <Nav className="ml-auto px-2">
                    <Nav.Link href="/register">Register</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Navbar>

        </>
    )
}

export default Navigation;
