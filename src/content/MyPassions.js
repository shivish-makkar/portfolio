import React from 'react';
import { Col, Divider, Row, Typography } from "antd";

import '../App.css'
import PhotoLibraryCard from "../reusableComponents/PhotoLibraryCard";

const { Title, Paragraph } = Typography;

function MyPassions(props) {
    return (
        <div className="myPassions" id="myPassions">
            <br/>
            <br/>
            <Row justify="center">
                <Title className="title">My Passions</Title>
            </Row>
            <Row justify="center">
                <Divider className="dividerWorkEx"/>
            </Row>
            <br/>
            <Row justify="center">
                <Col>
                    <Title level={2} className="title"> Music </Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12} offset={1}>
                    <Paragraph className="paragraphAboutMe">
                        After a whole day of work, I always come back to music to help me relax and prepare for the next
                        day. I engage with music not just by listening it, but learning how to sing as well. I committed
                        to this goal in January 2020 by signing up in a class at my college. I was hoping to learn
                        some basics of singing and overcoming my fear of singing in front of other people.
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                       My voice is definitely still a work in progress, but I love the feeling of progress. Here's what
                        that has been so far:
                    </Paragraph>
                </Col>
            </Row>
            <br/>
            <Row justify="center">
                <Col>
                    <Title level={2} className="title"> Travelling </Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12} offset={1}>
                    <Paragraph className="paragraphAboutMe">
                        I travel for experiences. My parents took me to many different places while growing up, and as I
                        got older, I found travelling to be the primary reason for my wider perception of the world. I
                        am very proud to say that I have travelled to 23 countries so far. As an 18 year old, I backpacked
                        around seven countries in Europe for a month — and I did so absolutely alone! Meeting people from
                        native countries and travellers along the way from countries like Chile all the way to South
                        Korea and learning about the world through them was just an absolutely unparalleled experience.
                        It opened by eyes about the world we live in.
                    </Paragraph>
                    <Paragraph className="paragraphAboutMe">
                        And that's how travelling truly became a part of my identity. Some of my travel experiences:
                    </Paragraph>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col offset={3}>
                    <ul className="listStyling">
                    <PhotoLibraryCard
                        title="Grand Canyon, Arizona (2020)"
                        description=" The yearly winter break road trip with the family across nevada, arizona
                        and california. Got a chance to meet my parents' silicon valley friends!"
                        image="/travelPhotos/grand-canyon.jpg"
                        customStyle = {{
                            height: '20rem',
                            width: '25rem'
                        }}
                    />
                    <PhotoLibraryCard
                        title="Houston, Texas (2019)"
                        description="Spring break volunteering trip with fellow students from campus. We
                        helped rebuild houses still in shambles by the Hurricane Harvey."
                        image="/travelPhotos/volunteer-houston.jpg"
                        customStyle = {{
                            height: '20rem',
                            width: '27rem'
                        }}
                    />
                    <PhotoLibraryCard
                        title="Lviv, Ukraine (2018)"
                        description="A trip to the former soviet country Ukraine. It was like experiencing
                        my high school history textbook in real life."
                        image="/travelPhotos/ukraine.jpg"
                        customStyle = {{
                            height: '20rem',
                            width: '20rem'
                        }}
                    />
                    <PhotoLibraryCard
                        title="Berlin Wall, Germany (2018)"
                        description="Visiting this city was one of the most eye opening experience
                        I have had about WW1, WW2 and the aftermath of both the major events. I was
                        never formally taught about these in school, so the exposure I gained through
                        travelling in the city has been priceless."
                        image="/travelPhotos/berlin.jpg"
                        customStyle = {{
                            height: '14.5rem',
                            width: '20rem'
                        }}
                    />
                    <PhotoLibraryCard
                        title="Budapest, Hungary (2018)"
                        description="Learning about Hungarian culture and taking in the magical city
                        at the same time was an amazing experience. I also learnt about the Scandinavian
                        lifestyle in this city, as I bumped into some travellers from Finland."
                        image="/travelPhotos/budapest.jpg"
                        customStyle = {{
                            height: '15.9rem',
                            width: '20rem'
                        }}
                    />
                    <PhotoLibraryCard
                        title="Prague, Czech Republic (2018)"
                        description="I have a close relationship with Prague. I think the city is
                        beautifully designed and is absolutely phenomenal for pedestrians. This city
                        brought to surface some interest for Urban Planning in me."
                        image="/travelPhotos/prague.jpg"
                        customStyle = {{
                            height: '15.9rem',
                            width: '14rem',
                        }}
                    />
                    <PhotoLibraryCard
                        title="Abu Dhabi, UAE (2017)"
                        description="This picture is at the Sheikh Zayed Mosque. This was a country where I
                        learnt a lot about Islamic way of life. I learnt what Islam really meant and that
                        the middle eastern people are peaceful by nature. In hindsight, this experience
                        solidified my thoughts on acceptance in spite of disagreement."
                        image="/travelPhotos/uae.jpg"
                        customStyle = {{
                            height: '17.5rem',
                            width: '28rem',
                        }}
                    />
                    </ul>
                </Col>
            </Row>
            <br/>
            <br/>
        </div>
    );
}

export default MyPassions;