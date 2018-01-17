import React from "react";
import injectSheet from "react-jss";
const config = require("../../utils/config");

import Billboard from "../components/Billboard/";
import Footer from "../components/Footer/";

const styles = theme => ({
  main: {
    width: "100%",
    minHeight: "100vh",
    background: "#D0E0D8",
    backgroundImage: 'url("/img/background-bright.jpg")',
    backgroundPosition: "left bottom"
  }
});

class Index extends React.Component {
  componentWillMount() {}

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Billboard />
        <Footer />
      </div>
    );
  }
}

export default injectSheet(styles)(Index);
