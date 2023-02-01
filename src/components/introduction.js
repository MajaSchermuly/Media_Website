import React from 'react';
import './styling.css';
import {Container, Row, Col} from 'react-bootstrap';
import headshot from '../images/headshot.jpg';


function Introduction() {
    return (
        <div>
        <h2 className="Title"> Maja's Website</h2>
        <Row>
            <Col></Col>
            <Col className="center">
                <div className="Image_wrap">
                    <img src={headshot} className="HeadShot" alt="logo" />
                </div>
            </Col>
            <Col className="center">
                <div className="Intro">
                <h5>Howdy</h5>
                <br/>
                <p>I'm a senior at Texas A&M University pursuing my Computer Science Degree with a minor in business.</p>
                <br/>
                <p>My interests in computers and finance have led me to focus on full stack application development in the realm of financial technology. Adjacent to this I have gained experience in computer graphics, cloud engineering, and deeper analysis of data structures and algorithms. </p>
                <br/>
                <p>I'm taking Computers and New Media to familiarize myself with the patterns of changing media and how today's media access impacts society. </p>
                <br/>
                </div>
            </Col>
            <Col></Col>
        </Row>

        </div>
    );

}

export default Introduction;