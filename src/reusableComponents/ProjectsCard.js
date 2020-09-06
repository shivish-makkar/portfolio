import React from 'react';
import {Button, Divider, Typography, Card} from "antd";
import '../App.css';

const { Title, Paragraph } = Typography;

function ProjectsCard(props) {
    return (
        <Card className="projectsCard" hoverable>
            <Title className="title" level={3}>
                {props.title}
            </Title>
            <Divider className="dividerProjectsCard"/>
            <Paragraph className="paragraphProjectsCard">
                {props.description}
            </Paragraph>
            <Button type="primary" className="buttonProjectsCard" href={props.href}>
                {props.buttonText}
            </Button>
        </Card>
    );
}

export default ProjectsCard;