/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Router */
import { Switch, Route } from 'react-router-dom';

/* Settings */
import { routes } from '../../settings/routes';
import { device } from '../../settings/css-devices';

/* Helpers */
import ScrollToTop from './ScrollToTop';

/* Styled Components */
const StyledContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 120px 120px 167px 120px;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobile} {
        padding: 96px 16px 97px 16px;
        max-width: 375px;
    }
`;


const Content = () => (
    <StyledContent>
        <ScrollToTop />
        <Switch>
            <ContentContainer>
                {routes.map(route => (
                    <Route exact
                        key={route.link}
                        path={route.link}
                        component={() => route.component}
                    />
                ))}
            </ContentContainer>
        </Switch>
    </StyledContent>
);

export default Content;
