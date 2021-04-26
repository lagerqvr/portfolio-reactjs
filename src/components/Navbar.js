import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="about" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="education" tolink="/education"  activec={this.activeitem}></Navitem>
            <Navitem item="skills" tolink="/skills"  activec={this.activeitem}></Navitem>
            <Navitem item="contact" tolink="/contact"  activec={this.activeitem}></Navitem>
            </ul>
            </nav>
            )
        }
    }
    
    export default Navbar