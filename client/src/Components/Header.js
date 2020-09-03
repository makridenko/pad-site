/* React components */
import React from 'react';

/* Style */
import styled from 'styled-components';

/* Styled components */
const StyledHeader = styled.div`
  text-align: center;
  background: rgba(0,0,0,0);
  color: white;
  font-size: 30px;
  height: 64px;
  display: flex;
  justify-content: center;
`;

const LogoContainer = styled.div`
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 121px;
  padding-right: 316px;
`;

const Logo = styled.img`
  width: 90px;
  height: 28px;
`;

const PageContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 23px;
`;

const PageLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 150%;
  letter-spacing: -0.05em;
`;

const SocialMediaContainer = styled.div`
  padding-right: 120px;
  padding-left: 352px;
  display: grid;
  grid-auto-flow: column;
  padding-top: 19px;
  padding-bottom: 21px;
`;

const SocialMediaLogo = styled.div`
  width: 24px;
  height: 24px;
  background: #fff;
  margin-right: 16px;
  border-radius: 5px;
`;


const Header = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo src='./logo.png' />
      </LogoContainer>
      <PageContainer>
        <PageLink href='#'>Музыка</PageLink>
        <PageLink href='#'>О группе</PageLink>
        <PageLink href='#'>Видео</PageLink>
        <PageLink href='#'>Контакты</PageLink>
      </PageContainer>
      <SocialMediaContainer>
        <SocialMediaLogo />
        <SocialMediaLogo />
      </SocialMediaContainer>
    </StyledHeader>
  );
};

export default Header;
