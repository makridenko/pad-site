/* React */
import React, { Fragment } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';

/* Components */
import OneStory from './OneStory';

/* Styled Components */
const StoryLineContainer = styled.div`
    width: 100%;
    margin-top: 48px;
    border-top: 1px solid #fff;
`;

const StoryLineQuery = graphql`
query StoryLineQuery {
    stories {
        edges {
            node {
                id
                onlyYear
                photo
                text
            }
        }
    }
}
`;


const StoryLine = () => <QueryRenderer
    environment={environment}
    query={StoryLineQuery}
    render={({error, props}) => {
        if (error) return <div>Упс! Ошибка</div>;
        if (!props) return <Fragment />;
        if (props) return (
            <StoryLineContainer>
                {props.stories.edges.map(edge => <OneStory 
                    key={edge.node.id}
                    year={edge.node.onlyYear}
                    text={edge.node.text}
                    photoSrc={edge.node.photo}
                />)}
            </StoryLineContainer>
        );
    }}
/>;

export default StoryLine;