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
                <div>
                    <img src={headshot} className="HeadShot" alt="logo" />
                </div>
            </Col>
            <Col className="center">
                <h5>Howdy</h5>
                <br/>
                <p>I'm a senior computer science major at Texas A&M University.</p>
                <br/>
                <p>I'm taking Computers and New Media to familiarize myself with the patterns of changing media and how today's media access impacts society. </p>

            </Col>
            <Col></Col>
        </Row>

        </div>
    );

}

export default Introduction;