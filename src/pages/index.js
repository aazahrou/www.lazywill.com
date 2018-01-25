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
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Billboard data={this.props.data} />
        <Footer />
      </div>
    );
  }
}

export default injectSheet(styles)(Index);

export const pageQuery = graphql`
  query IndexQuery {
    phonePNG300: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 300, toFormat: PNG) {
              src
              aspectRatio
              originalName
            }
          }
        }
      }
    }
    phonePNG400: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 400, toFormat: PNG) {
              src
              aspectRatio
              originalName
            }
          }
        }
      }
    }
    phonePNG500: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 500, toFormat: PNG) {
              src
              aspectRatio
              originalName
            }
          }
        }
      }
    }
    phoneWEBP300: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 300, toFormat: WEBP, quality: 90) {
              src
              aspectRatio
              originalName
            }
          }
        }
      }
    }
    phoneWEBP400: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 400, toFormat: WEBP, quality: 90) {
              src
              aspectRatio
              originalName
            }
          }
        }
      }
    }
    phoneWEBP500: allImageSharp(
      filter: { id: { regex: "/phone(-perspective)*.png/" } }
    ) {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 500, toFormat: WEBP, quality: 90) {
              src
              aspectRatio
              originalName
            }
          }
        }
      }
    }
  }
`;

// export const pageQuery2 = graphql`
//   query IndexQuery2 {
//     phonePNG300: imageSharp(id: { regex: "/phone.png/" }) {
//       resize(width: 301, toFormat: PNG) {
//         src
//         aspectRatio
//       }
//     }
//     phonePNG400: imageSharp(id: { regex: "/phone.png/" }) {
//       resize(width: 400, toFormat: PNG) {
//         src
//         aspectRatio
//       }
//     }
//     phonePNG500: imageSharp(id: { regex: "/phone.png/" }) {
//       resize(width: 500, toFormat: PNG) {
//         src
//         aspectRatio
//       }
//     }
//     phoneWEBP300: imageSharp(id: { regex: "/phone.png/" }) {
//       resize(width: 300, toFormat: WEBP, quality: 90) {
//         src
//         aspectRatio
//       }
//     }
//     phoneWEBP400: imageSharp(id: { regex: "/phone.png/" }) {
//       resize(width: 400, toFormat: WEBP, quality: 90) {
//         src
//         aspectRatio
//       }
//     }
//     phoneJPEG500: imageSharp(id: { regex: "/phone.png/" }) {
//       resize(width: 500, toFormat: WEBP, quality: 90) {
//         src
//         aspectRatio
//       }
//     }
//   }
// `;

// export const pageQuery3 = graphql`
//   query IndexQuery3 {
//     phonePerspectivePNG300: imageSharp(
//       id: { regex: "/phone-perspective.png/" }
//     ) {
//       resize(width: 300, toFormat: PNG) {
//         src
//         aspectRatio
//       }
//     }
//     phonePerspectivePNG400: imageSharp(
//       id: { regex: "/phone-perspective.png/" }
//     ) {
//       resize(width: 400, toFormat: PNG) {
//         src
//         aspectRatio
//       }
//     }
//     phonePerspectivePNG500: imageSharp(
//       id: { regex: "/phone-perspective.png/" }
//     ) {
//       resize(width: 500, toFormat: PNG) {
//         src
//         aspectRatio
//       }
//     }
//     phonePerspectiveeWEBP300: imageSharp(
//       id: { regex: "/phone-perspective.png/" }
//     ) {
//       resize(width: 300, toFormat: WEBP, quality: 90) {
//         src
//         aspectRatio
//       }
//     }
//     phonePerspectiveWEBP400: imageSharp(
//       id: { regex: "/phone-perspective.png/" }
//     ) {
//       resize(width: 400, toFormat: WEBP, quality: 90) {
//         src
//         aspectRatio
//       }
//     }
//     phonePerspectiveJPEG500: imageSharp(
//       id: { regex: "/phone-perspective.png/" }
//     ) {
//       resize(width: 500, toFormat: WEBP, quality: 90) {
//         src
//         aspectRatio
//       }
//     }
//   }
// `;

// allImageSharp {
//   edges {
//     node {
//       ... on ImageSharp {
//         resize(width: 125, height: 125, rotate: 180) {
//           src
//         }
//       }
//     }
//   }
// }
