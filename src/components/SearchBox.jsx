import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
  margin: 0 auto;
  font-size: 24px;
`;

const SearchBox = ({ handleFormSubmit }) => {
  return (
    <WrapperDiv>
      <form onSubmit={handleFormSubmit}>
        <input name="date" type="date" />
        <button type="submit">Search</button>
      </form>
    </WrapperDiv>
  );
};

export default SearchBox;
