import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const SpanLC = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const SpanCC = styled.span`
  cursor: pointer;
  margin-right: 5%;

  :last-child {
    margin-right: 0;
  }

  :hover {
    text-decoration: underline;
  }
`;
const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const SpanRC = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Header>
      <Container>
        <LeftContainer>
          <SpanLC>TOPICS</SpanLC>
          <SpanLC>SEARCH</SpanLC>
        </LeftContainer>
        <CenterContainer>
          <SpanCC>GENERAL</SpanCC>
          <SpanCC>BROWNBAG</SpanCC>
          <SpanCC>RANDOM</SpanCC>
          <SpanCC>MUSIC</SpanCC>
          <SpanCC>ANNOUNCEMENTS</SpanCC>
        </CenterContainer>
        <RightContainer>
          <SpanRC>LOG IN</SpanRC>
        </RightContainer>
      </Container>
    </Header>
  );
};

export default TopBar;
