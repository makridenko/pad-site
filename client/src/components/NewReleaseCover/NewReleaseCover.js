/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const CoverContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.desktop} {
        margin-top: 96px;
    }

    @media ${device.mobile} {
        margin-top: 24px;
    }
`;

const StyledCover = styled.img`
    @media ${device.desktop} {
        width: 262px;
        height: 262px;
    }

    @media ${device.mobile} {
        width: 343px;
        height: 343px;
    }
`;


const NewReleaseCover = ({src}) => {
    return (
        <CoverContainer>
            <StyledCover src={src} />
        </CoverContainer>
    )
};

export default NewReleaseCover;