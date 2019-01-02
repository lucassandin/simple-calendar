import styled from "styled-components";
import store from "../../store/store";

export const StyledForm = styled.div`
  padding: 100px;
  border: 1px solid red;
  color: ${props => (store.getState().app.color ? "#353535" : "#353535")};
`;
