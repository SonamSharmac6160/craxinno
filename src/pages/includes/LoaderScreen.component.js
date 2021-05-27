import React, { Component } from "react";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";

import * as Styled from "../page.styled";

/*
 TYPES
*/

type Props = {};
class LoaderScreen extends Component<Props> {
  render() {
    return ( 
      <Styled.loaderSpinner className="black-body">
        <Styled.loaderSpinnerChild>
          <Spinner color="#e30813" size={36} speed={1} animating={true} />
        </Styled.loaderSpinnerChild>
      </Styled.loaderSpinner>
    );
  }
}
export default LoaderScreen;
