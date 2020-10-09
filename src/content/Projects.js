import React from 'react';
import { Col, Divider, Row, Typography} from "antd";
import ProjectsCard from "../reusableComponents/ProjectsCard";

import '../App.css'

const { Title } = Typography;

function Projects(props) {
    return (
        <div className="projects" id="projects">
            <br/>
            <br/>
            <Row justify="center">
                <Title className="title">Selected Projects</Title>
            </Row>
            <Row justify="center">
                <Divider className="divider"/>
            </Row>
            <br/>
            <Row justify="space-around">
                <Col span={10}>
                    <ProjectsCard
                        title="Badger Recommends"
                        description="An attempt at launching a Product in the market, in collaboration with with a
                        backend developer and designer. My responsibilities include the role of frontend developer
                        and product manager."
                        buttonText="Learn more"
                        href="/badgerRecommendsLearnMore"
                    />
                </Col>
                <Col span={10}>
                    <ProjectsCard
                        title="Weather App"
                        description="React application that interacts with the OpenWeatherMap API to give weather
                        data at the user's current location!"
                        buttonText="Visit it"
                        href="https://shivish-makkar.github.io/weather-app/"
                    />
                </Col>
                {/*<Col span={7}>*/}
                {/*    <ProjectsCard*/}
                {/*        title="Full Stack Web Scrapper"*/}
                {/*        description="Description"*/}
                {/*        buttonText="Visit it"*/}
                {/*        href="/badgerRecommendsLearnMore"*/}
                {/*    />*/}
                {/*</Col>*/}
            </Row>
            <br/>
            <br/>
        </div>
    );
}

export default Projects;