import React from "react";
import injectSheet from "react-jss";
const config = require("../../utils/config");

import Billboard from "../components/Billboard/";
import Footer from "../components/Footer/";

const styles = theme => ({
  main: {
    width: "100%",
    minHeight: "100vh",
    position: "relative"
  },
  bg: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    zIndex: "-1",
    "& img": {
      width: "100%",
      height: "100%"
    }
  }
});

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <div className={classes.bg}>
          <picture>
            <source
              type="image/webp"
              media="(min-width: 1024px)"
              srcSet={this.props.data.background2000Webp.resize.src}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={this.props.data.background2000.resize.src}
            />
            <source
              type="image/webp"
              media="(min-width: 600px)"
              srcSet={this.props.data.background1000Webp.resize.src}
            />
            <source
              media="(min-width: 600px)"
              srcSet={this.props.data.background1000.resize.src}
            />
            <source
              type="image/webp"
              srcSet={this.props.data.background500Webp.resize.src}
            />
            <img src={this.props.data.background500.resize.src} alt="" />
          </picture>
        </div>
        <Billboard data={this.props.data} />
        <Footer />
      </div>
    );
  }
}

export default injectSheet(styles)(Index);

export const pageQuery = graphql`
  query IndexQuery {
    phone300: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resolutions(toFormat: PNG, width: 300, quality: 90) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
    phone400: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resolutions(toFormat: PNG, width: 400, quality: 90) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
    phone500: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resolutions(toFormat: PNG, width: 500, quality: 90) {
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
    background500: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 500, height: 1500, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background1000: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 1000, height: 1500, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background2000: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(width: 2000, height: 1500, quality: 90, cropFocus: SOUTHWEST) {
        src
      }
    }
    background500Webp: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(
        width: 500
        height: 1500
        toFormat: WEBP
        quality: 90
        cropFocus: SOUTHWEST
      ) {
        src
      }
    }
    background1000Webp: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(
        width: 1000
        height: 1500
        toFormat: WEBP
        quality: 90
        cropFocus: SOUTHWEST
      ) {
        src
      }
    }
    background2000Webp: imageSharp(id: { regex: "/background.jpg/" }) {
      resize(
        width: 2000
        height: 1500
        toFormat: WEBP
        quality: 90
        cropFocus: SOUTHWEST
      ) {
        src
      }
    }
  }
`;
