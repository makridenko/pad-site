/* React */
import React, { Fragment, useEffect, useState } from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import Events from './Events';
import Title from './Title';
import Text from './Text';
import NewReleaseCover from './NewReleaseCover';
import NewReleaseInfo from './NewReleaseInfo';
import { InfoTitle, InfoContent } from './NewReleaseInfo';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { Button } from '../../ui-kit/Button';

/* Styled Components */
const StyledMain = styled.div`
    width: 100%;
    height: 100%;

    @media ${device.desktop} {
        display: flex;
        flex-direction: row;
        margin-top: 120px;
    }

    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
    }
`;

const LeftContainer = styled.div`
    @media ${device.desktop} {
        width: 50%;
    }

    @media ${device.mobile} {
        width: 344px;
    }
`;

const RightContainer = styled.div`
    @media ${device.desktop} {
        width: 50%;
    }

    @media ${device.mobile} {
        width: 344px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;

    @media ${device.mobile} {
        margin-top: 48px;

        button {
            width: 172px;
        }
    }
`;


const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return {
        width,
    };
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth());

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
};


const Main = () => {

    // Hook for change page content
    const [isNewRelease, setNewRelease] = useState(false);

    // Get user screen width
    const { width } = useWindowWidth();

    const mobileScreen = width < 1440;

    return (
        <StyledMain>
            <LeftContainer>
                {isNewRelease && !mobileScreen ? 
                    <NewReleaseCover 
                        src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                    />
                    :
                    <Fragment>
                        <Title text={'фото и напитки'} />
                        <Text 
                            text={'Здесь должен быть какой-то текст на пару строк, может быть на даже на три, а может и на все четыре, я хз'} 
                        />
                    </Fragment>
                }
            </LeftContainer>
            <RightContainer>
                <ButtonsContainer>
                    <Button 
                        active={isNewRelease ? false : true} 
                        text={'Выступления'}
                        onClick={() => setNewRelease(false)}
                    />
                    <Button 
                        active={isNewRelease ? true : false} 
                        text={'Последний релиз'}
                        onClick={() => setNewRelease(true)}
                    />
                </ButtonsContainer>
                {isNewRelease ?
                    <Fragment>
                        {mobileScreen ?
                            <Fragment>
                                <InfoTitle />
                                <NewReleaseCover 
                                    src={'https://sun9-15.userapi.com/impg/c857216/v857216810/100990/KBndW950a6k.jpg?size=2160x2160&quality=96&sign=2026cfd599af1392a531791d1ad83e26&type=album'}
                                /> 
                                <InfoContent />
                            </Fragment>
                            : 
                            <Fragment />
                        }
                        <NewReleaseInfo />
                    </Fragment>
                    :
                    <Events />
                }
            </RightContainer>
        </StyledMain>
    );
};

export default Main;