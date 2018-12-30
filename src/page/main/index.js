import React, { Fragment } from "react";
import AllContent from "../../components/allContent";

import { Container } from "./styles";
import GlobalStyle from "../../style/global";

import { connect } from "react-redux";

const Main = props => (
  <Fragment>
    <GlobalStyle
      backColor={props.app.backgroundColor}
      color={props.app.color}
    />
    <Container>
      <AllContent />
    </Container>
  </Fragment>
);

const mapStateToProps = state => ({
  app: state.app
});

export default connect(mapStateToProps)(Main);
