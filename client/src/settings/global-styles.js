/* Styles */
import { createGlobalStyle } from 'styled-components';

/* settings */
import { device } from './css-devices';

export const GlobalStyles = createGlobalStyle`
    body {
        background-image: ${({theme}) => theme.mainBackground};

        @media ${device.mobile} {
            background: #1F1F1F;
        }
    }
`;

export const defaultMode = {
    mainBackground: '#1F1F1F',
};

export const photoMode = {
    mainBackground: 'url(http://localhost:8000/media/settings/band_photo.png)',
};