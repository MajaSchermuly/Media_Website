import React from 'react';
import './styling.css';
import {Container, Row, Col} from 'react-bootstrap';

const high_level = ["Text","Sound","Games","Still Images", "Moving Images"]



    
function Heirarchy() {
    return (
    <div className="center">
        <h2 className='Title' >Media Heirarchy</h2>
        <p>Below I have categorizied types of media I consume in my day-to-day by how they are accessed.</p>
        
        <Row className="High_Media Sound">
            <h5 className='Media_Title'>Audio</h5>
            
                <Col className="Column_border1">
                <Row>
                    <div className="Media_Platform">Non-Device</div>
                </Row>
                <Row>
                    <Col>
                        <div>Class lectures</div>
                    </Col>
                    <Col>
                        <div> conversations</div>
                    </Col>
                </Row>
                </Col>

                <Col className="Column_border1">
                    <Row>
                        <div className="Media_Platform">Phone</div>
                    </Row>
                    <Row>
                        <Col>
                            <div>Music</div>
                        </Col>
                        <Col>
                            <div>Podcasts</div>
                        </Col>
                        <Col>
                            <div>AudioBooks</div>
                        </Col>
                    </Row>
                </Col>
                <Row></Row>
            </Row>
           
        <Row className="High_Media Text">
            <h5 className='Media_Title'>Text</h5>
            <Col className="Column_border2">
                <Row><div className="Media_Platform">Phone</div></Row>
                <Row>
                    <Col>Text Messages</Col>
                    <Col>LinkedIn</Col>
                </Row>
            </Col>
            <Col className="Column_border2">
                <Row><div className="Media_Platform">Tablet</div></Row>
                <Row>
                    <Col>Textbooks</Col>
                    <Col>Digital Books</Col>
                    <Col>Reddit</Col>
                </Row>
            </Col>
            <Col className="Column_border2">
                <Row><div className="Media_Platform">Computer</div></Row>
                <Row>
                    <Col>Programming</Col>
                    <Col>Stack Overflow</Col>
                    <Col>Academic Articles and Journals</Col>
                </Row>
            </Col>
            <Row></Row>
        </Row>

        <Row className="High_Media Still_Images">
            <h5 className='Media_Title'>Still Images</h5>
            <Col className="Column_border3">
                <Row><div className="Media_Platform">Phone</div></Row>
                <Row>
                    <Col>Instagram</Col>
                    <Col>Pinterest</Col>
                    <Col>Facebook</Col>
                </Row>
            </Col>
            <Col className="Column_border3">
                <Row><div className="Media_Platform">Others</div></Row>
                <Row>
                    <Col>Billboards</Col>
                    <Col>Advertisement</Col>
                </Row>
            </Col>
            <Row></Row>
        </Row>

        <Row className="High_Media Games">
            <h5 className='Media_Title'>Games</h5>
            <Col className="Column_border4">
                <Row><div className="Media_Platform">Board Games</div></Row>
                <Row>
                    <Col>Catan</Col>
                    <Col>Clue</Col>
                    <Col>Chess</Col>
                </Row>
            </Col>
            <Col className="Column_border4">
                <Row><div className="Media_Platform">Phone</div></Row>
                <Row>
                    <Col>HayDay</Col>
                    <Col>Bloons</Col>
                </Row>
            </Col>
            <Col className="Column_border4">
                <Row><div className="Media_Platform">Console</div></Row>
                <Row>
                    <Col>Legend of Zelda</Col>
                    <Col>Pokemon</Col>
                </Row>
            </Col>
            <Col className="Column_border4">
                <Row><div className="Media_Platform">Computer</div></Row>
                <Row>
                    <Col>Age of Empires</Col>
                    <Col>Ark</Col>
                </Row>
            </Col>
            <Row></Row>
        </Row>

        <Row className="High_Media Moving_Images">
            <h5 className='Media_Title'>Moving Images</h5>
            <Col className="Column_border5">
                <Row><div className="Media_Platform">Phone</div></Row>
                <Row>
                    <Col>TikTok</Col>
                </Row>
            </Col>
            <Col className="Column_border5">
                <Row><div className="Media_Platform">Computer</div></Row>
                <Row>
                    <Col>Youtube</Col>
                </Row>
            </Col>
            <Col className="Column_border5">
                <Row><div className="Media_Platform">Television</div></Row>
                <Row>
                    <Col>Movies</Col>
                    <Col>Tv Shows</Col>
                </Row>
            </Col>
            <Row></Row>
        </Row>

        
    </div>
    );
    
}

export default Heirarchy;