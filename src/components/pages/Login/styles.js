import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Inter";

  padding: 42px 0;

  width: 369px;
  min-height: 502px;

  color: white;
  background-color: rgba(33, 37, 41, 1);

  box-sizing: border-box;
  border-radius: 4px;

  .container__Input {
    display: flex;
    flex-direction: column;

    width: 330px;
  }

  h1 {
    color: rgba(248, 249, 250, 1);
    font-weight: 700;
    font-size: 18px;

    margin-bottom: 28px;
  }

  label {
    color: rgba(248, 249, 250, 1);
  }

  input {
    width: 100%;

    outline-color: white;

    border: none;
    border-radius: 4px;

    background-color: rgba(52, 59, 65, 1);
    color: rgba(248, 249, 250, 1);

    padding-left: 15px;
  }

  button,
  h2 {
    width: 330px;
    height: 48px;

    font-size: 16px;
    font-weight: 500;

    color: white;
    background-color: rgba(255, 87, 127, 1);

    border: none;
    border-radius: 4px;

    margin-top: 10px;

    text-align: center;
    line-height: 48px;

    cursor: pointer;
  }

  .cadastrar {
    background-color: rgba(134, 142, 150, 1);
  }

  p {
    font-size: 12px;

    color: rgba(134, 142, 150, 1);

    margin-top: 32px;
    margin-bottom: 22px;
  }

  .erro {
    margin-bottom: 10px;
    font-size: 12px;
    color: red;
  }

  .MuiFormControl-root {
    margin-bottom: 26px;
  }

  @media screen and (max-width: 480px) {
    width: 296px;

    .container__Input {
      width: 264px;
    }

    button,
    h2 {
      width: 264px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 36px;

  min-height: 100vh;

  background-color: rgba(18, 18, 20, 1);
`;
