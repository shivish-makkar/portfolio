import React from 'react';
import {Row, Col, Typography} from "antd";
import {HashLink as Link} from "react-router-hash-link";

import '../App.css'

const {Paragraph} = Typography;


function AppFooter(props) {
    return (
        <div >
            <Row>
                <Col offset={1}>
                    <Link smooth to='/#aboutMe' style={{color: '#262626'}}>About Me</Link>
                </Col>
                <Col offset={8}>
                    <a href="https://github.com/shivish-makkar">
                        <img src="/github.svg" alt="linkedin-icon" style={{ height: '1.5rem', width: '1.5rem'}}/>
                    </a>
                </Col>
                <Col offset={1}>
                    <a href="https://www.linkedin.com/in/shmakkar">
                        <img src="/linkedin.svg" alt="linkedin-icon" style={{ height: '1.5rem', width: '1.5rem'}}/>
                    </a>
                </Col>
                <Col offset={1}>
                    <a href="mailto:makkar@wisc.edu">
                        <img src="/contact-icon.svg" alt="linkedin-icon" style={{ height: '1.5rem', width: '1.5rem'}}/>
                    </a>
                </Col>
                <Col offset={5}>
                    <Row justify="end">
                        <div style={{fontSize: '0.5rem', color: '#262626'}}>
                            Mail icon made by
                            <a href="https://www.flaticon.com/authors/tomas-knop" title="Tomas Knop"> Tomas Knop </a>
                            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        </div>
                    </Row>
                    <Row  justify="end">
                        <div style={{fontSize: '0.5rem', color: '#262626'}}>
                            Wood Background designed by
                            <a href="http://www.freepik.com" title="Flaticon"> rawpixel.com / Freepik</a>
                        </div>
                    </Row>
                    <Row justify="end" style={{fontSize: '0.5rem', color: '#262626'}}>
                        <div>
                            LinkedIn and Github icons made by
                            <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
                            from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                        </div>
                    </Row>
                </Col>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph>
                    Copywright ©2020 by Shivish Makkar
                </Paragraph>
            </Row>
        </div>
    );
}

export default AppFooter;