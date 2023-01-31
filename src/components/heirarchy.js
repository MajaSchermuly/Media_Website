import React from 'react';
import './styling.css';
import {Container, Row, Col} from 'react-bootstrap';

const high_level = ["Text","Sound","Games","Still Images", "Moving Images"]

const listItems = high_level.map((high_level) =>
    <li>{high_level}</li>
    );

function Heirarchy() {
    return (
    <div>
        <h2 className='Title' >Media Heirarchy</h2>
        <ul>{listItems}</ul>
    </div>
    );
    
}

export default Heirarchy;