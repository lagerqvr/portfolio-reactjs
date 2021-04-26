import React, { Component } from 'react';
// import { FaGithub } from 'react-icons/fa';
// import { FaLinkedinIn } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';

class Social extends Component {
    render() {
        return (
            <div className="social">
            <a href="https://github.com/lagerqvr" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/rasmus-lagerqvist-59750119a" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            </div>
            )
        }
    }
    
export default Social
    