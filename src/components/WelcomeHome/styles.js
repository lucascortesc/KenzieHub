import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  font-family: "Inter";

  color: white;
  background-color: rgba(18, 18, 20, 1);

  padding: 30px 15px;

  width: 100%;

  gap: 10px;

  border-top: 2px solid rgba(33, 37, 41, 1);
  border-bottom: 2px solid rgba(33, 37, 41, 1);
  h1 {
    font-size: 18px;
    font-weight: 700;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;

    color: rgba(134, 142, 150, 1);
  }
`;
