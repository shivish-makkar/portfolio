import React from 'react';
import {Card, Row, Col, Typography, Divider} from "antd";
import '../App.css'

const { Title, Paragraph } = Typography;

function WorkExperience(props) {
    return (
        <div className="workExperiences" id="workExperiences">
            <br/>
            <br/>
            <Row justify="center">
                <Title className="title">Work Experiences</Title>
            </Row>
            <Row justify="center">
                <Divider className="dividerWorkEx"/>
            </Row>
            <Row align="middle">
                <Col span={11}>
                    <Row justify="center">
                        <Card
                            className="uw-madison-logo"
                            cover=<img src="/datachat-logo.jpeg" alt="DataChat Logo"/>
                        />
                    </Row>
                </Col>
                <Col span={12} offset={1}>
                    <Title className="title" level={3}>
                        Software Engineering Intern
                    </Title>
                    <Paragraph className="paragraphAboutMe">
                        <div>
                            DataChat
                        </div>
                        <div style={{ fontStyle: 'italic'}}>
                            November 2020 – May 2021
                        </div>
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        This internship was where I was not only able to fully apply what I learnt in school, but
                        I also had the amazing opportunity to learn what school hadn't taught me yet.
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        Not only was I able to take my react.js skills to another level by interacting with an extremely
                        complex codebase, I was also able to interact with technologies such as Redux and Sagas. I was
                        also able to apply UI/UX design principles that I was learning the very same semester. While I
                        focused mostly on the frontend for the first few months, I pushed myself to interact with the
                        backend technologies in the later couple months.
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        This opportunity improved my technical skills many-fold, but it also taught me how to effectively
                        work collaboratively within an organization to deliver the best results, something of extremely
                        high value in this fast-paced startup.
                    </Paragraph>
                </Col>
            </Row>
            <Row align="middle">
                <Col span={11}>
                    <Row justify="center">
                        <Card
                            className="uw-madison-logo"
                            cover=<img src="/uw-madison-logo.jpg" alt="UW-Madison Logo"/>
                        />
                    </Row>
                </Col>
                <Col span={12} offset={1}>
                    <Title className="title" level={3}>
                        Student Assistant (Web Development and Project Management)
                    </Title>
                    <Paragraph className="paragraphAboutMe">
                        <div>
                            Office of Data Management and Analytics at UW-Madison
                        </div>
                        <div style={{ fontStyle: 'italic'}}>
                            January 2020 – November 2020
                        </div>
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        I update and maintain the ODMAS website periodically in collaboration with a Communications
                        specialist. A major part of my work has been about integrating accessibility features on the
                        website. This is where we understood the problems our target demographic (differently-abled
                        people) face when using a website, and integrated necessary features to make their experience
                        smoother. We also tested our website based on Web Content Accessibility Guidelines, an
                        internationally recognized standard.
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        Apart from this, I have been collaborating with the Project Manager for the Cloud Migration
                        project to improve resource tracking and scheduling. We iterated on solutions to minimize
                        backlog and create accurate timelines.
                    </Paragraph>
                </Col>
            </Row>
            <br/>
            <Row align="middle">
                <Col span={11}>
                    <Row justify="center">
                        <Card
                            className="netro-logo"
                            cover=<img src="/netro-logo.png" alt="Logo of Netro Networks"/>
                        />
                    </Row>
                </Col>
                <Col span={12} offset={1}>
                    <Title className="title" level={3}>
                        Software Developer Educational Intern
                    </Title>
                    <Paragraph className="paragraphAboutMe">
                        <div>
                            Netro Networks Private Limited
                        </div>
                       <div  style={{ fontStyle: 'italic'}}>
                           June 2019 – August 2019
                       </div>
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        In this internship, our team of three interns had two primary responsibilities. These were to
                        market the company's hardware offerings and teach data structures and programming fundamentals
                        to current lower skilled tech support employees of the company.
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        I collaborated with other interns
                        to design a marketing campaign first and once some customers were acquired, we designed a
                        curriculum that would be relevant for tech support. We included data structures and programming
                        fundamentals, computer science terminology and finally fundamental understanding of our product.
                    </Paragraph>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
    );
}

export default WorkExperience;