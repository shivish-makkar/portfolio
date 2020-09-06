import React from 'react';
import { Divider, Col, Row, Typography} from 'antd';

import '../App.css'

const { Title, Paragraph } = Typography;

// const downButton = (
//     <>
//     <Row style={{height: '82vh'}} />
// <Row justify="center">
//     <Col offset={12}>
//         <Space direction="vertical">
//             <Paragraph style={{color: '#f5f5f5', fontSize: '1rem'}}>Scroll Down</Paragraph>
//             <Link smooth to='/#aboutMe'>
//                 <div className="downArrow">
//                     <img src="/down-arrow.svg" alt="down-arrow" />
//                 </div>
//             </Link>
//         </Space>
//     </Col>
// </Row>
//         </>
// )

function ImageComponent(props) {
    return (
        <div id="home">
            <Row>
                {/*<Col>*/}
                {/*    <div className="filler" />*/}
                {/*</Col>*/}
                <Col>
                    <div className="landingImage">
                        <div className="landingText">
                            <Row style={{ height: '22vh'}} />
                            <Row justify="start">
                                <Col offset={1}>
                                    <Title> HELLO, I AM SHIVISH MAKKAR </Title>
                                </Col>
                            </Row>
                            <br/>
                            <Row justify="start">
                                <Col offset={4}>
                                <Divider className="divider" />
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <Row justify="start">
                                <Col offset={2}>
                                    <Paragraph>
                                        A SOFTWARE ENGINEER AND
                                    </Paragraph>
                                    <Paragraph>
                                        AN ASPIRING PRODUCT MANAGER
                                    </Paragraph>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                {/*<Button type="primary" className="landingButton"> Let's talk </Button>*/}
            </Row>
        </div>
    );
}

export default ImageComponent;