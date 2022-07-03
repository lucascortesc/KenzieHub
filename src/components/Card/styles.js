import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Inter";

  color: white;

  background-color: rgba(18, 18, 20, 1);

  height: 48px;

  border-radius: 4px;

  padding: 0 12px;

  &:hover {
    background-color: rgba(52, 59, 65, 1);
    cursor: pointer;
  }

  h1 {
    font-size: 14px;
    font-weight: 700;
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: rgba(134, 142, 150, 1);
  }
`;
