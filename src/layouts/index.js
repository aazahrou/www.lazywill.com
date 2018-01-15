import React from "react";
import Helmet from "react-helmet";
import injectSheet from "react-jss";
import { MuiThemeProvider } from "material-ui/styles";

import theme from "../styles/theme";
import normalize from "normalize-jss";
import globals from "../styles/globals";

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { location, children } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Helmet>
            <html lang="en" />
          </Helmet>
          {children()}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default injectSheet(normalize)(injectSheet(globals)(Template));
