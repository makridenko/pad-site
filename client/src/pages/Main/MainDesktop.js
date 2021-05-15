/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import Events from '../../components/Events';
import NewReleaseCover from '../../components/NewReleaseCover';
import NewReleaseInfo from '../../components/NewReleaseInfo';
import MainButtons from '../../components/MainButtons';

/* UI-Kit */
import { Paragraph, TitleH1 } from '../../ui-kit/typography';

/* Helpers */
import { HalfContainer } from './helpers';

/* Styled Components */
const StyledMainDesktop = styled.div`
    display: flex;
    width: 100%;
`;

const DescriptionContainer = styled.div`
    h1 {
        font-size: 60px;
        line-height: 60px;
        font-weight: 400;
        margin-bottom: 36px;
    }

    p {
        max-width: 453px;
    }
`;


export const MainDesktop = ({
    releaseId,
    isNewRelease, 
    setNewRelease, 
    bandDescription,
    releaseType,
    releaseTitle,
    releaseDescription,
    releasePhotoSrc,
}) => (
    <StyledMainDesktop>
        <HalfContainer>
            {isNewRelease ?
                <NewReleaseCover
                    src={releasePhotoSrc}
                />
                :
                <DescriptionContainer>
                    <TitleH1 text={'фото и напитки'} />
                    <Paragraph text={bandDescription} />
                </DescriptionContainer>
            }
        </HalfContainer>

        <HalfContainer>
            <MainButtons 
                isNewRelease={isNewRelease}
                setNewRelease={setNewRelease}
            />
            {isNewRelease ?
                <NewReleaseInfo
                    releaseId={releaseId}
                    releaseType={releaseType}
                    releaseTitle={releaseTitle}
                    releaseDescription={releaseDescription}
                />
                :
                <Events />
            }
        </HalfContainer>
    </StyledMainDesktop>
);