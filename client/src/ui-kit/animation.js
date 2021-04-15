/* Styles */
import { keyframes, css } from 'styled-components'

const appear = keyframes`
    from {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

export const animationAppear = css`
    animation: ${appear} 2s;
`;