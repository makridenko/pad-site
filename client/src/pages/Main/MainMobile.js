/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import Events from '../../components/Events';
import NewReleaseInfo from '../../components/NewReleaseInfo';
import MainButtons from '../../components/MainButtons';

/* UI-Kit */
import { Paragraph, TitleH1 } from '../../ui-kit/typography';

/* Helpers */
import { HalfContainer } from './helpers';

/* Styled Components */
const StyleMainMobile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const DescriptionContainer = styled.div`
    h1 {
        margin-bottom: 33px;
    }
`;


export const MainMobile = ({
    releaseId,
    isNewRelease, 
    setNewRelease, 
    bandDescription,
    releaseType,
    releaseTitle,
    releaseDescription,
    releasePhotoSrc,
}) => (
    <StyleMainMobile>
        <HalfContainer>
            <DescriptionContainer>
                <TitleH1 text={'фото и напитки'} />
                <Paragraph text={bandDescription} />
            </DescriptionContainer>
            <MainButtons 
                isNewRelease={isNewRelease}
                setNewRelease={setNewRelease}
            />
        </HalfContainer>
        <HalfContainer>
            {isNewRelease ?
                <NewReleaseInfo
                    releaseId={releaseId}
                    releaseType={releaseType}
                    releaseTitle={releaseTitle}
                    releaseDescription={releaseDescription}
                    releasePhotoSrc={releasePhotoSrc}
                />
                :
                <Events />
            }
        </HalfContainer>
    </StyleMainMobile>
);