/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

/* Router */
import { Link } from 'react-router-dom';

/* Helpers */
import { sections } from '../../settings/navbar-sections';

/* Styled Components */
const MenuContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const MenuContent = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(5, 70px);
    grid-gap: 50px;
`;

const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    border-top: 4px solid rgba(0,0,0,0);
    transition: 0.5s;
    color: #fff;

    a {
        padding-top: 16px;
        color: #fff;
        text-decoration: none;

        font-family: Montserrat;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: -5%;
    }

    &:hover {
        border-top: 4px solid #fff;
    }
`;


const MenuSection = () => {
    return (
        <MenuContainer>
            <MenuContent>
                {sections.map(section => (
                    <ButtonContainer key={section.link}>
                        <Link to={section.link}>{section.title}</Link>
                    </ButtonContainer>
                ))}
            </MenuContent>
        </MenuContainer>
    );
};

export default MenuSection;