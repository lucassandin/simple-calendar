import styled from "styled-components";
import store from "../../store/store";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-shadow: 0 0 3px #a1a1a1;
  color: #353535;
  color: ${() => (store.getState().app.color ? "#353535" : "#353535")};

  h3 {
    padding: 5px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  input {
    padding: 5px;
    margin: 10px 0;
  }

  button {
    padding: 5px;
    border: none;
    background: #9a96ff78;
    margin: 5px 0;
    color: #fff;
    font-size: 13px;
  }
`;
