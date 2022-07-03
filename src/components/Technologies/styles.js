import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "Inter";

  color: white;
  background-color: rgba(18, 18, 20, 1);

  padding: 30px 0;

  width: 100%;

  h1 {
    font-size: 16px;
    font-weight: 600;
  }

  path {
    cursor: pointer;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  padding: 22px 8.5px;

  background-color: rgba(33, 37, 41, 1);

  border-radius: 4px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 30px 15px;

  background-color: rgba(18, 18, 20, 1);
`;
