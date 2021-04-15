/* React */
import React, { useContext } from 'react';

/* Styles */
import styled from 'styled-components';

/* UI-Kit */
import { Button } from '../../ui-kit/Button';

/* Settings */
import { device } from '../../settings/css-devices';

/* Context */
import { AppContext } from '../../App';

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

const MainButtons = ({isNewRelease, setNewRelease}) => {

    const { setWithPhoto } = useContext(AppContext);

    return (
        <ButtonsContainer>
            <Button
                active={isNewRelease ? false : true}
                text={'Выступления'}
                onClick={() => {
                    setWithPhoto(true);
                    setNewRelease(false);
                }}
            />
            <Button
                active={isNewRelease ? true : false}
                text={'Актуальное'}
                onClick={() => {
                    setWithPhoto(false);
                    setNewRelease(true);
                }}
            />
        </ButtonsContainer>
    );
};

export default MainButtons;