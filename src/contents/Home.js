import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/rasmus_profilep.PNG';
import Social from '../components/Social';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <Social />
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={["Welcome, I'm Rasmus"]} speed={100} eraseDelay={700}/>
            
            </div>
            )
        }
    }
    
    export default Home