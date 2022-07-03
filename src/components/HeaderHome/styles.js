import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: rgba(18, 18, 20, 1);

  padding: 30px 15px;

  width: 100%;

  button {
    width: 68px;
    height: 32px;

    font-family: "Inter";
    font-size: 12px;
    font-weight: 600;

    color: rgba(248, 249, 250, 1);
    background-color: rgba(33, 37, 41, 1);

    border: none;
    border-radius: 4px;
  }
`;
