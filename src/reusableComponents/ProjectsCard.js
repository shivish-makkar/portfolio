import React from 'react';
import {Button, Divider, Typography, Card, Row} from "antd";
import '../App.css';

const { Title, Paragraph } = Typography;

function ProjectsCard(props) {
    return (
        <Card className="projectsCard" hoverable>
            <Row justify="center">
                <Title className="title" level={3}>
                    {props.title}
                </Title>
            </Row>
            <Row justify="center">
                <Divider className="dividerProjectsCard"/>
            </Row>
            <Paragraph className="paragraphProjectsCard">
                {props.description}
            </Paragraph>
            <Row justify="center">
                <Button type="primary" className="buttonProjectsCard" href={props.href}>
                    {props.buttonText}
                </Button>
            </Row>
        </Card>
    );
}

export default ProjectsCard;