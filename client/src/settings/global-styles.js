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
    mainBackground: 'url(https://www.teahub.io/photos/full/173-1736604_american-football-band-phone.jpg)',
};