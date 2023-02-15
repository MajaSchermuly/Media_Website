import React from "react";
import './styling.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";


function Part2() {
    return (
      <div>
        <h1 className="center">Part 2 of CSCE 445 Assignment
        <br/>
        <Link to="/"> Home Page</Link>
        </h1>

      <Row>
        <Col>
        <div className="Intro center">
          <h4>Common Themes Across Websites</h4>
          <br/>
          <h5>Basic Vertical Representation of Media Heirarchy</h5>
          <p>When given the directions to complete assignment 1, there was a 
            example heirarchy chart given which was a vertical drop down representation.
            Going through the websites of other classmates, I saw a significant amount of students duplicate 
            this same layout of media consumption. 
          </p>
          <p> Examples: 
              <a href="https://people.tamu.edu/~t2tran/">Toung Tran</a>~~
              <a href="https://sites.google.com/tamu.edu/carlos-carrillo/home">Carlos Carrillo</a>


          </p>
          <br/>
          <h5>Commonality on reason of taking this course</h5>
          <p>A significant amount of students published that they are taking this class to learn more about
            media on a theorhetical level to better apply to a different branch of study.
          </p>
          <p> Examples:
            <a href="https://people.tamu.edu/~t2tran/">Toung Tran</a>~~
            <a href="https://sites.google.com/tamu.edu/carlos-carrillo/home">Carlos Carrillo</a>



          </p>
          <br/>
          <h5>Commonality on Way Media Consumption is portrayed</h5>
          <p>Another trend I saw from other students was that instead of showing media consumed as a heirarchy, 
            people listed out specific media they consumed only based on the type of media it was.
          </p>
          <p> Examples:
          <a href="https://akashjothi.wixsite.com/my-site">Akash Jothi</a>


          </p>
        </div>
        </Col>
        <Col>
        <div className="Intro center">
          <h4>Theorhetical revisions to media Heirarchy</h4>
          <p>
            My heirarchy was broken down to different media types like photo, video, or audio, and further broken down 
            to what type of device it was accessed on. I would add a further distiction to what genres, titles, and channels
            I consume. 
          </p>
          <br/>
          <p>
            Another part of my website I would update would be expanding on why I am taking this class. I gave a brief statement 
            on the matter but could go into more details on how the knowledge I learn from this class could benefit other portions of
            my education and career. 
          </p>
        </div>
        </Col>
      </Row>
      </div>
    );
  };
    
  export default Part2;