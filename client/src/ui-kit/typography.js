/* React */
import React, { Fragment } from 'react';

/* Styles */
import styled from 'styled-components';

/* Styled Components */
const StyledTitleH1 = styled.h1`
    margin: 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -0.05em;
    color: #FFFFFF;
`;

const StyledTitleH2 = styled.h2`
    margin: 0;
    font-family: Montserrat;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.05em;
    color: #FFFFFF;
`;

const StyledTitleH3 = styled.h3`
    margin: 0;
    font-family: Montserrat;
    font-weight: ${props => props.thin ? '400' : '700'};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.05em;
    color: ${props => props.main ? '#FFFFFF' : '#656565'};

    a {
        text-decoration-line: underline;
        color: #fff;
    }
`;

const StyledParagraph = styled.p`
    margin: 0;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.05em;
    color: #FFFFFF;
`;

const StyledPre = styled.pre`
    margin: 0;
`;


export const TitleH1 = ({text}) => (
    <StyledTitleH1>
        {text}
    </StyledTitleH1>
);

export const TitleH2 = ({text}) => (
    <StyledTitleH2>
        {text}
    </StyledTitleH2>
);

export const TitleH3 = ({text, main, thin}) => (
    <StyledTitleH3 main={main} thin={thin}>
        {text}
    </StyledTitleH3>
);

export const TitleH3Link = ({text, main, link}) => (
    <StyledTitleH3 main={main}>
        <a href={link}>{text}</a>
    </StyledTitleH3>
);

export const Paragraph = ({text, pre}) => (
    <Fragment>
        {pre ? 
            <StyledPre>
                <StyledParagraph>{text}</StyledParagraph>
            </StyledPre>
            : 
            <StyledParagraph>{text}</StyledParagraph>
        }
    </Fragment>
);