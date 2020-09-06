import React from 'react';
import { Button, Divider, Row, Typography } from "antd";

import '../App.css'

const { Title, Paragraph } = Typography;

function ContactMe(props) {
    return (
        <div className="contactMe" id="contactMe">
            <br/>
            <br/>
            <Row justify="center">
                <Title className="title">Contact Me</Title>
            </Row>
            <Row justify="center">
                <Divider className="divider"/>
            </Row>
            <br/>
            <Row justify="center">
                <div style={{width: '3rem', height: '3rem'}}>
                    <img src="/contact-icon.svg" alt="Message Icon" />
                </div>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph className="paragraphContactMe">
                    Whether you have any interesting projects, or just want to say hi, please feel free to drop me a
                    message.
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Button type="primary" className="contactMeButton" href="mailto:makkar@wisc.edu">Send me an Email!</Button>
            </Row>
            <br/>
            <br/>
        </div>
    );
}

export default ContactMe;