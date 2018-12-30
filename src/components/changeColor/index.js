import React, { Fragment } from "react";
import { StyledColor } from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as AppActions from "../../store/actions/app";

const Color = props => {
  return (
    <Fragment>
      <StyledColor>
        <label>
          <input
            defaultChecked
            type="radio"
            name="color"
            onClick={() => props.alterTheme("#c5c5c5")}
          />{" "}
          Light
        </label>
        <label>
          <input
            type="radio"
            name="color"
            onClick={() => props.alterTheme("#505050")}
          />{" "}
          Black
        </label>
      </StyledColor>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  app: state.app
});

const mapDispatchToProps = dispatch => bindActionCreators(AppActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color);
