import React from "react";
import styled, { keyframes } from "styled-components";

const PODContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const rotate360 = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const ImgContainer = styled.img`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  animation: ${rotate360} infinite 120s linear;
`;

const TextWrapper = styled.p`
  font-size: 24px;
`;

const Header = styled(TextWrapper)`
  font-size: 40px;
  font-weight: bold;
  color: purple;
  text-transform: uppercase;
  text-align: center;
  text-decoration: underline;
`;

const POD = ({ data }) => {
  console.log(data);
  return (
    <PODContainer>
      <Header>Picture of the Day</Header>
      <ImgContainer src={data.url} alt={data.title} />
      <TextWrapper>Title: {data.title}</TextWrapper>
      <TextWrapper>Date {data.date}</TextWrapper>
      <TextWrapper>Description:</TextWrapper>
      <TextWrapper>{data.explanation}</TextWrapper>
    </PODContainer>
  );
};

export default POD;
