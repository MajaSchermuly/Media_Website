import React from 'react';
import './styling.css';
import {Container, Row, Col} from 'react-bootstrap';

const high_level = ["Text","Sound","Games","Still Images", "Moving Images"]



    
function Heirarchy() {
    return (
    <div className="center">
        <h2 className='Title' >Media Heirarchy</h2>
        <p>Below I have categorizied types of media I consume in my day-to-day by how they are accessed.</p>
        
        <Row>
        <Col className="High_Media Sound">
            <h5 className='Media_Title'>Audio</h5>
                <Row >
                    <div className="Media_Platform">Phone</div>
                    <div className='first'>-Music</div>
                    <div className='first'>-Podcasts</div>
                    <div className='first'>-AudioBooks</div>
                </Row>

                <Row>
                    <div className="Media_Platform">Non-Device</div>
                    <div className='first'>-Class Lectures</div>
                    <div className='first'>-Conversations</div>
                </Row>              
            </Col>
           
        <Col className="High_Media Text">
            <h5 className='Media_Title'>Text</h5>
                <Row>
                    <div className="Media_Platform">Phone</div>
                    <div className='first'>-Text Messages</div>
                    <div className='first'>-LinkedIn</div>
                </Row>

                <Row>
                    <div className="Media_Platform">Computer</div>
                    <div className='first'>-Programming</div>
                    <div className='first'>-Stack Overflow</div>
                    <div className='first'>-Academic Articles</div>
                </Row>

                <Row>
                    <div className="Media_Platform">Tablet</div>
                    <div className='first'>-Textbooks</div>
                    <div className='first'>-Digital Books</div>
                    <div className='first'>-Reddit</div>
                </Row>

                
            </Col>
 


        <Col className="High_Media Still_Images">
            <h5 className='Media_Title'>Still Images</h5>
            
                <Row>
                    <div className="Media_Platform">Phone</div>
                    <div className='first'>-Instagram</div>
                    <div className='first'>-Pinterest</div>
                    <div className='first'>-Facebook</div>
                </Row>
           
                <Row>
                    <div className="Media_Platform">Others</div>
                    <div className='first'>-Billboards</div>
                    <div className='first'>-Advertisement</div>
                </Row>

        </Col>

        <Col className="High_Media Games">
            <h5 className='Media_Title'>Games</h5>
                
                <Row>
                    <div>
                        <div className="Media_Platform">Phone</div>
                        <div className='first'>-HayDay</div>
                        <div className='first'>-Bloons</div>
                    </div>
                </Row>

                <Row>
                    <div className="Media_Platform">Computer</div>
                    <div className='first'>-Age of Empires</div>
                    <div className='first'>-Ark</div>
                </Row>

                <Row><div className="Media_Platform">Board Games</div>
                    <div className='first'>-Catan</div>
                    <div className='first'>-Clue</div>
                    <div className='first'>-Chess</div>
                </Row>

                <Row><div className="Media_Platform">Console</div>
                    <div className='first'>-Legend of Zelda</div>
                    <div className='first'>-Pokemon</div>
                </Row>
        </Col>

        <Col className="High_Media Moving_Images">
            <h5 className='Media_Title'>Video</h5>
                <Row>
                    <div className="Media_Platform">Phone</div>
                    <div className='first'>-TikTok</div>
                </Row>
                <Row>
                    <div className="Media_Platform">Computer</div>
                    <div className='first'>-Youtube</div>
                </Row>
                <Row>
                    <div className="Media_Platform">Television</div>
                    <div className='first'>-Movies</div>
                        <div className='second'>-Action Movies</div>
                            <div className='third'>-Captain America</div>
                        <div className='second'>-Childrens Movies</div>
                            <div className='third'>-Tangled</div>
                        <div className='second'>-Comedy Movies</div>
                            <div className='third'>-Dumb and Dumber</div>
                    <div className='first'>-Tv Shows</div>
                        <div className='second'>-Action Shows</div>
                            <div className='third'>-The last of Us</div>
                        <div className='second'>-Comedy Shows</div>
                            <div className='third'>-Parks and Rec</div>


                </Row>

        </Col>
        </Row>
        
    </div>
    );
    
}

export default Heirarchy;