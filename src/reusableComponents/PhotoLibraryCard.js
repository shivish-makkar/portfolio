import React from 'react';
import { Card } from 'antd';
import '../App.css';

const { Meta } = Card;


function PhotoLibraryCard(props) {

    const { title, description, image, customStyle} = props;

    return (
        <li style={{
            display: 'inline-block',
            marginRight: '1rem',
        }}>
            <Card
                style={{ border: 'none'}}
                cover={
                    <img
                        alt="example"
                        src={image}
                        style={{...customStyle}}
                    />
                }
            >
                <Meta
                    title={title}
                    description={description}
                />
            </Card>
        </li>
    );
}

export default PhotoLibraryCard;