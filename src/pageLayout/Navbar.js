import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Row, Col} from 'antd';

import '../App.css'

function Navbar() {
    return (
            <Row justify="end">
                <Col xs={{pull: ''}} sm={{pull: '6'}} md={{pull: '8'}} lg={{pull: '12'}} xl={{pull: '16'}}>
                    <Link smooth to='/#home' className="navbarLink" >Home</Link>
                </Col>
                <Col>
                    <Link smooth to='/#aboutMe' className="navbarLink" >About Me</Link>
                </Col>
                <Col offset={1}>
                    <Link smooth to='#workExperiences' className="navbarLink" >Work Experiences</Link>
                </Col>
                <Col offset={1}>
                    <Link smooth to='#projects' className="navbarLink" >Projects</Link>
                </Col>
                <Col offset={1}>
                    <Link smooth to='#myPassions' className="navbarLink" >My Passions</Link>
                </Col>
                <Col offset={1}>
                    <Link smooth to='#contactMe' className="navbarLink" >Contact Me</Link>
                </Col>
            </Row>
    );
}

export default Navbar;