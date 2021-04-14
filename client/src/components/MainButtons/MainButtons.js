/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { Button } from '../../ui-kit/Button';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
const ButtonsContainer = styled.div`
    display: flex;

    @media ${device.mobile} {
        margin-top: 48px;

        button {
            width: 172px;
        }
    }
`;

const MainButtons = ({isNewRelease, setNewRelease}) => (
    <ButtonsContainer>
        <Button
            active={isNewRelease ? false : true}
            text={'Выступления'}
            onClick={() => setNewRelease(false)}
        />
        <Button
            active={isNewRelease ? true : false}
            text={'Актуальное'}
            onClick={() => setNewRelease(true)}
        />
    </ButtonsContainer>
);

export default MainButtons;