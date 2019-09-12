import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin: 0 auto;
  font-size: 24px;
`;

const Typography = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const SearchBox = ({ handleFormSubmit }) => {
  return (
    <WrapperDiv>
      <Typography>Or search for image by date</Typography>
      <form onSubmit={handleFormSubmit}>
        <input name="date" type="date" />
        <button type="submit">Search</button>
      </form>
    </WrapperDiv>
  );
};

export default SearchBox;
