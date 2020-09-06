import React from 'react';
import {Divider, Row, Typography} from "antd";

import '../App.css'

const {Title, Paragraph} = Typography;

function AboutMe(props) {
    return (
        <div className="aboutMeSection" id="aboutMe">
            <Row align="center" justify="center">
                <div className="headshot" />
            </Row>
            <br/>
            <br/>
            <Row align="center">
                <Title className="title"> About Me </Title>
            </Row>
            <Row align="center">
                <Divider className="divider"/>
            </Row>
            <Row align="center">
                <Paragraph className="paragraphAboutMe">
                        Hi, I am a junior at the University of Wisconsin-Madison double majoring in Computer Science and
                        Economics along with a Certificate in Business.
                </Paragraph>
            </Row>
            <Row align="center">
                <Paragraph className="paragraphAboutMe">
                    I enjoy software engineering and design, and am passionate about entrepreneurship.
                </Paragraph>
            </Row>
            <Row align="center">
                <Paragraph className="paragraphAboutMe">
                    With a keen interest in Algorithms, Data Science and Virtual Reality, I love exploring various
                    avenues that software engineering offers. I have proficiency in Full Stack Web Development with
                    the MERN stack and a robust knowledge of Data Structures. Designing positive consumer centric
                    products also interests me a lot.
                </Paragraph>
            </Row>
            <Row align="center">
                <Paragraph className="paragraphAboutMe">
                    I am passionate about Entrepreneurship. I enjoy finding abstract problems, narrowing them down into
                    actionable focus and creating focused solutions that create positive impact.
                </Paragraph>
            </Row>
            <Row align="center">
                <Paragraph className="paragraphAboutMe">
                    Please take a look at my projects and experiences to learn more, and feel free to reach out to me to
                    discuss ideas or to collaborate on projects!
                </Paragraph>
            </Row>
            <br/>
            <br/>
        </div>
    );
}

export default AboutMe;