/* React */
import React, { Fragment, useContext } from 'react';

/* Relay */
import { QueryRenderer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from '../../environment';

/* Styles */
import styled from 'styled-components';

/* Components */
import { MainDesktop } from './MainDesktop';
import { MainMobile } from './MainMobile';

/* Helpers */
import { useWindowWidth } from './helpers';

/* Settings */
import { device } from '../../settings/css-devices';
import { AppContext } from '../../App';

/* Styled Components */
const StyledMain = styled.div`
    @media ${device.desktop}, ${device.desktopS} {
        display: flex;
        flex-direction: row;
    }

    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
    }
`;

/* Query */
const MainQuery = graphql`
query MainQuery {
    lastRelease {
        id
        cover
        title
        aboutText
        isSingle
    }
}
`;


const Main = () => {

    const { isNewRelease, setNewRelease } = useContext(AppContext);

    // Get user screen width
    const { width } = useWindowWidth();
    
    // For toggle component MainDesktop and MainMobile
    const mobileScreen = width < 1280;

    const bandDescriptionText = 'Здесь должен быть какой-то текст на пару строк, может быть на даже на три, а может и на все четыре, я хз'

    return <QueryRenderer
        environment={environment}
        query={MainQuery}
        render={({error, props}) => {
            if (error) return <div>Упс! Ошибка</div>;
            if (!props) return <Fragment />;
            if (props) return (
                <StyledMain>
                    {mobileScreen ?
                        <MainMobile
                            releaseId={props.lastRelease?.id}
                            isNewRelease={isNewRelease}
                            setNewRelease={setNewRelease}
                            bandDescription={bandDescriptionText}
                            releaseType={props.lastRelease?.isSingle ? 'Сингл' : 'Альбом'}
                            releaseTitle={props.lastRelease?.title}
                            releaseDescription={props.lastRelease?.aboutText}
                            releasePhotoSrc={`http://localhost:8000/media/${props.lastRelease?.cover}`}
                        />
                        :
                        <MainDesktop
                            releaseId={props.lastRelease?.id}
                            isNewRelease={isNewRelease}
                            setNewRelease={setNewRelease}
                            bandDescription={bandDescriptionText}
                            releaseType={props.lastRelease?.isSingle ? 'Сингл' : 'Альбом'}
                            releaseTitle={props.lastRelease?.title}
                            releaseDescription={props.lastRelease?.aboutText}
                            releasePhotoSrc={`http://localhost:8000/media/${props.lastRelease?.cover}`}
                        />
                    }
                </StyledMain>
            );
        }}
        
    />;
};

export default Main;