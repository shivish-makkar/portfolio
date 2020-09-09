import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Row, Col} from 'antd';
import { Menu } from 'antd';

import '../App.css'

function Navbar() {
    return (
        <Menu mode="horizontal" style={{background: '#262626', borderBottom: '0'}}>
            <Row justify="end">
                    <Col>
                        <Link smooth to='/#home' className="navbarLink">
                            <Menu.Item>
                                Home
                            </Menu.Item>
                        </Link>
                    </Col>
                    <Col offset={1}>
                        <Link smooth to='/#aboutMe' className="navbarLink">
                            <Menu.Item>
                                About Me
                            </Menu.Item>
                        </Link>
                    </Col>
                    <Col offset={1}>
                        <Link smooth to='#workExperiences' className="navbarLink">
                            <Menu.Item>
                                Work Experiences
                            </Menu.Item>
                        </Link>
                    </Col>
                    <Col offset={1}>
                        <Link smooth to='#projects' className="navbarLink">
                            <Menu.Item>
                                Selected Projects
                            </Menu.Item>
                        </Link>
                    </Col>
                    <Col offset={1}>
                        <Link smooth to='#myPassions' className="navbarLink">
                            <Menu.Item>
                                My Passions
                            </Menu.Item>
                        </Link>
                    </Col>
                    <Col offset={1}>
                        <Link smooth to='#contactMe' className="navbarLink">
                            <Menu.Item>
                                Contact Me
                            </Menu.Item>
                        </Link>
                    </Col>
            </Row>
        </Menu>
    );
}

export default Navbar;