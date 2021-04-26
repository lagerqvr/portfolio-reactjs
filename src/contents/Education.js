import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">Education</h1>
            <Widecard title="Energy and Environmental Engineering" where="Arcada University of Applied Sciences" from="August 2020" to="Present"/>
            <Widecard title="High School" where="Kyrkslätts Gymnasium" from="2016" to="2019"/>
            </div>
            )
        }
    }
    
export default Education