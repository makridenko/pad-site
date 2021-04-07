/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Components */
import Events from './Events';
import Title from './Title';
import Text from './Text';

/* UI-Kit */
import { device } from '../../ui-kit/css-devices';
import { ReactComponent as Line } from '../../ui-kit/line.svg';
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
        width: 100%;
    }
`;

const RightContainer = styled.div`
    @media ${device.desktop} {
        width: 50%;
    }

    @media ${device.mobile} {
        width: 100%;
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


const Main = () => {
    return (
        <StyledMain>
            <LeftContainer>
                <Title text={'фото и напитки'} />
                <Text 
                    text={'Здесь должен быть какой-то текст на пару строк, может быть на даже на три, а может и на все четыре, я хз'} 
                />
            </LeftContainer>
            <RightContainer>
                <ButtonsContainer>
                    <Button active={true} text={'Выступления'} />
                    <Button text={'Новый релиз'} />
                </ButtonsContainer>
                <Events />
            </RightContainer>
        </StyledMain>
    );
};

export default Main;