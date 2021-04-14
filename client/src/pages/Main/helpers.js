/* React */
import { useEffect, useState } from 'react';

/* Styles */
import styled from 'styled-components';

/* Settings */
import { device } from '../../settings/css-devices';

/* Styled Components */
export const HalfContainer = styled.div`
    width: 50%;

    @media ${device.mobile} {
        width: 100%;
    }
`;

const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return {
        width,
    };
};

export const useWindowWidth = () => {
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