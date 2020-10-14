import React, {useState} from 'react';
import {Divider, Menu, Row, Col, Typography, Affix, Layout,} from 'antd';

import '../App.css'
import Navbar from "../pageLayout/Navbar";
import AppFooter from "../pageLayout/appFooter";

const {Title, Paragraph} = Typography;
const { Header, Footer, Content } = Layout;


function BadgerRecommendsLearnMore() {

    const [menu, setMenu] = useState('product');

    const handleClick = (e) => {
        setMenu(e.key);
    };

    const product =
        <>
            <Row justify="center" style={{marginTop: '1rem', marginBottom: '0'}}>
                <Title level={2}> Selected Product Screenshots </Title>
            </Row>
            <Row justify="center" style={{marginTop: '0'}}>
                <Divider className="divider"/>
            </Row>
            <br/>

            <Row justify="start">
                <Col offset={2}>
                    <Paragraph style={{ fontSize: '1.5rem'}}> 1) Landing Page </Paragraph>
                </Col>
            </Row>
            <Row justify="center">
                <img src='/badgerScreenshots/landing-page.png' alt="Screenshot 1" className="productScreenshots"
                     style={{height: '800px'}}/>
            </Row>
            <br/>
            <br/>
            <Row justify="start">
                <Col offset={2}>
                    <Paragraph style={{ fontSize: '1.5rem'}}> 2) The Sign Up Process </Paragraph>
                </Col>
            </Row>
            <Row justify="center">
                <img src='/badgerScreenshots/sign-up-process.png' alt="Screenshot 2" className="productScreenshots"
                style={{height: '600px'}}/>
            </Row>
            <br/>
            <br/>
            <Row justify="start">
                <Col offset={2}>
                    <Paragraph style={{ fontSize: '1.5rem'}}> 3) Home Page  </Paragraph>
                </Col>
            </Row>
            <Row justify="center">
                <img src='/badgerScreenshots/home-page.png' alt="Screenshot 2" className="productScreenshots"
                style={{height: '1200px'}}/>
            </Row>
            <br/>
            <br/>
            <Row justify="start">
                <Col offset={2}>
                    <Paragraph style={{ fontSize: '1.5rem'}}> 4) Class Page  </Paragraph>
                </Col>
            </Row>
            <Row justify="center">
                <img src='/badgerScreenshots/class-page.png' alt="Screenshot 2" className="productScreenshots"
                     style={{height: '1000px'}}/>
            </Row>
        </>;

    const designProcess = (
        <>
            <Row justify="center">
                <Title level={3}> The Idea </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    As a college student, I never liked the idea of taking a class without a clear direction
                    of what I was getting into. The 50 word descriptions didn't clear all my concerns.
                </Paragraph>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    What if the professor is not the ideal one for me? What if
                    this class doesn't really give me practical skills? What if I have a wrong perception
                    of this class?
                </Paragraph>
            </Row>
            <Row justify="center">
                <Title level={3}> Is this an actual problem? </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    Before trying to solve a problem that exists for just one person like me, I set out to
                    find if other students faced similar problems. Even after giving confirmation bias a
                    serious consideration, we found that YES, it does exist. Below are the survey results of
                    200 people from our target market.
                </Paragraph>
            </Row>
            <Row justify="center">
                <img src='/surveyResults/how-hard-class-enrollment.jpg' alt="Survery Result 1" className="surveyResult"/>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    We found that yes, it was actually somewhat hard for most of the other students too. We also
                    discovered that students can spend on average 4-5 hours trying to figure out their class schedule.
                    Some students even spent more than 10 hours every semester for the same.
                </Paragraph>
            </Row>
            <Row justify="center">
                <img src='/surveyResults/hours-spent.jpg' alt="Survery Result 2" className="surveyResult"/>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    Knowing all well that we weren't the first people to find this problem, we turned to RateMyProfessor
                    (a widely recognized website in the same space) to see what people felt about their product.
                </Paragraph>
            </Row>
            <Row justify="center">
                <img src='/surveyResults/ratemyprof-usefullness.jpg' alt="Survery Result 3" className="surveyResult"/>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    Turns out RateMyProfessor is a product that provides solution about half of the times. I would say
                    that is a surprising result, but our qualitative data and personal experiences of being students
                    validated this survey result. However, there was one question that we were still baffling with.
                    Why? Why does a product so clearly in demand and so widely recognized is actually failing?
                </Paragraph>
            </Row>
            <Row justify="center">
                <img src='/surveyResults/ratemyprof-reviews-number.jpg' alt="Survery Result 4" className="surveyResult"/>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    We realised there is a simple answer to that. People rarely post reviews anymore. That is why
                    the number of reviews available are low, and the reviews that do exist come from people with
                    extreme feelings about a given professor.
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Title level={3}> Defining Customer Segment </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    After validating the problems, we sought to narrow down our customer base into customer segments.
                    Even though our target market is well defined to that of college students, we focused on
                    breaking that down into more focused customer segments. Some larger distributions included geographic
                    segmentation – college students in the Midwest, West Coast, South etc. However, since our product is
                    university specific,
                    we wanted to test an MVP in just one college before rolling this product out everywhere. We picked
                    our college – UW-Madison. We defined our customer segment at UW-Madison based on the degree of
                    academic involvement of a student. Thus, we identified and listed those students through the metrics
                    of Campus Involvement, Dean's List Mentions, Scholarship Status among other things. We plan on using
                    this focused market segment to test our MVP.
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Title level={3}> Designing a Solution </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    Using user experience stories made with the help of the quantitative data received from the survey
                    and qualitative data received from interaction with target market, we found certain features which
                    would be essential to streamline class decision process for many students.
                </Paragraph>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    <ul>
                        <li> In depth class reviews</li>
                        <li> Personalized class recommendations </li>
                        <li> Informal platform to connect with classmates </li>
                        <li> Connect with people who are taking class with the user </li>
                        <li> Connect with people who have taken the class previously </li>
                        <li> Centralized repository of all class related information </li>
                        <li> List of easiest classes </li>
                        <li> List of most loved classes </li>
                        <li> List of never-to-take classes </li>
                    </ul>
                </Paragraph>
            </Row>
            <Row justify="center">
                <Title level={3}> Prioritizing Features </Title>
            </Row>
            <Row justify="center">
                <img src='/surveyResults/feature-list.jpg' alt="Survery Result 5" className="surveyResult"/>
            </Row>
            <br/>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    By going back to the users and asking what they would like,
                    and considering development complexity, we ended up
                    prioritizing features to just these two:
                    <ul>
                        <li> In depth class reviews</li>
                        <li>BadgerConnect: Find the perfect study partner specifically for you.</li>
                    </ul>
                </Paragraph>
            </Row>
            <Row justify="center">
                <Title level={3}> Delivering an MVP </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    Our first iteration is due to launch towards the end of October 2020, so stay tuned!
                </Paragraph>
            </Row>
        </>
    );

    const technicalProcess = (
        <>
            <Row justify="start" align="top">
                <Col offset={5}>
                    <Title level={3}> Tech Stack: </Title>
                </Col>
                <Col offset={1}>
                    <Paragraph className="paragraphAboutMe">
                        MongoDB, Express.js, React and Node.js
                    </Paragraph>
                </Col>
            </Row>
            <Row justify="center">
                <Title level={3}>  </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    Since this is a team project, we decided to divide technical responsibilities as: Frontend
                    Developer and Backend Developer. In order to be successful with this categorization, we
                    ensured proper communication about the technical progress about our respective
                    parts of the application.
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Col>
                    <Title level={3}> Frontend Development </Title>
                </Col>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    We first designed a basic wireframe alongside our Product Design Process. Now that design was ready
                    to be coded up as the main GUI. I took up this job by first learning React and deliver a coded
                    wireframe with functioning linkage between pages. Having little idea about design principles, I watched
                    a few lectures and tutorials about the same but found that the product was not looking
                    aesthetically appealing. This is when we decided to work with a designer for how our elements
                    should look like. The outcome of this design process will be evident in our first MVP!
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Col>
                    <Title level={3}> Backend Development </Title>
                </Col>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    While the frontend development was being handled by me, my teammate simultaneously worked on the
                    backend. He formalized the data schemas we designed by coding those up in the form of
                    objects and interfaces. Then authorization, search algorithms and a database with web
                    scraped data were set up. API end points were given to connect to the frontend.
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Title level={3}> Incorporating Design </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    This is where we reached out to find an external designer who can help make our
                    product more aesthetically pleasing. After some ideas, we finalized a design language, and
                    are in the process of using this collaboration to implement the philosophies and visuals in
                    our product. This is happening in conjunction with our next phase.
                </Paragraph>
            </Row>
            <br/>
            <Row justify="center">
                <Title level={3}> Integration of Backend and Frontend </Title>
            </Row>
            <Row justify="center">
                <Paragraph className="paragraphAboutMe">
                    This is where we currently are, indeed very close to a full functioning application. We are in the
                    process of connecting api end points from the backend to fetch user data at the frontend,
                    sending user data to the backend, integrating required server logic and lastly, adding logic to
                    improve user experience based on our defined user stories.
                </Paragraph>
            </Row>
        </>
    );

    let output = product;

    if (menu === 'product') {
        output = product;
    } else if (menu === 'designProcess') {
        output = designProcess;
    } else if( menu === 'technicalProcess'){
        output = technicalProcess;
    }
    return (
        <div className="learnMore">
            <Layout style={{maxWidth: "100vw"}}>
                <Affix offsetTop={0}>
                    <Header>
                        <Navbar/>
                    </Header>
                </Affix>

                <Content>
                    <br/>
                    <br/>
                    <Row justify="center">
                        <Title> Badger Recommends </Title>
                    </Row>
                    <br/>
                    <Row justify="center">
                        <Menu
                            onClick={handleClick}
                            selectedKeys={menu}
                            mode="horizontal"
                            style={{width: '58vw'}}
                        >
                            <Menu.Item key='product' style={{width: '30%', marginRight: '10px', marginLeft: '10px'}}>
                                Product
                            </Menu.Item>
                            <Divider type="vertical" style={{ height: '100%'}}/>
                            <Menu.Item key='designProcess' style={{width: '30%',marginRight: '10px', marginLeft: '10px'}}>
                                Product Design Process
                            </Menu.Item>
                            <Divider type="vertical" style={{ height: '100%'}}/>
                            <Menu.Item key='technicalProcess' style={{width: '30%',marginRight: '10px', marginLeft: '10px'}}>
                                Technical Implementation Process
                            </Menu.Item>
                        </Menu>
                    </Row>
                    <br/>
                    {output}
                    <br/>
                    <br/>
                </Content>

                <Footer style={{background: '#dcdcdc'}}>
                    <AppFooter />
                </Footer>
            </Layout>
        </div>
    );
}

export default BadgerRecommendsLearnMore;