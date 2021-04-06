/* React */
import React from 'react';

/* Styles */
import styled from 'styled-components';

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
    grid-template-columns: repeat(5, 69px);
    grid-gap: 50px;
`;

const ButtonContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
`;

const MenuButton = styled.a`
    border-top: 4px solid rgba(0,0,0,0);
    padding-top: 16px;
    color: #fff;
    transition: 0.5s;
    text-decoration: none;

    &:hover {
        border-top: 4px solid #fff;
    }
`;


const MenuSection = () => {
    const sections = [
        {link: '/music', title: 'Музыка'},
        {link: '/about', title: 'О группе'},
        {link: '/shop', title: 'Мерч'},
        {link: '/video', title: 'Видео'},
        {link: '/contacts', title: 'Контакты'},
    ];
    return (
        <MenuContainer>
            <MenuContent>
                {sections.map(section => (
                    <ButtonContainer key={section.link}>
                        <MenuButton href={section.link}>
                            {section.title}
                        </MenuButton>
                    </ButtonContainer>
                ))}
            </MenuContent>
        </MenuContainer>
    );
};

export default MenuSection;