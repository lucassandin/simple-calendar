import styled from "styled-components";
import store from "../../store/store";

export const StyledContentList = styled.div`
  color: ${() => (store.getState().app.color ? "#353535" : "#353535")};
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 5px #a1a1a1;
  margin: 0 0 0 20px;
  overflow-y: scroll;
  height: 300px;

  h3 {
    padding: 0;
    margin: 0;
  }

  input {
    display: flex;
    width: 100%;
    padding: 5px;
    margin: 10px 0;
  }

  ul {
    list-style: none;
    border-bottom: 1px solid #d8d8d8;
    padding: 5px 0;
    margin: 0 0 5px 0;
    font-size: 11px;
  }

  li button {
    display: flex;
    width: 100%;
    justify-content: center;

    &:active {
      background: #9a96ff;
    }
  }

  span {
    font-size: 14px;
  }
`;
