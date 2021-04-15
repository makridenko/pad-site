/* Styles */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.mainBackground};
    }
`;

export const defaultMode = {
    mainBackground: '#1F1F1F',
};

export const photoMode = {
    mainBackground: 'url(https://www.teahub.io/photos/full/173-1736604_american-football-band-phone.jpg)',
};