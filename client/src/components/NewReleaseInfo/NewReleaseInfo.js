/* React */
import React, { Fragment } from 'react';

/* Router */
import { Link } from 'react-router-dom';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { Button } from '../../ui-kit/Button';
import { Paragraph, TitleH1, TitleH3 } from '../../ui-kit/typography';

/* Settings */
import { device } from '../../settings/css-devices';

/* Icons */
import { ReactComponent as ArrowRight } from './icons/arrow-right.svg';
import NewReleaseCover from '../NewReleaseCover';

/* Styled Components */
const NewReleaseContainer = styled.div`
    width: 600px;
    border-top: 1px solid white;
    margin-top: 48px;
    display: flex;
    flex-direction: column;

    a {
        text-decoration: none;
    }

    h1 {
        font-weight: 500;
        font-size: 48px;
        margin-bottom: 24px;
    }

    h3 {
        margin-top: 46px;
        font-weight: 400;
    }

    p {
        max-width: 546px;
    }

    @media ${device.mobile} {
        width: 100%;
        
        h1 {
            font-weight: 400;
            font-size: 32px;
            line-height: 48px;
        }

        p {
            max-width: 343px;
        }

        img {
            margin-top: 24px;
            margin-bottom: 41px;
            width: 343px;
            height: 343px;
        }
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    width: 100%;

    @media ${device.desktop}, ${device.desktopS} {
        flex-direction: row-reverse;
        margin-top: 72px;
    }

    @media ${device.mobile} {
        flex-direction: row;
        margin-top: 48px;
        margin-bottom: 73px;
    }
`;

const NewReleaseInfo = ({
    releaseId,
    releaseType, 
    releaseTitle, 
    releaseDescription,
    releasePhotoSrc,
}) => (
    <NewReleaseContainer>
        <TitleH3 main={false} text={releaseType} />
        <TitleH1 text={releaseTitle} />
        {releasePhotoSrc ? <NewReleaseCover src={releasePhotoSrc} /> : <Fragment />}
        <Paragraph text={releaseDescription} />
        <ButtonContainer>
            <Link to={releaseType === 'Альбом' ? `/album/${releaseId}` : `/single/${releaseId}`}>
            <Button
                svg={<ArrowRight />}
                text={'Подробнее'}
            />
            </Link>
        </ButtonContainer>
    </NewReleaseContainer>
);

export default NewReleaseInfo;